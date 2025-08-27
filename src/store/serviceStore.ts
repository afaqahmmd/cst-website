import { create } from 'zustand';
import { Service, ServicesApiResponse, ServiceApiResponse } from '@/types/service';
import { fetchServices, fetchServiceById } from '@/lib/api';

interface ServiceStore {
  // State
  services: Service[];
  currentService: Service | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchServices: () => Promise<void>;
  fetchServiceById: (id: number) => Promise<void>;
  setServices: (services: Service[]) => void;
  setCurrentService: (service: Service | null) => void;
  clearError: () => void;
  reset: () => void;
}

export const useServiceStore = create<ServiceStore>((set, get) => ({
  // Initial state
  services: [],
  currentService: null,
  isLoading: false,
  error: null,

  // Actions
  fetchServices: async () => {
    set({ isLoading: true, error: null });
    
    try {
      const response: ServicesApiResponse = await fetchServices();
      set({ 
        services: response.data, 
        isLoading: false, 
        error: null 
      });
    } catch (error) {
      set({ 
        services: [], 
        isLoading: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch services' 
      });
    }
  },

  fetchServiceById: async (id: number) => {
    set({ isLoading: true, error: null });
    
    try {
      const response: ServiceApiResponse = await fetchServiceById(id);
      set({ 
        currentService: response.data, 
        isLoading: false, 
        error: null 
      });
    } catch (error) {
      set({ 
        currentService: null, 
        isLoading: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch service' 
      });
    }
  },

  setServices: (services: Service[]) => {
    set({ services });
  },

  setCurrentService: (service: Service | null) => {
    set({ currentService: service });
  },

  clearError: () => {
    set({ error: null });
  },

  reset: () => {
    set({ 
      services: [],
      currentService: null, 
      isLoading: false, 
      error: null 
    });
  },
})); 