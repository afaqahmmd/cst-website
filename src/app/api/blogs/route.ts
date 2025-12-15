import { NextRequest, NextResponse } from "next/server";
import { fetchBlogsSSR } from "@/lib/api-ssr";

// Prevent static optimization and caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const query = searchParams.get("search") || "";
    const tags = searchParams.getAll("tag").filter(tag => tag && tag !== "All");
    
    // Use the existing SSR function to fetch data
    const response = await fetchBlogsSSR(page, 9, query, tags);

    // Calculate pagination from API response
    const perPage = 9;
    const totalCount = response.count || response.results.length;
    const totalPages = Math.ceil(totalCount / perPage);

    const pagination = {
      current_page: page,
      total_pages: totalPages,
      total_count: totalCount,
      per_page: perPage,
      has_next: !!response.next,
      has_previous: !!response.previous,
    };

    return NextResponse.json({
      ...response,
      pagination,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch blogs",
        results: [],
        pagination: {
          current_page: 1,
          total_pages: 1,
          total_count: 0,
          per_page: 9,
          has_next: false,
          has_previous: false,
        },
      },
      { status: 500 }
    );
  }
}
