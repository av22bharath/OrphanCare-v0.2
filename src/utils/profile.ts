import { authService } from './auth';

const API_BASE_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1`;

export interface DonorProfileData {
  donorName: string;
  phoneNumber: string;
  donationPref?: string;
}

export interface OrphanageProfileData {
  orphanageName: string;
  location: string;
  capacity?: number;
  establishedDate?: string;
  maleCount?: number;
  femaleCount?: number;
  bankDetails: {
    accountName: string;
    accountType: string;
    accountHolderName: string;
    accountNumber: string;
    ifscCode: string;
  };
}

class ProfileService {
  async completeDonorProfile(profileData: DonorProfileData): Promise<{ success: boolean; message: string }> {
    try {
      const currentUser = authService.getCurrentUser();
      const sessionToken = authService.getSessionToken();

      if (!currentUser || !sessionToken) {
        return { success: false, message: 'User not authenticated' };
      }

      const response = await fetch(`${API_BASE_URL}/complete-donor-profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          accountId: currentUser.id,
          ...profileData
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        return { success: false, message: result.error || 'Failed to complete profile' };
      }

      return { 
        success: true, 
        message: result.message
      };
    } catch (error) {
      console.error('Complete donor profile error:', error);
      return { success: false, message: 'Network error. Please try again.' };
    }
  }

  async completeOrphanageProfile(profileData: OrphanageProfileData): Promise<{ success: boolean; message: string }> {
    try {
      const currentUser = authService.getCurrentUser();
      const sessionToken = authService.getSessionToken();

      if (!currentUser || !sessionToken) {
        return { success: false, message: 'User not authenticated' };
      }

      const response = await fetch(`${API_BASE_URL}/complete-orphanage-profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          accountId: currentUser.id,
          ...profileData
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        return { success: false, message: result.error || 'Failed to complete profile' };
      }

      return { 
        success: true, 
        message: result.message
      };
    } catch (error) {
      console.error('Complete orphanage profile error:', error);
      return { success: false, message: 'Network error. Please try again.' };
    }
  }
}

export const profileService = new ProfileService();