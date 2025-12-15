import React from "react";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import Footer from "@/components/Footer/Footer";
import { fetchProjectsSSR, fetchBlogsSSR } from "@/lib/api-ssr";
import {
  ProjectsHeroSection,
  FeaturedProjectSection,
  RecentProjectsSection,
  PopularProjectsSection,
} from "@/components/projects";

// Force dynamic rendering to always fetch fresh data from CMS
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const page = async () => {
  // Fetch projects data on the server
  let projectsData = [];
  let blogsData = [];
  let error = null;

  try {
    const [projectsResponse, blogsResponse] = await Promise.all([
      fetchProjectsSSR(),
      fetchBlogsSSR()
    ]);
    console.log("projects response", projectsResponse);
    console.log("blogs response", blogsResponse);
    // Extract the results array from the response (API returns { count, next, previous, results: [...] })
    projectsData = projectsResponse?.results || [];
    blogsData = blogsResponse?.results || [];
  } catch (err) {
    console.error("Error fetching data:", err);
    error = err instanceof Error ? err.message : "Failed to fetch data";
  }

  // Show error state
  if (error) {
    return (
      <div className='text-center py-12'>
        <p className='text-red-600 mb-4'>Error loading projects: {error}</p>
      </div>
    );
  }

  return (
    <main className='w-full font-roboto'>
      <ProjectsHeroSection />

      <FeaturedProjectSection />

      <RecentProjectsSection projects={projectsData} />

      <PopularProjectsSection blogs={blogsData} />

      <InfoSection
        title='Have a vision in mind?'
        subText="Let's bring your project to life — just like we did with 40+ businesses."
      />

      <StayInLoop />

      {/* <Footer /> */}
    </main>
  );
};

export default page;
