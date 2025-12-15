# Blogs Page - Server Component Refactor

This document outlines the refactoring of the blogs page from client-side rendering to server-side rendering with ISR (Incremental Static Regeneration).

## Key Changes

### 1. Server Component Architecture

- **Before**: Client component with `"use client"` directive
- **After**: Server component that fetches data on the server
- **Benefits**: Better SEO, faster initial page load, reduced client-side JavaScript

### 2. ISR Implementation

```typescript
// ISR: Revalidate every 60 seconds
export const revalidate = 60;
```

- Pages are statically generated and revalidated every 60 seconds
- New blogs appear without requiring a redeploy
- Balances performance with content freshness

### 3. Server-Side Data Fetching

- **API Endpoint**: `${API_BASE_URL}/api/v1/blogs?page=${page}&per_page=10&search=${query}`
- **Pagination**: Server-side pagination with URL searchParams
- **Search**: Server-side search functionality
- **Error Handling**: Graceful fallbacks for API failures

### 4. URL-Based State Management

- **Search**: `?query=search-term`
- **Pagination**: `?page=2`
- **Tags**: `?tag=technology`
- **Combined**: `?query=react&page=2&tag=frontend`

### 5. SEO Optimization

- **Dynamic Metadata**: `generateMetadata` function creates page-specific titles and descriptions
- **Search Results**: Special metadata for search result pages
- **Pagination**: Page-specific titles for paginated results
- **Open Graph**: Social media sharing optimization

## Component Structure

### Server Components

- `BlogsPage` - Main page component with ISR
- `BlogsHeader` - Page header
- `BlogsSectionHeader` - Section header

### Client Components

- `BlogsClientWrapper` - Main client wrapper with SPA behavior
- `BlogSearchAndFilters` - Dynamic search and tag filtering
- `BlogsGrid` - Blog grid with client-side filtering
- `BlogPagination` - Interactive pagination controls
- `BlogCard` - Individual blog card display with hover effects

### API Routes

- `/api/blogs` - Client-side API endpoint for dynamic data fetching

## API Integration

### Updated SSR API Helper

```typescript
export async function fetchBlogsSSR(
  page: number = 1,
  perPage: number = 10,
  search?: string
): Promise<any>;
```

### Response Structure

```typescript
interface BlogsApiResponse {
  message: string;
  data: Blog[];
  pagination?: {
    current_page: number;
    total_pages: number;
    total_count: number;
    per_page: number;
    has_next: boolean;
    has_previous: boolean;
  };
}
```

## URL Patterns

### Basic Pages

- `/blogs` - First page of all blogs
- `/blogs?page=2` - Second page of all blogs

### Search

- `/blogs?query=react` - Search for "react"
- `/blogs?query=react&page=2` - Second page of "react" search

### Tags

- `/blogs?tag=technology` - Filter by "technology" tag
- `/blogs?tag=technology&page=2` - Second page of "technology" tag

### Combined

- `/blogs?query=react&tag=frontend&page=2` - Complex filtering

## Performance Benefits

1. **Faster Initial Load**: Server-rendered HTML with ISR
2. **Better SEO**: Search engines can crawl content immediately
3. **SPA Experience**: Dynamic search and pagination without page reloads
4. **Debounced Search**: Optimized API calls with 300ms debounce
5. **ISR Caching**: Static generation with periodic updates
6. **URL-Based Navigation**: Browser back/forward works correctly
7. **Hybrid Architecture**: Server-side initial load + client-side interactivity

## Migration Notes

### What Changed

- Removed `"use client"` from main page
- Replaced client-side state with URL searchParams
- Moved data fetching to server
- Added ISR revalidation
- Created server-side components for search/pagination

### What Stayed the Same

- UI design and styling
- Blog card components
- Overall page layout
- Client-side components that need interactivity

## Testing

The implementation includes test files:

- `BlogsSSR.test.tsx` - Tests for SSR functionality
- Tests cover pagination, search, and error handling

## Environment Variables

Ensure these are set:

- `NEXT_PUBLIC_API_BASE_URL` - Base URL for the API
- `NODE_ENV` - Environment (production/development)

## Future Enhancements

1. **Advanced Filtering**: Date ranges, author filters
2. **Sorting Options**: By date, popularity, relevance
3. **Infinite Scroll**: Alternative to pagination
4. **Search Suggestions**: Autocomplete functionality
5. **Analytics**: Track search queries and popular content
