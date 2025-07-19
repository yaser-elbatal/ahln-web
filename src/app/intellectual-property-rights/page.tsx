import { intellectualProperty } from "../../../public/files/intellectualProperty";
import HtmlViewer from "@/components/HtmlViewer";

export default async function IntellectualPropertyPage() {
  return (
    <HtmlViewer
      html={intellectualProperty}
      heading="Intellectual Property Rights"
      subheading="Ahln"
    />
  );
}
