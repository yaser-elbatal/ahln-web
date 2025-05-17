/* eslint-disable react/no-unescaped-entities */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import BoxViewer from "../3d/BoxViewer";
import UnderlineText from "../common/UnderlineText";
import FAQSection from "../faq/FAQSection";
import CheckoutButton from "../stripe/CheckoutButton";
import ColorCard from "./ColorCard";
import FeatureItem from "./FeatureItem";
import MobileSlider from "./MobileSlider";
import { products } from "./ProductsData";
import { Product } from "./ProductsPage";
import { redirect } from "next/navigation";

interface ProductDetailProps {
  slug: string;
  product?: Product;
}

export default function ProductDetail({ slug }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [productInfo, setProductInfo] = useState<Product | null>(null);

  useEffect(() => {
    getProduct();
  }, [slug]);

  const getProduct = () => {
    setIsLoading(true);
    const findProduct = products.find(
      (product) => product.id == parseInt(slug)
    );
    setProductInfo(findProduct || null);
    setIsLoading(false);
    if (!findProduct) {
      redirect("/products");
    }
  };

  const [openSection, setOpenSection] = useState<string | null>("accessories");
  const carouselImages = productInfo ? productInfo.carouselImages : [];

  interface Accessory {
    id: string;
    label: string;
    value: string;
    price: number;
    priceId: string;
    description: string;
  }

  const [selectedAccessories, setSelectedAccessories] = useState<Accessory[]>(
    []
  );

  const handleAccessoryToggle = (accessory: Accessory) => {
    setSelectedAccessories((prev) =>
      prev.some((item) => item.id === accessory.id)
        ? prev.filter((item) => item.id !== accessory.id)
        : [...prev, accessory]
    );
  };

  const handleImageHover = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    setPosition({ x, y });
    setScale(2);
  };

  const handleZoomExit = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const colorBanners = productInfo ? productInfo.colorBanners : {};

  const [isHoveringThumbnail, setIsHoveringThumbnail] = useState(false);

  return (
    <div className={`min-h-screen`}>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <div className="w-full h-[80vh] md:h-[90vh] overflow-hidden relative mb-16">
            <Image
              src={productInfo?.bannerImage || "/images/ahln-max.jpg"}
              alt="Ahln. Max"
              fill
              className="hidden md:block object-cover "
            />
            <Image
              src={productInfo?.bannerImageMobile || "/images/ahln-max.jpg"}
              alt="Ahln. Max Mobile"
              fill
              className="md:hidden block object-cover "
            />
          </div>
          {/* Product Details Section */}
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-start">
              {/* Left Column - Product Images */}
              <div className="min-h-[50vh] md:h-[90vh]">
                <div
                  className={`bg-white/5 backdrop-blur-lg rounded-3xl p-4 md:p-6 shadow-xl border border-white/10 h-full`}
                >
                  <div
                    className="relative aspect-square overflow-hidden rounded-2xl cursor-zoom-in"
                    onMouseMove={handleZoom}
                    onMouseLeave={() => {
                      handleZoomExit();
                      setIsHoveringThumbnail(false);
                    }}
                  >
                    <Image
                      src={
                        isHoveringThumbnail
                          ? carouselImages[currentImageIndex]
                          : selectedColor && colorBanners[selectedColor]
                          ? colorBanners[selectedColor]
                          : carouselImages[currentImageIndex]
                      }
                      alt={`Ahln. Max View ${currentImageIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-200"
                      style={{
                        transform: `scale(${scale})`,
                        transformOrigin: `${position.x}% ${position.y}%`,
                      }}
                    />
                  </div>
                  <p className="hidden md:block text-center font-light mt-2">
                    Roll over image to zoom
                  </p>
                  {/* Thumbnail Navigation */}
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      overflowX: "scroll",
                    }}
                  >
                    <div className="flex flex-nowrap gap-2 md:gap-4 mt-4 md:mt-10 justify-center">
                      {carouselImages.map((img, index) => (
                        <button
                          key={index}
                          onMouseEnter={() => {
                            handleImageHover(index);
                            setIsHoveringThumbnail(true);
                          }}
                          onMouseLeave={() => setIsHoveringThumbnail(false)}
                          onClick={() => handleImageHover(index)}
                          className={`relative w-16 md:w-20 h-16 md:h-20 rounded-xl overflow-hidden border-3 transition-all ${
                            currentImageIndex === index
                              ? "border-sky-700"
                              : "border-transparent"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Product Information */}
              <div className="min-h-[50vh] md:h-[90vh] sm:h-full">
                <div
                  className={`h-full flex flex-col bg-white/5 backdrop-blur-lg rounded-3xl p-4 md:p-6 shadow-xl border border-white/10 md:overflow-y-auto`}
                >
                  {/* Product Price Section */}
                  <div className="mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {productInfo?.name}
                    </h1>
                    <div className="flex items-center gap-2 mb-6">
                      <Image
                        src="/DirhamSymbol.svg"
                        alt="Dirham"
                        width={24}
                        height={24}
                        className="inline-block"
                      />
                      <span className="text-3xl font-bold text-white">
                        {productInfo?.price}
                      </span>
                    </div>
                    <p className="text-gray-300">{productInfo?.description}</p>
                  </div>

                  {/* Accordion Sections */}
                  <div className="flex flex-col h-full space-y-4">
                    {/* Specifications Accordion */}
                    <div className="border border-white/10 rounded-lg overflow-hidden">
                      <button
                        onClick={() =>
                          setOpenSection(
                            openSection === "specifications"
                              ? null
                              : "specifications"
                          )
                        }
                        className="w-full flex justify-between items-center p-4 text-white hover:bg-white/5 transition-colors"
                      >
                        <h2 className="text-xl md:text-xl font-semibold">
                          Product Specifications
                        </h2>
                        <svg
                          className={`w-6 h-6 transform transition-transform ${
                            openSection === "specifications" ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {openSection === "specifications" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-4 border-t border-white/10">
                              <div className="grid gap-3 md:gap-4">
                                {productInfo &&
                                  productInfo.specifications.map(
                                    (spec, index) => (
                                      <div
                                        key={index}
                                        className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
                                      >
                                        <span className="text-gray-300 mr-5 md:mr-3 ">
                                          {spec.label}
                                        </span>
                                        <span className="text-white font-medium text-right">
                                          {spec.value}
                                        </span>
                                      </div>
                                    )
                                  )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Accessories Accordion */}
                    {productInfo && productInfo.accessories.length > 0 && (
                      <div className="border border-white/10 rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            setOpenSection(
                              openSection === "accessories"
                                ? null
                                : "accessories"
                            )
                          }
                          className="w-full flex justify-between items-center p-4 text-white hover:bg-white/5 transition-colors"
                        >
                          <h2 className="text-xl md:text-xl font-semibold">
                            Accessories
                          </h2>
                          <svg
                            className={`w-6 h-6 transform transition-transform ${
                              openSection === "accessories" ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {openSection === "accessories" && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="p-4 border-t border-white/10 md:flex gap-4 sm:gap-4">
                                <div className="grid grid-cols-1 gap-4">
                                  {productInfo &&
                                    productInfo.accessories.map((accessory) => (
                                      <div
                                        key={accessory.id}
                                        className={`relative flex bg-[#151B2B] border rounded-2xl p-6 md:p-8 min-h-[140px] transition-all duration-300 cursor-pointer overflow-hidden ${
                                          selectedAccessories.some(
                                            (item) => item.id === accessory.id
                                          )
                                            ? "border-blue-500 bg-blue-500/10"
                                            : "border-white/10 hover:border-white/30"
                                        }`}
                                        onClick={() =>
                                          handleAccessoryToggle(accessory)
                                        }
                                        style={{ minHeight: 140 }}
                                      >
                                        <div className="flex w-full flex-row gap-4">
                                          {/* First Column: Name, Description, Price */}
                                          <div className="flex-1 flex flex-col justify-center">
                                            <h3 className="text-2xl font-semibold text-white mb-1">
                                              {accessory.label}
                                            </h3>
                                            <p className="text-gray-400 text-base mb-4">
                                              {accessory.description}
                                            </p>
                                            <div className="flex items-center gap-4 mt-auto">
                                              <div className="flex items-center gap-1">
                                                <Image
                                                  src="/DirhamSymbol.svg"
                                                  alt="Dirham"
                                                  width={16}
                                                  height={16}
                                                  className="inline-block"
                                                />
                                                <span className="text-white font-semibold text-lg">
                                                  {accessory.price}
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          {/* Second Column: Checkbox at top, Image at bottom */}
                                          <div className="flex flex-col justify-between items-end min-w-[60px] max-w-[120px] h-full">
                                            <div
                                              className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors mt-1 ml-2 ${
                                                selectedAccessories.some(
                                                  (item) =>
                                                    item.id === accessory.id
                                                )
                                                  ? "border-blue-500 bg-blue-500"
                                                  : "border-white/30"
                                              }`}
                                            >
                                              {selectedAccessories.some(
                                                (item) =>
                                                  item.id === accessory.id
                                              ) && (
                                                <svg
                                                  className="w-4 h-4 text-white"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="currentColor"
                                                >
                                                  <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                  />
                                                </svg>
                                              )}
                                            </div>
                                            <div className="w-24 h-24 md:w-28 md:h-28 rounded-br-2xl rounded-tl-[60px] overflow-hidden flex items-end justify-end mt-auto absolute bottom-0 right-0 transition-transform duration-900 hover:scale-150 z-10">
                                              <Image
                                                src={accessory.image}
                                                alt="Accessory"
                                                width={120}
                                                height={120}
                                                className="object-contain"
                                              />
                                            </div>
                                            ;
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>

                  {/* Color Selection */}
                  <div className="border border-white/10 rounded-lg mt-4">
                    <div className="w-full flex justify-between items-center p-4 text-white">
                      <h2 className="text-xl md:text-xl font-semibold">
                        Select Color
                      </h2>
                    </div>
                    <div className="p-4 border-t border-white/10 flex md:flex-row flex-col gap-4 overflow-x-auto">
                      {productInfo &&
                        productInfo.colorImages.map((color) => (
                          <ColorCard
                            text={color.name}
                            image={color.image}
                            onclick={() => setSelectedColor(color.key)}
                            selected={color.key === selectedColor}
                            color={color.color}
                            key={color.key}
                          />
                        ))}
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <CheckoutButton
                    selectedItems={[
                      {
                        price: productInfo?.stripePriceId || "",
                        quantity: 1,
                        amount: productInfo?.price || 0,
                      },
                      ...selectedAccessories.map((accessory) => ({
                        price: accessory.priceId,
                        quantity: 1,
                        amount: accessory.price,
                      })),
                    ]}
                    metadata={{
                      color: selectedColor,
                    }}
                    disabled={!selectedColor}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* User Friendly Mobile App Section */}
          <section className={`py-20 text-white`}>
            <div className="container mx-auto px-4">
              <h2 className="text-xl md:text-3xl font-bold text-center ">
                <UnderlineText> User Friendly Mobile App </UnderlineText>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Left Features */}
                <div className="flex flex-col gap-8">
                  <FeatureItem
                    icon="/icons/notification.svg"
                    title="Notifications"
                    desc="Real-time notifications about deliveries, device status, and security incidents"
                  />
                  <FeatureItem
                    icon="/icons/familySharing.svg"
                    title="Family Sharing"
                    desc="Share device access with family members for added convenience."
                  />
                  <FeatureItem
                    icon="/icons/ownershipTransfer.svg"
                    title="Ownership Transfer"
                    desc="Seamlessly transfer ownership between users"
                  />
                </div>
                {/* Center Slider */}
                <div className="flex flex-col items-center">
                  <MobileSlider
                    images={[
                      "/images/mobileScreen1.png",
                      "/images/mobileScreen2.png",
                      "/images/mobileScreen3.png",
                      "/images/mobileScreen4.png",
                    ]}
                  />
                </div>
                {/* Right Features */}
                <div className="flex flex-col gap-8">
                  <FeatureItem
                    icon="/icons/boxControl.svg"
                    title="Box Control"
                    desc="Easily control the box from the mobile application"
                  />
                  <FeatureItem
                    icon="/icons/LivePreview.svg"
                    title="Live Preview"
                    desc="Stream real-time video from the box’s camera directly in the mobile app."
                  />
                  <FeatureItem
                    icon="/icons/offlineOtp.svg"
                    title="Offline OTP"
                    desc="Generate a one-time passcode to access the box even when it’s offline due to connectivity issues."
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 360 degree view */}
          <section className="py-20 container mx-auto px-4">
            <h2 className="text-xl md:text-3xl font-bold mb-12 text-center">
              <UnderlineText>360° Interactive View</UnderlineText>
            </h2>
            <div
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-4 md:p-8 shadow-xl border border-white/10 max-w-4xl mx-auto"
              style={{ height: "500px" }}
            >
              <BoxViewer
                BoxType={(productInfo && productInfo?.model) || "max"}
              />
            </div>
            <p className="text-center text-gray-300 mt-4">
              Drag to rotate | Scroll to zoom
            </p>
          </section>

          {/* FAQ Section */}
          <FAQSection />
        </>
      )}
    </div>
  );
}
