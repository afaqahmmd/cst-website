// Test file to verify SSR implementation
// This demonstrates how the SSR version works

import { fetchServicesSSR, withSSRErrorHandling } from "@/lib/api-ssr";

// Example of how the SSR version works
export async function testServicesSSR() {
  console.log("Testing SSR Services Section...");

  try {
    // Test the SSR API call
    const { data: servicesData, error } = await withSSRErrorHandling(fetchServicesSSR);

    if (error) {
      console.error("SSR Error:", error);
      return { success: false, error };
    }

    console.log("SSR Success - Services data:", {
      hasData: !!servicesData?.data,
      dataLength: servicesData?.data?.length,
      firstService: servicesData?.data?.[0],
    });

    return {
      success: true,
      data: servicesData,
      servicesCount: servicesData?.data?.length || 0,
    };
  } catch (error) {
    console.error("SSR Test failed:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

// Example usage in a server component
export async function ServicesSectionSSRExample() {
  const { data: servicesData, error } = await withSSRErrorHandling(fetchServicesSSR);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const services = servicesData?.data || [];

  return (
    <div>
      <h2>Services (SSR)</h2>
      <p>Found {services.length} services</p>
      {services.map((service: any) => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}
