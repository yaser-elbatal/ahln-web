import { cookiePolicy } from "../../../public/files/cookiepolicy";
import HtmlViewer from "@/components/HtmlViewer";

export default async function cookiePolicyPage() {
  return (
    <HtmlViewer
      html={cookiePolicy}
      heading="Cookie Policy"
      subheading="Effective as of June 20, 2025"
    />
  );
}
