import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary", // "primary" | "secondary" | "outline" | "ghost"
  size = "md", // "sm" | "md" | "lg"
  to,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon: Icon,
  iconPosition = "left",
  download = false,
  external = false,
  ...props
}) {
  const baseClasses = "btn-base inline-flex items-center justify-center font-medium transition-all duration-200 select-none focus:outline-none focus:ring-2 focus:ring-blue-500/20";
  
  const sizeClasses = {
    sm: "btn-sm text-xs px-3 py-1.5 rounded-md gap-1.5",
    md: "btn-md text-sm px-4 py-2.5 rounded-lg gap-2",
    lg: "btn-lg text-base px-6 py-3.5 rounded-xl gap-2.5",
  }[size] || "btn-md text-sm px-4 py-2.5 rounded-lg gap-2";

  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    ghost: "btn-ghost",
  }[variant] || "btn-primary";

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className} ${disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : ""}`.trim();

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={size === "sm" ? 14 : size === "lg" ? 20 : 16} className="shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={size === "sm" ? 14 : size === "lg" ? 20 : 16} className="shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download ? true : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
