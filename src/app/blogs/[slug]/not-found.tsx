import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogNotFound() {
  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6 text-text">Blog Post Not Found</h1>
      <p className="text-xl mb-8 text-text">
        Sorry, the blog post you are looking for does not exist or may have been
        removed.
      </p>
      <Link href="/blogs" passHref>
        <Button size="lg" className="text-text">
          Return to Blog
        </Button>
      </Link>
    </div>
  );
}
