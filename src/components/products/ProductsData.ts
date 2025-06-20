import { Product } from "./ProductsPage";

type BaseProduct = Omit<
  Product,
  "name" | "description" | "tags" | "comes" | "specifications"
> & {
  nameKey: string;
  descriptionKey: string;
  tagKeys: string[];
  comesKeys?: string[];
  specifications: { labelKey: string; value: string }[];
  payments: string[];
  depositPriceId: string;
  stock: number;
};

const baseProducts: BaseProduct[] = [
  {
    id: 1,
    nameKey: "productMaxName",
    model: "max",
    status: true,
    stock: 10,
    price: 8900,
    image: "/images/max.png",
    bannerImage: "/images/ahln-max.jpg",
    bannerImageMobile: "/images/max-mobilebanner.png",
    stripePriceId:
      process.env.NODE_ENV === "development"
        ? "price_1RMk8UDHoZtoEuq1FtGXdTmr"
        : "price_1RQTgw04jNAuzfPHErEV1A9S",
    depositPriceId: "price_1RZrht04jNAuzfPH1voWpMH7",
    descriptionKey: "productMaxDescription",
    comesKeys: [
      "tagFreeDeliveryInstallation",
      "tagTwoYearWarranty",
      "tagOneYearService",
    ],
    tagKeys: [
      "tagFreeDeliveryInstallation",
      "tagTwoYearWarranty",
      "tagOneYearService",
      "tagLargeCapacity",
      "tagAdvancedSecurity",
      "tagMultiUnit",
    ],

    specifications: [
      {
        labelKey: "specMaterial",
        value: "Galvanized Steel with Double Powder Coated Paint (IP65)",
      },
      { labelKey: "specWeight", value: "163 Kg" },
      { labelKey: "specOperatingVoltage", value: "220 Volts (AC)" },
      { labelKey: "specPowerConsumption", value: "75 Watts" },
      {
        labelKey: "specInstallationType",
        value: "Wall Mount, Floor Standing and Wall Insert",
      },
      { labelKey: "specOperatingSystem", value: "Android" },
      { labelKey: "specTouchscreenSize", value: "7.0 Inch" },
      { labelKey: "specCapacity", value: "173,246,440 litres" },
      { labelKey: "specDimensions", value: "100 x 65 x 190 cm" },
      { labelKey: "specNetwork", value: "Communication Ethernet & WiFi" },
    ],
    accessories: [],
    carouselImages: [
      "/images/image1.jpg",
      "/images/image2.jpg",
      "/images/image3.jpg",
      "/images/image4.jpg",
      "/images/image5.jpg",
      "/images/image6.png",
    ],
    colorBanners: {
      oysterwhite: "/images/oysterwhite.png",
      pebblegrey: "/images/pebblegrey.png",
      bluegrey: "/images/bluegrey.png",
    },
    payments: ["depositPayment", "cardPayment"],

    colorImages: [
      {
        name: "Blue Grey",
        key: "bluegrey",
        image: "/images/max-bluegrey.png",
        color: "bg-[#535B62]",
      },
      {
        name: "Pebble Grey",
        key: "pebblegrey",
        image: "/images/max-pebblegrey.png",
        color: "bg-[#9D998D]",
      },
      {
        name: "Oyster White",
        key: "oysterwhite",
        image: "/images/max-oysterwhite.png",
        color: "bg-[#D6D4C3]",
      },
    ],
  },
  {
    id: 2,
    nameKey: "productMiniName",
    model: "mini",
    status: false,
    stock: 0,
    price: 5900,
    image: "/images/mini.png",
    bannerImage: "/images/ahln-mini.jpg",
    bannerImageMobile: "/images/mini-mobilebanner.jpg",
    stripePriceId: "price_1RMk8UDHoZtoEuq1FtGXdTmr",
    depositPriceId: "price_1RZrht04jNAuzfPH1voWpMH7",
    descriptionKey: "productMiniDescription",
    tagKeys: [
      "tagCompact",
      "tagResidential",
      "tagEasySetup",
      "tagFreeDeliveryInstallation",
      "tagTwoYearWarranty",
      "tagOneYearService",
      "tagAdvancedSecurity",
      "tagMultiUnit",
    ],
    specifications: [
      { labelKey: "specMaterial", value: "Stainless steel" },
      { labelKey: "specWeight", value: "163 Kg" },
      { labelKey: "specOperatingVoltage", value: "220 Volts (AC)" },
      { labelKey: "specPowerConsumption", value: "75 Watts" },
      {
        labelKey: "specInstallationType",
        value: "Wall Mount, Floor Standing and Wall Insert",
      },
      { labelKey: "specOperatingSystem", value: "Android" },
      { labelKey: "specTouchscreenSize", value: "7.0 Inch" },
      { labelKey: "specCapacity", value: "173,246,440 litres" },
      { labelKey: "specDimensions", value: "100 x 65 x 190 cm" },
      { labelKey: "specNetwork", value: "Communication Ethernet & WiFi" },
    ],
    payments: ["depositPayment", "cardPayment"],

    accessories: [],
    carouselImages: [
      "/images/mini1.jpg",
      "/images/mini2.jpg",
      "/images/mini3.jpg",
    ],
    colorBanners: {
      oysterwhite: "/images/mini-oysterwhite.jpg",
      pebblegrey: "/images/mini-pebblegrey.jpg",
      bluegrey: "/images/mini-bluegrey.jpg",
    },
    colorImages: [
      {
        name: "Blue Grey",
        key: "bluegrey",
        image: "/images/mini-bluegrey.png",
        color: "bg-[#535B62]",
      },
      {
        name: "Pebble Grey",
        key: "pebblegrey",
        image: "/images/mini-pebblegrey.png",
        color: "bg-[#9D998D]",
      },
      {
        name: "Oyster White",
        key: "oysterwhite",
        image: "/images/mini-oysterwhite.png",
        color: "bg-[#D6D4C3]",
      },
    ],
  },
];

export function getProducts(): Product[] {
  return baseProducts.map((p) => ({
    ...p,
    name: p.nameKey,
    description: p.descriptionKey,
    tags: p.tagKeys,
    comes: p.comesKeys,
    specifications: p.specifications.map((s) => ({
      label: s.labelKey,
      value: s.value,
    })),
  }));
}

// {
//   id: "camera",
//   label: "Camera",
//   value: "HD surveillance with night vision",
//   price: 500,
//   priceId: "price_1RMmCPDHoZtoEuq1jjxFX4DL",
//   description:
//     "Advanced security camera with night vision and motion detection for package monitoring.",
//   image: "/images/cameraAccessory.jpg",
// },
// {
//   id: "refrigerator",
//   label: "Refrigeration Unit",
//   value: "Temperature-controlled storage",
//   price: 1000,
//   priceId: "price_1RMmCfDHoZtoEuq1XE4MAqIM",
//   description:
//     "Built-in refrigeration system to keep temperature-sensitive items fresh and cold.",
//   image: "/images/refrigerator.jpg",
// },
// {
//   id: "weight-sensor",
//   label: "Weight Sensor",
//   value: "Package detection system",
//   price: 200,
//   priceId: "price_1RMmD0DHoZtoEuq1gboGIJFK",
//   description:
//     "Precise weight sensing technology to detect and confirm package deliveries.",
//   image: "/images/weightsensor.jpg",
// },
