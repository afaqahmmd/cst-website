import { NextRequest, NextResponse } from "next/server";
import { fetchIndustriesSSR } from "@/lib/api-ssr";

// Prevent static optimization and caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";
    
    console.log(`Fetching industries from backend: ${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/sols-industries/?page=${page}`);
    
    // Use the existing SSR function to fetch data
    const response = await fetchIndustriesSSR();

    return NextResponse.json(response);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch industries",
        results: [],
      },
      { status: 500 }
    );
  }
}
