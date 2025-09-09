import { supabase } from './supabase';

const API_BASE_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1`;

export interface RegisterData {
  email: string;
  password: string;
  role: 'Donor' | 'Orphanage';
}

export interface LoginData {
  email: string;
  password: string;
}

export interface VerifyEmailData {
  email: string;
  verificationCode: string;
}

export interface AuthUser {
  id: string;
  email: string;
  role: 'Donor' | 'Orphanage';
  isVerified: boolean;
}

class AuthService {
  private sessionToken: string | null = null;
  private currentUser: AuthUser | null = null;

  constructor() {
    // Load session from localStorage on initialization
    this.loadSession();
  }

  private loadSession() {
    const token = localStorage.getItem('sessionToken');
    const user = localStorage.getItem('currentUser');
    
    if (token && user) {
      this.sessionToken = token;
      this.currentUser = JSON.parse(user);
    }
  }

  private saveSession(token: string, user: AuthUser) {
    this.sessionToken = token;
    this.currentUser = user;
    localStorage.setItem('sessionToken', token);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  private clearSession() {
    this.sessionToken = null;
    this.currentUser = null;
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('currentUser');
  }

  async register(data: RegisterData): Promise<{ success: boolean; message: string; accountId?: string }> {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        return { success: false, message: result.error || 'Registration failed' };
      }

      return { 
        success: true, 
        message: result.message,
        accountId: result.accountId 
      };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: 'Network error. Please try again.' };
    }
  }

  async verifyEmail(data: VerifyEmailData): Promise<{ success: boolean; message: string; role?: string }> {
    try {
      const response = await fetch(`${API_BASE_URL}/verify-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        return { success: false, message: result.error || 'Verification failed' };
      }

      return { 
        success: true, 
        message: result.message,
        role: result.role 
      };
    } catch (error) {
      console.error('Verification error:', error);
      return { success: false, message: 'Network error. Please try again.' };
    }
  }

  async login(data: LoginData): Promise<{ success: boolean; message: string; user?: AuthUser }> {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        return { success: false, message: result.error || 'Login failed' };
      }

      // Save session
      this.saveSession(result.sessionToken, result.user);

      return { 
        success: true, 
        message: result.message,
        user: result.user 
      };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Network error. Please try again.' };
    }
  }

  logout() {
    this.clearSession();
  }

  getCurrentUser(): AuthUser | null {
    return this.currentUser;
  }

  getSessionToken(): string | null {
    return this.sessionToken;
  }

  isAuthenticated(): boolean {
    return this.sessionToken !== null && this.currentUser !== null;
  }
}

export const authService = new AuthService();