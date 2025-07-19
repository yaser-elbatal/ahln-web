import { disclaimer } from "../../../public/files/disclaimer";
import HtmlViewer from "@/components/HtmlViewer";

export default async function DisclaimerPage() {
  return (
    <HtmlViewer
      html={disclaimer}
      heading="Disclaimer-Ahln"
      subheading="Software (Website, Mobile App, & Other Related Services), Hardware (Delivery Box & Peripherals), and Third-Party Services"
    />
  );
}
