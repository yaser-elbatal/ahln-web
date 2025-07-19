import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import "../blogs.css";

interface Post {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  rttpg_featured_image_url?: {
    full?: [string, number, number, boolean];
  };
  rttpg_author?: {
    display_name: string;
  };
}

// Generate metadata for the page
interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found - Ahln Blog",
      description: "The requested blog post could not be found.",
    };
  }

  const description = post.excerpt.rendered
    .replace(/<[^>]*>/g, "")
    .substring(0, 160);

  return {
    title: `${post.title.rendered} - Ahln Blog`,
    description,
    openGraph: {
      title: post.title.rendered,
      description,
      url: `https://ahln.ae/blogs/${post.slug}`,
      type: "article",
      images: post.rttpg_featured_image_url?.full
        ? [
            {
              url: post.rttpg_featured_image_url.full[0],
              width: post.rttpg_featured_image_url.full[1],
              height: post.rttpg_featured_image_url.full[2],
              alt: post.title.rendered,
            },
          ]
        : [],
    },
  };
}

// Function to get a post by slug
async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(
      `https://blog.ahln.ae/index.php/wp-json/wp/v2/posts?slug=${slug}`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`);
    }

    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4 mt-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/blogs" passHref>
          <Button variant="outline" className="mb-6 text-text">
            ← Back to Blogs
          </Button>
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4 text-text"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          <div className="flex items-center text-gray-600 mb-6 text-text">
            {post.rttpg_author && (
              <span className="mr-4 text-text">
                By {post.rttpg_author.display_name}
              </span>
            )}
            <span className="text-text">{formatDate(post.date)}</span>
          </div>

          {post.rttpg_featured_image_url?.full && (
            <div className="mb-8">
              <img
                src={post.rttpg_featured_image_url.full[0]}
                alt={post.title.rendered}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}

          <div
            className="blog-content text-text"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>
      </div>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const response = await fetch(
      "https://blog.ahln.ae/index.php/wp-json/wp/v2/posts?per_page=100",
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return [];
    }

    const posts = await response.json();
    return posts.map((post: Post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
