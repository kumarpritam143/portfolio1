import Badge from "./Badge";

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = false,
  className = "",
  action,
}) {
  return (
    <div
      className={`section-header-wrap ${
        centered ? "text-center mx-auto" : "flex flex-col md:flex-row md:items-end md:justify-between"
      } ${className}`}
    >
      <div className={centered ? "max-w-2xl mx-auto" : "max-w-2xl"}>
        {badge && (
          <div className={`mb-3 ${centered ? "flex justify-center" : ""}`}>
            <Badge variant="blue" size="sm">
              {badge}
            </Badge>
          </div>
        )}
        <h2 className="section-title text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="section-subtitle mt-3 text-base text-slate-600 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      {action && !centered && (
        <div className="mt-4 md:mt-0 shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}
