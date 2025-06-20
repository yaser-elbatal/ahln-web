// components/CheckoutButton.tsx
import { useLanguage } from "@/context/LanguageContext";
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
  stock?: number;
};

const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  selectedItems,
  disabled,
  metadata,
  stock = 0,
}) => {
  const [loading, setLoading] = useState(false);

  const paymentMethod = metadata?.paymentMethod as string;

  const handleCheckout = async () => {
    setLoading(true);

    const stripeItems = selectedItems.map(({ price, quantity }) => ({
      price,
      quantity,
    }));

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/stripe/create-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "any-value",
        },
        body: JSON.stringify({ items: stripeItems, metadata }),
      }
    );

    const { sessionId } = (await res.json()) as { sessionId: string };

    const stripe = await getStripe();
    await stripe?.redirectToCheckout({ sessionId });
  };
  const { t, lang } = useLanguage();
  const disableButton = loading || selectedItems.length === 0 || disabled;

  const totalAmount = selectedItems.reduce(
    (total, item) => total + (item.amount || 0) * item.quantity,
    0
  );

  const getLabelByPayment = () => {
    switch (paymentMethod) {
      case "tamara":
        return `${t("payWithTabby")}
       `;
      case "deposit":
        return `${t("depositPayment")} (${t("AED")} ${1000})`;
      case "card":
      default:
        return `${t("PlaceOrder")} (${t(
          "AED"
        )} ${totalAmount.toLocaleString()})`;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleCheckout}
        className="mt-2 mb-1 w-full text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
        style={{
          backgroundColor: disableButton ? COLORS.DISABLED : COLORS.PRIMARY,
          cursor: disableButton ? "not-allowed" : "pointer",
        }}
        disabled={disableButton}
      >
        <span>{loading ? t("Redirecting") : getLabelByPayment()}</span>
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
      {paymentMethod == "deposit" && (
        <div className=" top-full text-text">{t("payWithDeposit")}</div>
      )}
      {/* Show error if no color is selected */}

      {disableButton && (
        <div className="absolute top-full text-sm text-red-500 mb-1.5">
          {stock <= 0 ? t("outOfStock") : t("PleaseSelectColor")}
        </div>
      )}
    </div>
  );
};

export default CheckoutButton;
