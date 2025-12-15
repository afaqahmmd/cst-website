export function joinUrl(base: string | undefined, path: string | undefined) {
  console.log("before rllllllllll:",base, path);

  // If path is already an absolute URL, return it as-is (supports http and https)
  if (path && /^(https?:)?\/\//i.test(path)) {
    return path;
  }

  const cleanBase = (base || '').replace(/\/$/, '');
  const cleanPath = (path || '').replace(/^\//, '');
  console.log("after urllllllllll:",cleanBase, cleanPath);

  if (!cleanBase && cleanPath) return `/${cleanPath}`;
  if (cleanBase && !cleanPath) return cleanBase;
  if (!cleanBase && !cleanPath) return "";

  return `${cleanBase}/${cleanPath}`;
}


