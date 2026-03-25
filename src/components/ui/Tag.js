export default function Tag({ children, className = "", ...props }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        backgroundColor: "#1e1e24",
        border: "1px solid #2a2a35",
        color: "#9d97ff",
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
