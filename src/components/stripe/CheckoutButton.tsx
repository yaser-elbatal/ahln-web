// components/CheckoutButton.tsx
import { getStripe } from "@/utils/stripe";
import { useState } from "react";
import { COLORS } from "../layout/colors";

type CheckoutButtonProps = {
  selectedItems: {
    price: string;
    quantity: number;
    amount?: number;
  }[];
  disabled?: boolean;
  metadata?: {
    [key: string]: string | number | object | [] | null;
  };
};

const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  selectedItems,
  disabled,
  metadata,
}) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    const stripeItems = selectedItems.map(({ price, quantity }) => ({
      price,
      quantity,
    }));

    console.log("stripeItems", stripeItems);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/stripe/create-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: stripeItems, metadata }),
      }
    );

    const { sessionId } = (await res.json()) as { sessionId: string };

    const stripe = await getStripe();
    await stripe?.redirectToCheckout({ sessionId });
  };

  const disableButton = loading || selectedItems.length === 0 || disabled;

  return (
    <div className="relative">
      <button
        onClick={handleCheckout}
        className="mt-6 mb-2 w-full hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
        style={{
          backgroundColor: disableButton ? COLORS.DISABLED : COLORS.ACCENT,
          cursor: disableButton ? "not-allowed" : "pointer",
        }}
        disabled={disableButton}
      >
        <span>
          {loading
            ? "Redirecting..."
            : `Place Order (AED ${selectedItems
                .reduce(
                  (total, item) => total + (item.amount || 0) * item.quantity,
                  0
                )
                .toLocaleString()})`}
        </span>
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
      {disableButton && (
        <div className="absolute top-full text-sm text-red-500">
          Please select color
        </div>
      )}
    </div>
  );
};

export default CheckoutButton;
