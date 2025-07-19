import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function BlogsLoading() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="h-10 w-48 bg-gray-200 rounded-md mx-auto mb-8 animate-pulse"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
            <CardHeader>
              <div className="h-8 bg-gray-200 rounded-md w-3/4 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-md w-1/3 animate-pulse"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded-md w-2/3 animate-pulse"></div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="h-10 bg-gray-200 rounded-md w-28 animate-pulse"></div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
