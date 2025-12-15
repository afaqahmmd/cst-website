import { NextRequest } from "next/server";

// Environment variable validation
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
if (!API_BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL environment variable is required");
}

// SSR-compatible headers configuration
const getHeaders = (isProduction: boolean = process.env.NODE_ENV === "production") => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  // Only add ngrok header in development
  if (!isProduction) {
    headers["ngrok-skip-browser-warning"] = "true";
  }

  return headers;
};

// Generic fetch wrapper with proper error handling
async function ssrFetch<T>(
  url: string,
  options: RequestInit = {},
  cache: RequestCache = "force-cache"
): Promise<T> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...getHeaders(),
        ...options.headers,
      },
      cache,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`SSR API Error for ${url}:`, error);
    throw error;
  }
}

// Blog API functions
export async function fetchBlogsSSR(
  page: number = 1,
  perPage: number = 9,
  search?: string,
  tags?: string[]
): Promise<any> {
  const params = new URLSearchParams({
    page: page.toString(),
    page_size: perPage.toString(),
  });

  console.log("fetchBlogsSSR called with:", { page, perPage, search, tags });

  if (search && search.trim()) {
    params.append("search", search.trim());
  }

  // Add tag filters if provided
  if (tags && tags.length > 0) {
    tags.forEach(tag => {
      if (tag && tag !== "All") {
        params.append("tags__name", tag);
      }
    });
  }

  const url = `${API_BASE_URL}/api/v1/sols-blogs/?${params.toString()}`;
  console.log("blog search url:", url);
  return ssrFetch(url, {}, "no-store");
}

export async function fetchBlogByIdSSR(id: number): Promise<any> {
  const url = `${API_BASE_URL}/api/v1/sols-blogs/${id}/`;
  return ssrFetch(url);
}

export async function fetchBlogBySlugSSR(slug: string): Promise<any> {
  const url = `${API_BASE_URL}/api/v1/sols-blogs/${slug}/`;
  return ssrFetch(url);
}

// Services API functions
export async function fetchServicesSSR(): Promise<any> {
  const url = `${API_BASE_URL}/api/v1/sols-services/`;
  return ssrFetch(url, {}, "no-store");
}

export async function fetchServiceByIdSSR(id: number): Promise<any> {
  const url = `${API_BASE_URL}/api/v1/sols-services/${id}/`;
  return ssrFetch(url);
}

export async function fetchServiceBySlugSSR(slug: string): Promise<any> {
  const url = `${API_BASE_URL}/api/v1/sols-services/${slug}/`;
  return ssrFetch(url);
}

// Projects API functions
export async function fetchProjectsSSR(): Promise<any> {
  const url = `${API_BASE_URL}/api/v1/sols-projects/`;
  return ssrFetch(url, {}, "no-store");
}

export async function fetchProjectByIdSSR(id: number): Promise<any> {
  const url = `${API_BASE_URL}/api/v1/sols-projects/${id}/`;
  return ssrFetch(url);
}

export async function fetchProjectBySlugSSR(slug: string): Promise<any> {
  const url = `${API_BASE_URL}/api/v1/sols-projects/${slug}/`;
  return ssrFetch(url);
}

// Industries API functions
export async function fetchIndustriesSSR(page: number = 1): Promise<any> {
  const params = new URLSearchParams({
    page: page.toString(),
  });
  const url = `${API_BASE_URL}/api/v1/sols-industries/?${params.toString()}`;
  console.log("Fetching industries from:", url);
  return ssrFetch(url, {}, "no-store");
}

export async function fetchIndustryByIdSSR(id: number): Promise<any> {
  const url = `${API_BASE_URL}/api/v1/sols-industries/${id}/`;
  return ssrFetch(url);
}

export async function fetchIndustryBySlugSSR(slug: string): Promise<any> {
  const url = `${API_BASE_URL}/api/v1/sols-industries/${slug}/`;
  return ssrFetch(url);
}

// Server Actions for Next.js App Router
export async function getBlogsAction(): Promise<{ data?: any; error?: string }> {
  try {
    const data = await fetchBlogsSSR();
    return { data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Failed to fetch blogs" };
  }
}

export async function getBlogBySlugAction(slug: string): Promise<{ data?: any; error?: string }> {
  try {
    const data = await fetchBlogBySlugSSR(slug);
    return { data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Failed to fetch blog" };
  }
}

export async function getServicesAction(): Promise<{ data?: any; error?: string }> {
  try {
    const data = await fetchServicesSSR();
    return { data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Failed to fetch services" };
  }
}

export async function getServiceBySlugAction(
  slug: string
): Promise<{ data?: any; error?: string }> {
  try {
    const data = await fetchServiceBySlugSSR(slug);
    return { data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Failed to fetch service" };
  }
}

export async function getProjectsAction(): Promise<{ data?: any; error?: string }> {
  try {
    const data = await fetchProjectsSSR();
    return { data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Failed to fetch projects" };
  }
}

export async function getProjectBySlugAction(
  slug: string
): Promise<{ data?: any; error?: string }> {
  try {
    const data = await fetchProjectBySlugSSR(slug);
    return { data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Failed to fetch project" };
  }
}

export async function getIndustriesAction(): Promise<{ data?: any; error?: string }> {
  try {
    const data = await fetchIndustriesSSR();
    return { data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Failed to fetch industries" };
  }
}

export async function getIndustryBySlugAction(
  slug: string
): Promise<{ data?: any; error?: string }> {
  try {
    const data = await fetchIndustryBySlugSSR(slug);
    return { data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Failed to fetch industry" };
  }
}

// Utility function for server components
export async function withSSRErrorHandling<T>(
  fetchFunction: () => Promise<T>,
  fallbackData?: T
): Promise<{ data: T | undefined; error: string | undefined }> {
  try {
    const data = await fetchFunction();
    return { data, error: undefined };
  } catch (error) {
    console.error("SSR Error:", error);
    return {
      data: fallbackData,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

// Type definitions for better TypeScript support
export interface SSRApiResponse<T> {
  data?: T;
  error?: string;
}

export interface SSRApiOptions {
  cache?: RequestCache;
  revalidate?: number;
}
