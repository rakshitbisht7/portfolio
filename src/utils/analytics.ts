// Analytics utility for tracking project views
import { projectId, publicAnonKey } from './supabase/info';

export const trackProjectView = async (projectIdToTrack: string, projectTitle: string): Promise<void> => {
  try {
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-1a91da27/track-project-view`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({ 
          projectId: projectIdToTrack, 
          projectTitle 
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to track view: ${response.statusText}`);
    }
  } catch (error) {
    // Silently fail - we don't want to disrupt user experience
    // Error is logged for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to track project view:', error);
    }
  }
};

export const submitContactForm = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-1a91da27/contact`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.error || 'Failed to submit form' };
    }

    return { success: true };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return { 
      success: false, 
      error: 'Network error. Please check your connection and try again.' 
    };
  }
};
