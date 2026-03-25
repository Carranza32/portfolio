export default function SectionLabel({ children, className = "", ...props }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        fontFamily: "var(--font-jakarta), sans-serif",
        fontWeight: 700,
        fontSize: "11px",
        letterSpacing: "3px",
        textTransform: "uppercase",
        color: "#6c63ff",
      }}
      {...props}
    >
      {children}
    </span>
  );
}
