export default function Tag({ children, className = "", ...props }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        backgroundColor: "rgba(99, 102, 241, 0.12)",
        border: "1px solid rgba(99, 102, 241, 0.25)",
        color: "#818CF8",
        fontSize: "11px",
        borderRadius: "100px",
        padding: "4px 12px",
      }}
      {...props}
    >
      {children}
    </span>
  );
}
