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

export async function fetchBlogById(id: number) {
  console.log("Fetching blog with id:", id);
  const res = await fetch(`${API_BASE_URL}/api/v1/blogs/${id}/`, {
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch blog with id ${id}`);
  }

  const data = await res.json();
  console.log("Fetched blog:", data);

  return data;
}


export async function fetchServices() {
  console.log("Fetching services from:", `${API_BASE_URL}/api/v1/services/`);
  const res = await fetch(`${API_BASE_URL}/api/v1/services/`, {
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  const data = await res.json();
  console.log("Fetched services:", data);
  console.log("Services data structure:", {
    hasData: !!data.data,
    dataLength: data.data?.length,
    firstService: data.data?.[0],
    message: data.message
  });

  return data;
}

export async function fetchServiceById(id: number) {
  console.log("Fetching service with id:", id);
  const res = await fetch(`${API_BASE_URL}/api/v1/services/${id}/`, {
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch service with id ${id}`);
  }

  const data = await res.json();
  console.log("Fetched service:", data);

  return data;
}