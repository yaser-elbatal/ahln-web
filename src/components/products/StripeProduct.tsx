/* eslint-disable react/no-unescaped-entities */

import { getStripe } from "@/utils/stripe";
import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  description: string | null;
  priceId: string;
  unit_amount: number;
  currency: string;
};

export default function StripeProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<{
    [priceId: string]: boolean;
  }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/stripe/products`
      );
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const toggleProduct = (priceId: string) => {
    setSelectedPrices((prev) => ({
      ...prev,
      [priceId]: !prev[priceId],
    }));
  };

  const handleCheckout = async () => {
    const selectedItems = Object.entries(selectedPrices)
      .filter(([, checked]) => checked)
      .map(([price]) => ({
        price,
        quantity: 1,
      }));

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/checkout/create-session`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: selectedItems }),
      }
    );

    const { sessionId } = await res.json();
    const stripe = await getStripe();
    await stripe?.redirectToCheckout({ sessionId });
  };

  return (
    <div>
      <h1>Products & Accessories</h1>
      <ul>
        {products.map((p) => (
          <li key={p.priceId}>
            <label>
              <input
                type="checkbox"
                checked={selectedPrices[p.priceId] || false}
                onChange={() => toggleProduct(p.priceId)}
              />
              {p.name} — {(p.unit_amount / 100).toFixed(2)}{" "}
              {p.currency.toUpperCase()}
            </label>
            {p.description && <p>{p.description}</p>}
          </li>
        ))}
      </ul>
      <button
        onClick={handleCheckout}
        disabled={!Object.values(selectedPrices).some(Boolean)}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
