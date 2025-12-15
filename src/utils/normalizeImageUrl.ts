/**
 * Normalizes image URLs to use HTTPS
 * @param url The image URL to normalize
 * @returns A secure HTTPS URL
 */
export const normalizeImageUrl = (url?: string | null): string => {
  if (!url) return '';
  
  // If the URL is already HTTPS, return as is
  if (url.startsWith('https://')) {
    return url;
  }
  
  // If the URL is HTTP, convert to HTTPS
  if (url.startsWith('http://')) {
    return url.replace('http://', 'https://');
  }
  
  // If the URL is protocol-relative (starts with //), add HTTPS
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  
  // For any other case, return as is (might be a relative path or already normalized)
  return url;
};
