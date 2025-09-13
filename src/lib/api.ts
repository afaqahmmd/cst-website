import axios from "axios";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchBlogs() {
  console.log("api url:", API_BASE_URL);
  const res = await axios.get(`${API_BASE_URL}/api/v1/blogs/`, {
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
  const res = await fetch(`${API_BASE_URL}/api/v1/blogs/${id}/`, {
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

  return data;
}

export async function fetchServices() {
  console.log("Fetching services from:", `${API_BASE_URL}/api/v1/services/`);
  const res = await fetch(`${API_BASE_URL}/api/v1/services/`, {
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
    hasData: !!data.data,
    dataLength: data.data?.length,
    firstService: data.data?.[0],
    message: data.message,
  });

  return data;
}

export async function fetchServiceById(id: number) {
  console.log("Fetching service with id:", id);
  const res = await fetch(`${API_BASE_URL}/api/v1/services/${id}/`, {
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

export async function fetchProjects() {
  console.log("Fetching projects from:", `${API_BASE_URL}/api/v1/projects/`);
  const res = await fetch(`${API_BASE_URL}/api/v1/projects/`, {
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

  return data.data;
}

export async function fetchProjectById(id: number) {
  console.log("Fetching project with id:", id);
  const res = await fetch(`${API_BASE_URL}/api/v1/projects/${id}/`, {
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
