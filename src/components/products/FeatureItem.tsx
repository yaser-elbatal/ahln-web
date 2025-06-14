// FeatureItem component
export default function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
  size?: number;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`flex-shrink-0 flex items-center justify-center rounded-xl`}
      >
        <img
          src={icon}
          alt={title + " icon"}
          className="w-18 h-18 md:w-26 md:h-26"
        />
      </div>
      <div>
        <h4 className="font-bold text-primary mb-1">{title}</h4>
        <p className="text-text text-sm leading-snug">{desc}</p>
      </div>
    </div>
  );
}
