import axios from "axios";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchBlogs() {
  console.log("api url:", API_BASE_URL);
  const res = await axios.get(`${API_BASE_URL}/api/v1/sols-blogs/`, {
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  });

  console.log("blogs res:", res.data);

  if (!res.data) {
    throw new Error("Failed to fetch blogs");
  }

  const data = res.data;
  console.log("Fetched blogs:", data);

  return data;
}

export async function fetchBlogById(id: number) {
  console.log("Fetching blog with id:", id);
  const res = await fetch(`${API_BASE_URL}/api/v1/sols-blogs/${id}/`, {
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch blog with id ${id}`);
  }

  const data = await res.json();
  console.log("Fetched blog:", data);

  // Return the blog data directly since the API returns the blog object directly
  return data;
}

export async function fetchServices() {
  console.log("Fetching services from:", `${API_BASE_URL}/api/v1/sols-services/`);
  const res = await fetch(`${API_BASE_URL}/api/v1/sols-services/`, {
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  const data = await res.json();
  console.log("Fetched services:", data);
  console.log("Services data structure:", {
    hasResults: !!data.results,
    resultsLength: data.results?.length,
    firstService: data.results?.[0],
  });

  return data;
}

export async function fetchServiceById(id: number) {
  console.log("Fetching service with id:", id);
  const res = await fetch(`${API_BASE_URL}/api/v1/sols-services/${id}/`, {
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch service with id ${id}`);
  }

  const data = await res.json();
  console.log("Fetched service:", data);

  return data;
}

export async function fetchServiceBySlug(slug: string) {
  console.log("Fetching service with slug:", slug);
  const res = await fetch(`${API_BASE_URL}/api/v1/sols-services/${slug}/`, {
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch service with slug ${slug}`);
  }

  const data = await res.json();
  console.log("Fetched service by slug:", data);

  return data;
}

export async function fetchProjects() {
  console.log("Fetching projects from:", `${API_BASE_URL}/api/v1/sols-projects/`);
  const res = await fetch(`${API_BASE_URL}/api/v1/sols-projects/`, {
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
    cache: "no-store", //optional
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await res.json();
  console.log("Fetched projects:", data);

  return data;
}

export async function fetchProjectById(id: number) {
  console.log("Fetching project with id:", id);
  const res = await fetch(`${API_BASE_URL}/api/v1/sols-projects/${id}/`, {
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch project with id ${id}`);
  }

  const data = await res.json();
  console.log("Fetched project with id:", data);

  return data;
}

export async function fetchIndustries() {
  console.log("Fetching industries from:", `${API_BASE_URL}/api/v1/sols-industries/`);
  const res = await fetch(`${API_BASE_URL}/api/v1/sols-industries/`, {
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch industries");
  }

  const data = await res.json();
  console.log("Fetched industries:", data);

  return data;
}

export async function fetchIndustryById(id: number) {
  console.log("Fetching industry with id:", id);
  const res = await fetch(`${API_BASE_URL}/api/v1/sols-industries/${id}/`, {
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch industry with id ${id}`);
  }

  const data = await res.json();
  console.log("Fetched industry:", data);

  return data;
}

export async function fetchIndustryBySlug(slug: string) {
  console.log("Fetching industry with slug:", slug);
  const res = await fetch(`${API_BASE_URL}/api/v1/sols-industries/${slug}/`, {
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch industry with slug ${slug}`);
  }

  const data = await res.json();
  console.log("Fetched industry by slug:", data);

  return data;
}
