import { TermsHtml } from "../../../public/files/terms";
import HtmlViewer from "@/components/HtmlViewer";

export default async function TermsOfServicePage() {
  return (
    <HtmlViewer
      html={TermsHtml}
      heading="Terms of Use"
      subheading="Effective as of June 20, 2025"
    />
  );
}
