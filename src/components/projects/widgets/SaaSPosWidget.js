"use client";

import { useState } from "react";
import { CreditCard, ShoppingCart, UserCheck, Receipt, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SaaSPosWidget() {
  const { t } = useLanguage();
  const [tenant, setTenant] = useState("bakery");
  const [cart, setCart] = useState([]);
  const [isPaying, setIsPaying] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [lastInvoiceNum, setLastInvoiceNum] = useState(1048);

  const tenantConfigs = {
    bakery: {
      subdomain: "maria-bakery.kpitan.cl",
      name: "María Bakery",
      color: "#ec4899", // Pink
      products: [
        { id: "b1", name: "Crossant", price: 2200 },
        { id: "b2", name: "Espresso", price: 1800 },
        { id: "b3", name: "Lemon Pie", price: 3500 }
      ]
    },
    repair: {
      subdomain: "carlos-tech.kpitan.cl",
      name: "Carlos Tech Support",
      color: "#f97316", // Orange
      products: [
        { id: "r1", name: "Screen Fix", price: 45000 },
        { id: "r2", name: "Device Clean", price: 15000 },
        { id: "r3", name: "OS Install", price: 25000 }
      ]
    }
  };

  const activeConfig = tenantConfigs[tenant];

  const handleTenantChange = (newTenant) => {
    setTenant(newTenant);
    setCart([]);
    setShowReceipt(false);
    setIsPaying(false);
  };

  const addToCart = (product) => {
    if (isPaying || showReceipt) return;
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  const processPayment = () => {
    if (cart.length === 0 || isPaying) return;
    setIsPaying(true);
    setShowReceipt(false);

    // Simular el flujo de Stripe / Webpay
    setTimeout(() => {
      setIsPaying(false);
      setShowReceipt(true);
      setLastInvoiceNum(prev => prev + 1);
      setCart([]);
    }, 1800);
  };

  return (
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      padding: "20px 16px",
      minHeight: "360px",
      background: "radial-gradient(circle at center, rgba(108, 99, 255, 0.04) 0%, transparent 70%)"
    }}>
      {/* Selector Multi-tenant (Subdominio) */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "8px",
        padding: "6px 12px"
      }}>
        <Globe size={14} style={{ color: activeConfig.color }} />
        <select
          value={tenant}
          onChange={(e) => handleTenantChange(e.target.value)}
          style={{
            flex: 1,
            backgroundColor: "transparent",
            color: "#F8FAFC",
            border: "none",
            fontSize: "11px",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "monospace",
            outline: "none"
          }}
        >
          <option value="bakery" style={{ backgroundColor: "#0d0d11", color: "#F8FAFC" }}>maria-bakery.kpitan.cl</option>
          <option value="repair" style={{ backgroundColor: "#0d0d11", color: "#F8FAFC" }}>carlos-tech.kpitan.cl</option>
        </select>
      </div>

      {/* POS Screen */}
      <div style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "1.1fr 0.9fr",
        gap: "10px",
        minHeight: "180px"
      }}>
        {/* Catálogo de Productos */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px"
        }}>
          <span style={{ fontSize: "9px", color: "#94A3B8", fontWeight: 700, textTransform: "uppercase" }}>
            {t({ en: "Quick POS Menu", es: "Menú POS Rápido" })}
          </span>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px"
          }}>
            {activeConfig.products.map(product => (
              <button
                key={product.id}
                type="button"
                onClick={() => addToCart(product)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 12px",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "8px",
                  color: "#F8FAFC",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 150ms ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = activeConfig.color;
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                }}
              >
                <span style={{ fontSize: "11px", fontWeight: 600 }}>{product.name}</span>
                <span style={{ fontSize: "10px", fontFamily: "monospace", color: activeConfig.color, fontWeight: 700 }}>
                  ${product.price.toLocaleString("es-CL")}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Carrito e Impresora DTE */}
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "10px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Vista del Carrito */}
          {!showReceipt && !isPaying && (
            <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
              <div style={{ maxHeight: "110px", overflowY: "auto" }}>
                {cart.length === 0 ? (
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "90px",
                    color: "#64748B",
                    gap: "6px"
                  }}>
                    <ShoppingCart size={16} />
                    <span style={{ fontSize: "9px" }}>{t({ en: "Cart is empty", es: "Carro vacío" })}</span>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {cart.map(item => (
                      <div key={item.id} style={{ display: "flex", justifyContent: "space-between", fontSize: "10px" }}>
                        <span style={{ color: "#F8FAFC" }}>{item.qty}x {item.name}</span>
                        <span style={{ color: "#94A3B8", fontFamily: "monospace" }}>
                          ${(item.price * item.qty).toLocaleString("es-CL")}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <div style={{
                  borderTop: "1px dashed rgba(255, 255, 255, 0.15)",
                  paddingTop: "6px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "11px",
                  fontWeight: 700,
                  marginBottom: "8px"
                }}>
                  <span style={{ color: "#94A3B8" }}>Total</span>
                  <span style={{ color: activeConfig.color, fontFamily: "monospace" }}>
                    ${cartTotal.toLocaleString("es-CL")}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={processPayment}
                  disabled={cart.length === 0}
                  style={{
                    width: "100%",
                    padding: "6px",
                    backgroundColor: cart.length === 0 ? "rgba(255, 255, 255, 0.04)" : activeConfig.color,
                    color: cart.length === 0 ? "#64748B" : "#ffffff",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "10px",
                    fontWeight: 700,
                    cursor: cart.length === 0 ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px"
                  }}
                >
                  <CreditCard size={11} />
                  {t({ en: "Emit Invoice", es: "Emitir Boleta" })}
                </button>
              </div>
            </div>
          )}

          {/* Loader de Transacción */}
          {isPaying && (
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              gap: "8px"
            }}>
              <CreditCard size={24} style={{ color: activeConfig.color, animation: "bounce 1s infinite" }} />
              <span style={{ fontSize: "10px", color: "#94A3B8", fontFamily: "monospace" }}>
                {t({ en: "Processing DTE...", es: "Procesando DTE..." })}
              </span>
            </div>
          )}

          {/* Boleta DTE Impresa */}
          {showReceipt && (
            <div style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "#F8FAFC",
              borderRadius: "8px",
              padding: "10px",
              fontFamily: "monospace",
              fontSize: "8px",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35), 0 0 15px rgba(99, 102, 241, 0.1)",
              animation: "receiptSlideDown 0.4s ease-out forwards",
              transformOrigin: "top"
            }}>
              <div style={{ textAlign: "center", fontWeight: 800, borderBottom: "1px solid rgba(255, 255, 255, 0.2)", paddingBottom: "4px" }}>
                BOLETA ELECTRÓNICA
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                <span>N° DTE:</span>
                <span style={{ fontWeight: 700, color: "#818CF8" }}>{lastInvoiceNum}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>FECHA:</span>
                <span>28/05/2026</span>
              </div>
              <div style={{ borderBottom: "1px dashed rgba(255, 255, 255, 0.15)", margin: "6px 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "9px" }}>
                <span>TOTAL:</span>
                <span style={{ color: activeConfig.color }}>${cartTotal.toLocaleString("es-CL")}</span>
              </div>
              <div style={{ borderBottom: "1px dashed rgba(255, 255, 255, 0.15)", margin: "6px 0" }} />
              <div style={{
                textAlign: "center",
                color: "#4ADE80",
                fontWeight: 700,
                fontSize: "7px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "2px"
              }}>
                <Receipt size={8} />
                SII CHILE CERTIFIED
              </div>
              <button
                type="button"
                onClick={() => setShowReceipt(false)}
                style={{
                  marginTop: "8px",
                  backgroundColor: "#6366F1",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  fontSize: "8px",
                  cursor: "pointer",
                  fontWeight: 700,
                  transition: "all 150ms ease",
                  textAlign: "center"
                }}
                onMouseOver={(e) => e.currentTarget.style.filter = "brightness(1.1)"}
                onMouseOut={(e) => e.currentTarget.style.filter = "none"}
              >
                Nueva venta
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes receiptSlideDown {
          0% { transform: scaleY(0); opacity: 0; }
          100% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
