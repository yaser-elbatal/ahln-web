/* eslint-disable react/no-unescaped-entities */

"use client";

import { useLanguage } from "@/context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import BoxViewer from "../3d/BoxViewer";
import UnderlineText from "../common/UnderlineText";
import FAQSection from "../faq/FAQSection";
import { COLORS } from "../layout/colors";
import CheckoutButton from "../stripe/CheckoutButton";
import ColorCard from "./ColorCard";
import FeatureItem from "./FeatureItem";
import MobileSlider from "./MobileSlider";
import PaymentSelector from "./PaymentSelector";
import { getProducts } from "./ProductsData";
import { Product } from "./ProductsPage";

const PAGE_COLORS = {
  borderLight: "border-gray-200",
};

interface ProductDetailProps {
  slug: string;
  product?: Product;
}

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

export default function ProductDetail({ slug }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();
  const products = getProducts(t);

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
  const [paymentMethod, setPaymentMethod] = useState("deposit"); // default

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
            <div className="relative w-full h-full">
              <Image
                src={productInfo?.bannerImage || "/images/ahln-max.jpg"}
                alt="Ahln. Max"
                fill
                className="hidden md:block object-cover"
              />
              <img
                src="/max-text.svg"
                alt="Max Text"
                className="absolute bottom-12 left-12 w-120 z-10 hidden md:block"
              />
            </div>

            <div>
              <Image
                src={productInfo?.bannerImageMobile || "/images/ahln-max.jpg"}
                alt="Ahln. Max Mobile"
                fill
                className="md:hidden block object-cover "
              />
            </div>
          </div>
          {/* Product Details Section */}
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-start">
              {/* Left Column - Product Images */}
              <div className="min-h-[50vh] md:h-[90vh]">
                <div
                  className={`bg-white/5 backdrop-blur-lg rounded-3xl p-4 md:p-6 shadow-xl/6 h-full`}
                >
                  <div className="flex flex-col h-full">
                    <div
                      className="relative aspect-square overflow-hidden rounded-2xl cursor-zoom-in flex-grow"
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
                    <p className="hidden md:block text-center text-text mt-2">
                      {t("rollOverImage")}
                    </p>
                    {/* Thumbnail Navigation */}
                    <div className="mt-4 overflow-x-auto overflow-y-hidden">
                      <div className="flex flex-nowrap gap-2 md:gap-4 justify-center min-w-min py-2">
                        {carouselImages.map((img, index) => (
                          <button
                            key={index}
                            onMouseEnter={() => {
                              handleImageHover(index);
                              setIsHoveringThumbnail(true);
                            }}
                            onMouseLeave={() => setIsHoveringThumbnail(false)}
                            onClick={() => handleImageHover(index)}
                            className={`relative w-12 md:w-16 h-12 md:h-16 rounded-xl overflow-hidden border-2 transition-all ${
                              currentImageIndex === index
                                ? "border-primary"
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
              </div>

              {/* Right Column - Product Information */}
              <div className="min-h-[50vh] md:h-[90vh] sm:h-full">
                <div
                  className={`h-full flex flex-col justify-between bg-white/5 backdrop-blur-lg rounded-3xl p-4 md:p-6 shadow-xl/6  md:overflow-y-auto`}
                >
                  <div>
                    {/* Product Price Section */}
                    <div className="mb-6">
                      <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
                        {t(`${productInfo?.name}`)}
                      </h1>
                      <div className="flex items-center gap-2 mb-6">
                        <Image
                          src="/DirhamSymbol.svg"
                          alt="Dirham"
                          width={24}
                          height={24}
                          className="inline-block"
                        />
                        <span className="text-3xl font-bold text-text">
                          {t(`${productInfo?.price}`)}
                        </span>
                      </div>
                      <p className="text-text">
                        {t(`${productInfo?.description}`)}
                      </p>
                    </div>

                    <h2 className="text-xl md:text-xl font-semibold">
                      {t("comesWith")}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {productInfo?.comes?.map((tag, index) => (
                        <span
                          key={index}
                          className={`mt-2 px-3 py-1 rounded-full text-sm ${COLOR.tag} `}
                          style={{
                            color: COLORS.PRIMARY,
                          }}
                        >
                          {t(tag)}
                        </span>
                      ))}
                    </div>

                    {/* Color Selection */}
                    <div className="rounded-lg mb-4 ">
                      <div
                        className={`w-full flex justify-between items-center p-4 text-text border-b ${PAGE_COLORS.borderLight} `}
                      >
                        <h2 className="mt-4 text-xl md:text-xl font-semibold">
                          {t("selectColor")}
                        </h2>
                      </div>
                      <div className="p-4 flex md:flex-row flex-col gap-4 overflow-x-auto">
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

                    {/* Accordion Sections */}
                    <div className="flex flex-col space-y-4 mb-3">
                      {/* Specifications Accordion */}
                      <div className="border border-primary/20 shadow-md/4 rounded-lg ">
                        <button
                          onClick={() =>
                            setOpenSection(
                              openSection === "specifications"
                                ? null
                                : "specifications"
                            )
                          }
                          className="w-full flex justify-between items-center p-4 text-text hover:bg-white/5 transition-colors"
                        >
                          <h2 className="text-xl md:text-xl font-semibold">
                            {t("productSpecifications")}
                          </h2>
                          <svg
                            className={`w-6 h-6 transform transition-transform ${
                              openSection === "specifications"
                                ? "rotate-180"
                                : ""
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
                              <div
                                className={`p-4 border-t ${PAGE_COLORS.borderLight} `}
                              >
                                <div className="grid gap-3 md:gap-4">
                                  {productInfo &&
                                    productInfo.specifications.map(
                                      (spec, index) => (
                                        <div
                                          key={index}
                                          className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                                        >
                                          <span className="text-text mr-5 md:mr-3 ">
                                            {t(spec.label)}
                                          </span>
                                          <span className="text-text font-bold ltr:text-right rtl:text-left">
                                            {t(spec.value)}
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
                        <div className="border border-primary/20 shadow-md/4  rounded-lg overflow-hidden">
                          <button
                            onClick={() =>
                              setOpenSection(
                                openSection === "accessories"
                                  ? null
                                  : "accessories"
                              )
                            }
                            className="w-full flex justify-between items-center p-4 text-text hover:bg-white/5 transition-colors"
                          >
                            <h2 className="text-xl md:text-xl font-semibold">
                              {t("accessories")}
                            </h2>
                            <svg
                              className={`w-6 h-6 transform transition-transform ${
                                openSection === "accessories"
                                  ? "rotate-180"
                                  : ""
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
                                <div
                                  className={`p-4 border-t ${PAGE_COLORS.borderLight} md:flex gap-4 sm:gap-4`}
                                >
                                  <div className="grid grid-cols-1 gap-4">
                                    {productInfo &&
                                      productInfo.accessories.map(
                                        (accessory) => (
                                          <div
                                            key={accessory.id}
                                            className={`transition-transform duration-500 hover:scale-103 z-10 flex border rounded-2xl p-6 md:p-8 min-h-[140px] transition-all duration-300 cursor-pointer overflow-hidden ${
                                              selectedAccessories.some(
                                                (item) =>
                                                  item.id === accessory.id
                                              )
                                                ? "border-primary bg-[#eff7fb]"
                                                : "shadow-sm "
                                            }`}
                                            onClick={() =>
                                              handleAccessoryToggle(accessory)
                                            }
                                            style={{ minHeight: 140 }}
                                          >
                                            <div className="flex w-full flex-row gap-4">
                                              {/* First Column: Name, Description, Price */}
                                              <div className="flex-1 flex flex-col justify-center">
                                                <h3 className="text-2xl font-semibold text-text mb-1">
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
                                                    <span className="text-text font-semibold text-lg">
                                                      {accessory.price}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              {/* Second Column: Checkbox at top, Image at bottom */}
                                              <div className="flex flex-col justify-between items-end min-w-[60px] max-w-[120px] h-full">
                                                <div
                                                  className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors mt-1 ltr:ml-2 rtl:mr-2 border-primary`}
                                                >
                                                  {selectedAccessories.some(
                                                    (item) =>
                                                      item.id === accessory.id
                                                  ) && (
                                                    <svg
                                                      className="w-4 h-4 text-primary"
                                                      fill="none"
                                                      viewBox="0 0 24 24"
                                                      stroke="currentColor"
                                                    >
                                                      <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M5 13l4 4L19 7"
                                                      />
                                                    </svg>
                                                  )}
                                                </div>
                                                <div
                                                  className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors  `}
                                                >
                                                  <Image
                                                    src={accessory.image}
                                                    alt="Accessory"
                                                    width={120}
                                                    height={120}
                                                    className="object-contain absolute rounded-br-2xl p-[7px] rounded-tl-[60px]"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                      )}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  </div>
                  <PaymentSelector
                    selected={paymentMethod}
                    onChange={setPaymentMethod}
                  />

                  {/* Place Order Button */}
                  <div className="mt-6">
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
                        paymentMethod, // This is the dynamic value
                      }}
                      disabled={!selectedColor}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Friendly Mobile App Section */}
          <section className={`py-20 text-text`}>
            <div className="container mx-auto px-4">
              <h2 className="text-xl md:text-3xl font-bold text-center text-text ">
                <UnderlineText>
                  {t("userFriendlyPrefix")}{" "}
                  <span className="text-primary">
                    {t("userFriendlyHighlight")}
                  </span>{" "}
                </UnderlineText>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Left Features */}
                <div className="flex flex-col gap-8">
                  <FeatureItem
                    icon="/icons/notification.svg"
                    title={t("notificationsTitle")}
                    desc={t("notificationsDesc")}
                  />
                  <FeatureItem
                    icon="/icons/familySharing.svg"
                    title={t("familySharingTitle")}
                    desc={t("familySharingDesc")}
                  />
                  <FeatureItem
                    icon="/icons/ownershipTransfer.svg"
                    title={t("ownershipTransferTitle")}
                    desc={t("ownershipTransferDesc")}
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
                      "/images/mobileScreen5.png",
                    ]}
                  />
                </div>
                {/* Right Features */}
                <div className="flex flex-col gap-8">
                  <FeatureItem
                    icon="/icons/boxControl.svg"
                    title={t("boxControlTitle")}
                    desc={t("boxControlDesc")}
                  />
                  <FeatureItem
                    icon="/icons/LivePreview.svg"
                    title={t("livePreviewTitle")}
                    desc={t("livePreviewDesc")}
                  />
                  <FeatureItem
                    icon="/icons/offlineOtp.svg"
                    title={t("offlineOtpTitle")}
                    desc={t("offlineOtpDesc")}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 360 degree view */}
          <section className="py-20 container mx-auto px-4">
            <h2 className="text-xl md:text-3xl font-bold mb-12 text-center text-text">
              <UnderlineText>
                {t("interactiveViewPrefix")}
                <span className="text-primary">
                  {t("interactiveViewHighlight")}
                </span>
              </UnderlineText>
            </h2>
            <div
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-4 md:p-8 shadow-xl border border-primary max-w-4xl mx-auto"
              style={{ height: "500px" }}
            >
              <BoxViewer
                BoxType={(productInfo && productInfo?.model) || "max"}
              />
            </div>
            <p className="text-center text-text mt-4">{t("dragRotate")}</p>
          </section>

          {/* FAQ Section */}
          <FAQSection />
        </>
      )}
    </div>
  );
}
