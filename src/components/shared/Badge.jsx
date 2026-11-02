export default function Badge({
  children,
  variant = "blue", // "blue" | "slate" | "emerald" | "amber" | "indigo"
  size = "sm",
  dot = false,
  className = "",
}) {
  const sizeClasses = size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm";

  const variantMap = {
    blue: "badge-blue",
    slate: "badge-slate",
    emerald: "badge-emerald",
    amber: "badge-amber",
    indigo: "badge-indigo",
  };

  const badgeClass = variantMap[variant] || "badge-blue";

  return (
    <span className={`inline-flex items-center font-medium rounded-full ${badgeClass} ${sizeClasses} ${className}`}>
      {dot && <span className="badge-dot mr-1.5" />}
      {children}
    </span>
  );
}
