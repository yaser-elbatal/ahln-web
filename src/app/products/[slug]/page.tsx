import ProductDetail from "@/components/products/ProductDetail";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  return <ProductDetail slug={slug} />;
}
