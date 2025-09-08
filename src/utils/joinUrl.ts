export function joinUrl(base: string | undefined, path: string | undefined) {
  console.log("before rllllllllll:",base, path);

  const cleanBase = (base || '').replace(/\/$/, '');    // default to empty string
  const cleanPath = (path || '').replace(/^\//, '');
  console.log("after urllllllllll:",cleanBase, cleanPath);
  return `${cleanBase}/${cleanPath}`;
}


