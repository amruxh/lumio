import { calculatePercentage } from "@/functions/utils";

interface PriceSectionProps extends React.HTMLAttributes<HTMLSpanElement> {
    discountPercentage: number | undefined;
    price: number | undefined;
    mainText: string;
    secText: string;
}

const PriceSection = ({ discountPercentage, price, mainText, secText, ...rest }: PriceSectionProps) => {
  const prizeRupees = Math.round((price ?? 0) * 80);
  const originalPrize =
    (prizeRupees + calculatePercentage(prizeRupees, Math.round(discountPercentage ?? 0))).toFixed(2);
  return (
    <div {...rest}>
      <span className={mainText}>₹{prizeRupees}</span>
      <span className={`${secText} line-through product-price text-[var(--foreground-muted)]`}>
        ₹{originalPrize}
      </span>
      <span className={`${secText} text-emerald-500`}>
        ({discountPercentage}% off)
      </span>
    </div>
  );
};

export default PriceSection;
