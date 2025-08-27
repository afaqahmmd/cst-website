import { create } from 'zustand';
import { Blog, BlogApiResponse } from '@/types/blog';
import { fetchBlogById } from '@/lib/api';

interface BlogStore {
  // State
  currentBlog: Blog | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchBlog: (id: number) => Promise<void>;
  setCurrentBlog: (blog: Blog | null) => void;
  clearError: () => void;
  reset: () => void;
}

export const useBlogStore = create<BlogStore>((set, get) => ({
  // Initial state
  currentBlog: null,
  isLoading: false,
  error: null,

  // Actions
  fetchBlog: async (id: number) => {
    set({ isLoading: true, error: null });
    
    try {
      const response: BlogApiResponse = await fetchBlogById(id);
      set({ 
        currentBlog: response.data, 
        isLoading: false, 
        error: null 
      });
    } catch (error) {
      set({ 
        currentBlog: null, 
        isLoading: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch blog' 
      });
    }
  },

  setCurrentBlog: (blog: Blog | null) => {
    set({ currentBlog: blog });
  },

  clearError: () => {
    set({ error: null });
  },

  reset: () => {
    set({ 
      currentBlog: null, 
      isLoading: false, 
      error: null 
    });
  },
})); 