# SSR-Compatible API Documentation

This document explains how to use the new SSR-compatible API functions in `api-ssr.ts`.

## Overview

The `api-ssr.ts` file provides server-side rendering compatible versions of all API functions from the original `api.ts` file. Key improvements include:

- ✅ Standardized on native `fetch` (no axios dependency)
- ✅ Environment variable validation
- ✅ Production-ready headers (removes dev-specific headers in production)
- ✅ Robust error handling for SSR scenarios
- ✅ Server Actions support for Next.js App Router
- ✅ TypeScript support with proper types

## Key Features

### 1. Environment Variable Validation

```typescript
// Throws error if NEXT_PUBLIC_API_BASE_URL is not set
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
if (!API_BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL environment variable is required");
}
```

### 2. Production-Ready Headers

```typescript
// Automatically removes ngrok headers in production
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
```

### 3. Generic Error Handling

```typescript
// Wrapper function for consistent error handling
async function ssrFetch<T>(
  url: string,
  options: RequestInit = {},
  cache: RequestCache = "no-store"
): Promise<T>;
```

## Available Functions

### Blog Functions

- `fetchBlogsSSR()` - Fetch all blogs
- `fetchBlogByIdSSR(id: number)` - Fetch blog by ID
- `fetchBlogBySlugSSR(slug: string)` - Fetch blog by slug

### Service Functions

- `fetchServicesSSR()` - Fetch all services
- `fetchServiceByIdSSR(id: number)` - Fetch service by ID
- `fetchServiceBySlugSSR(slug: string)` - Fetch service by slug

### Project Functions

- `fetchProjectsSSR()` - Fetch all projects
- `fetchProjectByIdSSR(id: number)` - Fetch project by ID
- `fetchProjectBySlugSSR(slug: string)` - Fetch project by slug

### Industry Functions

- `fetchIndustriesSSR()` - Fetch all industries
- `fetchIndustryByIdSSR(id: number)` - Fetch industry by ID
- `fetchIndustryBySlugSSR(slug: string)` - Fetch industry by slug

## Server Actions (App Router)

For Next.js App Router, use the Server Actions:

```typescript
// Blog Actions
getBlogsAction()
getBlogBySlugAction(slug: string)

// Service Actions
getServicesAction()
getServiceBySlugAction(slug: string)

// Project Actions
getProjectsAction()
getProjectBySlugAction(slug: string)

// Industry Actions
getIndustriesAction()
getIndustryBySlugAction(slug: string)
```

## Usage Examples

### 1. Server Component (App Router)

```typescript
export async function BlogList() {
  const { data: blogs, error } = await withSSRErrorHandling(fetchBlogsSSR);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {blogs?.data?.map((blog: any) => (
        <div key={blog.id}>{blog.title}</div>
      ))}
    </div>
  );
}
```

### 2. Server Action

```typescript
export async function LoadBlog(slug: string) {
  "use server";

  const result = await getBlogBySlugAction(slug);

  if (result.error) {
    throw new Error(result.error);
  }

  return result.data;
}
```

### 3. getServerSideProps (Pages Router)

```typescript
export async function getServerSideProps(context: any) {
  try {
    const { slug } = context.params;

    const blog = await fetchBlogBySlugSSR(slug);

    return {
      props: { blog },
    };
  } catch (error) {
    return { notFound: true };
  }
}
```

### 4. Parallel Data Fetching

```typescript
export async function HomePageData() {
  const [services, projects, industries] = await Promise.all([
    fetchServicesSSR(),
    fetchProjectsSSR(),
    fetchIndustriesSSR(),
  ]);

  return {
    services: services.data,
    projects: projects.data,
    industries: industries.data,
  };
}
```

## Error Handling

### Using withSSRErrorHandling

```typescript
const { data, error } = await withSSRErrorHandling(
  () => fetchBlogsSSR(),
  { data: [], message: "Fallback data" } // Optional fallback
);
```

### Direct Error Handling

```typescript
try {
  const blogs = await fetchBlogsSSR();
  // Use blogs data
} catch (error) {
  console.error("Failed to fetch blogs:", error);
  // Handle error
}
```

## Migration Guide

### From Client-Side to SSR

**Before (Client-side with React Query):**

```typescript
const { data: blogs, isLoading, error } = useBlogs();
```

**After (SSR):**

```typescript
// In server component
const { data: blogs, error } = await withSSRErrorHandling(fetchBlogsSSR);
```

### From getServerSideProps

```typescript
// Before
const res = await fetch(`${API_BASE_URL}/api/v1/blogs/`);
const blogs = await res.json();

// After
const blogs = await fetchBlogsSSR();
```

## Best Practices

1. **Use Server Actions for App Router**: Prefer Server Actions over direct function calls in App Router
2. **Handle Errors Gracefully**: Always use error handling wrappers
3. **Parallel Fetching**: Use `Promise.all()` for multiple API calls
4. **Caching**: Consider using appropriate cache strategies for your use case
5. **Type Safety**: Use the provided TypeScript types for better development experience

## Environment Variables

Make sure you have the following environment variable set:

```env
NEXT_PUBLIC_API_BASE_URL=your_api_base_url_here
```

## Notes

- The original `api.ts` file remains unchanged for production use
- All functions return the same data structure as the original API
- Console logging is minimized for production performance
- Headers are automatically configured based on environment
