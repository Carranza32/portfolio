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
        color: "#4F46E5",
        borderLeft: "2px solid #4F46E5",
        paddingLeft: "8px",
      }}
      {...props}
    >
      {children}
    </span>
  );
}
