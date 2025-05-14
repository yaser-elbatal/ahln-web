import { Product } from "./ProductsPage";

export const products: Product[] = [
  {
    id: 1,
    name: "AHLN Max",
    image: "/images/max.png",
    bannerImage: "/images/ahln-max.jpg",
    description:
      "Our flagship smart delivery box, perfect for businesses and multi-unit buildings. Features advanced security systems and larger storage capacity.",
    tags: ["Large Capacity", "Advanced Security", "Multi-unit"],
    specifications: [
      { label: "Material", value: "Stainless steel" },
      { label: "Weight", value: "163 Kg" },
      { label: "Operating voltage", value: "220 Volts (AC)" },
      { label: "Power Consumption", value: "75 Watts" },
      {
        label: "Installation type",
        value: "Wall Mount, Floor Standing and Wall Insert",
      },
      { label: "Operating System", value: "Android" },
      { label: "Touchscreen Size", value: "7.2 Inch" },
      { label: "Capacity", value: "173,246,440 litres" },
      { label: "Dimensions", value: "100 x 65 x 190 cm" },
      { label: "Network", value: "Communication Ethernet & WiFi" },
    ],
    accessories: [
      {
        id: "camera",
        label: "Camera",
        value: "HD surveillance with night vision",
        price: 500,
        priceId: "price_1RMmCPDHoZtoEuq1jjxFX4DL",
        description:
          "Advanced security camera with night vision and motion detection for package monitoring.",
        image: "/images/cameraAccessory.jpg",
      },
      {
        id: "refrigerator",
        label: "Refrigeration Unit",
        value: "Temperature-controlled storage",
        price: 1000,
        priceId: "price_1RMmCfDHoZtoEuq1XE4MAqIM",
        description:
          "Built-in refrigeration system to keep temperature-sensitive items fresh and cold.",
        image: "/images/refrigerator.jpg",
      },
      {
        id: "weight-sensor",
        label: "Weight Sensor",
        value: "Package detection system",
        price: 200,
        priceId: "price_1RMmD0DHoZtoEuq1gboGIJFK",
        description:
          "Precise weight sensing technology to detect and confirm package deliveries.",
        image: "/images/weightsensor.jpg",
      },
    ],
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
    name: "AHLN Mini",
    image: "/images/mini.png",
    bannerImage: "/images/ahln-mini.jpg",
    description:
      "Compact and efficient, designed for residential use. Perfect for homes and small businesses requiring secure package delivery.",
    tags: ["Compact", "Residential", "Easy Setup"],
    specifications: [
      { label: "Material", value: "Stainless steel" },
      { label: "Weight", value: "163 Kg" },
      { label: "Operating voltage", value: "220 Volts (AC)" },
      { label: "Power Consumption", value: "75 Watts" },
      {
        label: "Installation type",
        value: "Wall Mount, Floor Standing and Wall Insert",
      },
      { label: "Operating System", value: "Android" },
      { label: "Touchscreen Size", value: "7.2 Inch" },
      { label: "Capacity", value: "173,246,440 litres" },
      { label: "Dimensions", value: "100 x 65 x 190 cm" },
      { label: "Network", value: "Communication Ethernet & WiFi" },
    ],
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
