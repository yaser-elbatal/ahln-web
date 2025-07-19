type HtmlViewerProps = {
  html: string;
  heading?: string;
  subheading?: string;
};

export default async function HtmlViewer({
  html,
  heading,
  subheading,
}: HtmlViewerProps) {
  return (
    <div className="prose md:mx-40 p-6 text-text mt-20 ">
      <h1
        className="  font-bold mb-6 text-center "
        style={{ fontSize: "30px" }}
      >
        {heading}
      </h1>
      <p className="text-[13px] mb-4 text-center text-sky-700">{subheading}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
