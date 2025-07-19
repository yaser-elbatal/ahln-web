import { PrivacyPolicyHtml } from "../../../public/files/privacyPolicy";
import HtmlViewer from "@/components/HtmlViewer";

export default async function PrivacyPolicyPage() {
  return (
    <HtmlViewer
      html={PrivacyPolicyHtml}
      heading="Privacy Policy"
      subheading="Ahln"
    />
  );
}
