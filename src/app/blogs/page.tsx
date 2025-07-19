import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import { BlogPagination } from "@/components/ui/blog-pagination";
import "./blogs.css";

export const metadata: Metadata = {
  title: "Ahln Blog - Latest News and Updates",
  description:
    "Stay updated with the latest news, articles, and updates from Ahln Smart Delivery System.",
  openGraph: {
    title: "Ahln Blog - Latest News and Updates",
    description:
      "Stay updated with the latest news, articles, and updates from Ahln Smart Delivery System.",
    url: "https://ahln.ae/blogs",
    type: "website",
  },
};

interface Post {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  rttpg_featured_image_url?: {
    medium?: [string, number, number, boolean];
    full?: [string, number, number, boolean];
  };
}

interface BlogResponse {
  posts: Post[];
  totalPages: number;
  totalPosts: number;
}

async function getBlogPosts(
  page: number = 1,
  perPage: number = 10
): Promise<BlogResponse> {
  try {
    // Fetch posts for the current page
    const response = await fetch(
      `https://blog.ahln.ae/index.php/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );

    if (!response.ok) {
      // If we get a 400 error on pages beyond the first, it might mean we're past the available pages
      if (response.status === 400 && page > 1) {
        return { posts: [], totalPages: 1, totalPosts: 0 };
      }
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    // Get total pages and posts from headers
    const totalPages = parseInt(
      response.headers.get("X-WP-TotalPages") || "1",
      10
    );
    const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0", 10);

    const posts = await response.json();

    return {
      posts,
      totalPages,
      totalPosts,
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return { posts: [], totalPages: 1, totalPosts: 0 };
  }
}

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogsPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  // Await the searchParams promise
  const resolvedSearchParams = await searchParams;

  // Get the current page from the URL query parameters or default to 1
  const currentPage = resolvedSearchParams?.page
    ? parseInt(resolvedSearchParams.page)
    : 1;
  const postsPerPage = 10;

  // Fetch blog posts with pagination
  const { posts, totalPages, totalPosts } = await getBlogPosts(
    currentPage,
    postsPerPage
  );

  return (
    <div className="container mx-auto py-12 lg:px-[200px]">
      <h1 className="text-4xl font-bold mb-8 text-center text-text mt-20">
        Blog Posts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link href={`/blogs/${post.slug}`} passHref key={post.id}>
              <Card className="overflow-hidden flex flex-col h-full shadow-xl shadow-gray-200 border-none">
                {post.rttpg_featured_image_url?.medium && (
                  <div className="relative w-full h-48">
                    <img
                      src={post.rttpg_featured_image_url.medium[0]}
                      alt={post.title.rendered}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>
                    <div
                      className="text-text"
                      style={{ lineHeight: "30px" }}
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </CardTitle>

                  <CardDescription className="text-gray-400">
                    {formatDate(post.date)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow  ">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered,
                    }}
                    className="line-clamp-3 text-gray-500"
                  />
                </CardContent>
                <CardFooter>
                  <Button>Read More</Button>
                </CardFooter>
              </Card>
            </Link>
          ))
        ) : (
          <div className="col-span-2 text-center py-12">
            <p className="text-xl text-text">
              No blog posts found. Please check back later.
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <BlogPagination totalPages={totalPages} currentPage={currentPage} />
      )}

      {/* pagination */}
      {totalPosts > 0 && (
        <div className="text-center text-gray-500 mt-6 text-text">
          Showing page {currentPage} of {totalPages} ({totalPosts} total posts)
        </div>
      )}
    </div>
  );
}
