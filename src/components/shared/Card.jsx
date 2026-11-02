export default function Card({
  children,
  hoverable = false,
  className = "",
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`portfolio-card ${hoverable ? "portfolio-card-hover" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
