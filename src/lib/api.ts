export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchBlogs() {
  console.log("api url:", API_BASE_URL);
  const res = await fetch(`${API_BASE_URL}/api/v1/blogs/`, {
    headers: { "Content-Type": "application/json" },
    cache: "no-store", //optional
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await res.json();
  console.log("Fetched blogs:", data);

  return data;
}


export async function fetchServices(){
  const res = await fetch(`${API_BASE_URL}/api/v1/services/`, {
    headers: { "Content-Type": "application/json" },
    cache: "no-store", //optional
  });

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  const data = await res.json();
  console.log("Fetched services:", data);

  return data;
  
}