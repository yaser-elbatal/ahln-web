import Image from "next/image";
import Link from "next/link";
import UnderlineText from "../common/UnderlineText";
import { COLORS } from "../layout/colors";
import { products } from "./ProductsData";

const COLOR = {
  text: {
    primary: COLORS.PRIMARY,
    secondary: "text-gray-300",
    accent: "text-cyan-600",
  },
  border: "border-gray-700/50",
  tag: "bg-blue-900/30",
  background: "#070F22",
  hover: "hover:bg-[" + COLORS.PRIMARY + "]",
};

type Accessory = {
  id: string;
  label: string;
  value: string;
  price: number;
  priceId: string;
  description: string;
  image: string;
};

// Product type definition
export type Product = {
  id: number;
  name: string;
  model: "mini" | "max";
  image: string;
  description: string;
  tags: string[];
  specifications: { label: string; value: string }[];
  accessories: Accessory[];
  bannerImage: string;
  bannerImageMobile: string;
  carouselImages: string[];
  colorBanners: {
    [key: string]: string;
  };
  colorImages: {
    name: string;
    key: string;
    image: string;
    color: string;
  }[];
};

// Product Card Component
function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={{
        pathname: `/products/${product.id}`,
      }}
      className={`group backdrop-blur-sm rounded-2xl p-6 lg:p-8 transition-all duration-300 border ${COLOR.border} ${COLOR.hover} block  cursor-pointer`}
    >
      <div className="relative  mb-6 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* <h2 className={`text-2xl font-bold mb-3 ${COLORS.text.accent}`}>
        {product.name}
      </h2> */}
      <p className={`mb-6 text-lg ${COLOR.text.secondary}`}>
        {product.description}
      </p>
      <div className="flex flex-wrap gap-3">
        {product.tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm ${COLOR.tag} `}
            style={{
              color: COLORS.PRIMARY,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

// Main Products Page Component
export default function ProductsPage() {
  return (
    <section
      className={`py-24 lg:py-32 min-h-screen bg-[${COLOR.background}] ${COLOR.text.primary}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-100">
            <UnderlineText>Our Products </UnderlineText>
          </h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
