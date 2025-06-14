"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import UnderlineText from "../common/UnderlineText";
import { COLORS } from "../layout/colors";
import { getProducts } from "./ProductsData";

const COLOR = {
  text: {
    primary: COLORS.PRIMARY,
    secondary: "text-gray-400",
    accent: "text-cyan-600",
  },
  border: "border-gray-700/50",
  tag: "bg-blue-300/20",
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
  price: number;
  stripePriceId: string;
  status: boolean;
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
  comes?: string[];
  payments: string[];
};

// Product Card Component
function ProductCard({ product }: { product: Product }) {
  const { t } = useLanguage();
  const cardContent = (
    <div
      className={`group backdrop-blur-sm rounded-2xl p-6 lg:p-8 transition-all shadow-2xl/15 duration-300 ${
        COLOR.border
      } ${product.status ? COLOR.hover : ""} block ${
        product.status ? "cursor-pointer" : "cursor-not-allowed"
      }`}
    >
      <div className="relative mb-6 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className={`object-contain w-full h-full transform ${
            product.status ? "group-hover:scale-105" : ""
          } transition-transform duration-300 ${
            !product.status ? "opacity-50" : ""
          }`}
        />
        {!product.status && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white bg-black/50 px-4 py-2 rounded-lg">
              {t("comingSoon")}
            </span>
          </div>
        )}

        {/* Payment Tags */}
        {/* Payment Tags inside image with responsive spacing */}
        <div className="absolute top-2 left-2 right-2 flex flex-wrap gap-2 z-10">
          {product.payments.map((tag, index) => {
            const tagColor =
              tag === "depositPayment"
                ? "bg-yellow-100 text-yellow-800"
                : tag === "tamaraPayment"
                ? "bg-purple-100 text-purple-800"
                : tag === "cardPayment"
                ? "bg-green-100 text-green-800"
                : `${COLOR.tag}`;

            return (
              <span
                key={index}
                className={`px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium ${tagColor}`}
              >
                {t(tag)}
              </span>
            );
          })}
        </div>

        <p className={`mb-6 text-lg ${COLOR.text.secondary}`}>
          {t(product.description)}
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
              {t(tag)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return product.status ? (
    <Link href={{ pathname: `/products/${product.id}` }}>{cardContent}</Link>
  ) : (
    cardContent
  );
}

// Main Products Page Component
export default function ProductsPage() {
  const { t } = useLanguage();
  const products = getProducts();
  return (
    <section
      className={`py-24 lg:py-32 min-h-screen bg-[${COLOR.background}] ${COLOR.text.primary}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-100 text-text">
            <UnderlineText>{t("ourProducts")}</UnderlineText>
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
