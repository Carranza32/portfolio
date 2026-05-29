"use client";

import { useState, useEffect } from "react";
import { Navigation, MapPin, CheckCircle, CreditCard, RefreshCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LogisticsMapWidget() {
  const { t } = useLanguage();
  const [gateway, setGateway] = useState("stripe");
  const [phase, setPhase] = useState(0); // 0: listed, 1: paid, 2: routing/driving, 3: delivered
  const [progress, setProgress] = useState(0); // 0 to 100 for truck driving animation

  // Manejar el ciclo de simulación automática
  useEffect(() => {
    let timer;
    if (phase === 0) {
      // 1.5s en listado, luego pagar
      timer = setTimeout(() => setPhase(1), 1800);
    } else if (phase === 1) {
      // 1.5s en pago, luego rutear/conducir
      timer = setTimeout(() => {
        setPhase(2);
        setProgress(0);
      }, 1800);
    } else if (phase === 2) {
      // Incrementar progreso de conducción
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setPhase(3);
            return 100;
          }
          return prev + 4; // Velocidad de conducción
        });
      }, 100);
      return () => clearInterval(interval);
    } else if (phase === 3) {
      // 3.5s en entregado, luego reiniciar
      timer = setTimeout(() => {
        setPhase(0);
        setProgress(0);
      }, 3500);
    }
    return () => clearTimeout(timer);
  }, [phase]);

  // Posiciones SVG calculadas según el progreso (camino curvo simplificado)
  // De Arborist (x: 40, y: 110) a Cliente (x: 240, y: 40)
  const getTruckPos = () => {
    const startX = 40;
    const startY = 110;
    const endX = 240;
    const endY = 40;
    
    // Ruta curva de Bezier: P0(40,110), P1(140, 140), P2(240, 40)
    const tVal = progress / 100;
    const x = (1 - tVal) * (1 - tVal) * startX + 2 * (1 - tVal) * tVal * 140 + tVal * tVal * endX;
    const y = (1 - tVal) * (1 - tVal) * startY + 2 * (1 - tVal) * tVal * 140 + tVal * tVal * endY;
    
    return { x, y };
  };

  const truckPos = getTruckPos();

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
      {/* Selector de Pasarela */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        paddingBottom: "8px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Navigation size={14} style={{ color: "#6366F1", transform: "rotate(45deg)" }} />
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#F8FAFC", textTransform: "uppercase" }}>
            US Last-mile Routing
          </span>
        </div>
        
        <div style={{ display: "flex", gap: "4px" }}>
          <button
            type="button"
            onClick={() => setGateway("stripe")}
            style={{
              padding: "2px 8px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "4px",
              fontSize: "9px",
              fontWeight: 700,
              cursor: "pointer",
              backgroundColor: gateway === "stripe" ? "#6366F1" : "rgba(255, 255, 255, 0.03)",
              color: gateway === "stripe" ? "#ffffff" : "#94A3B8"
            }}
          >
            Stripe
          </button>
          <button
            type="button"
            onClick={() => setGateway("square")}
            style={{
              padding: "2px 8px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "4px",
              fontSize: "9px",
              fontWeight: 700,
              cursor: "pointer",
              backgroundColor: gateway === "square" ? "#6366F1" : "rgba(255, 255, 255, 0.03)",
              color: gateway === "square" ? "#ffffff" : "#94A3B8"
            }}
          >
            Square
          </button>
        </div>
      </div>

      {/* Mapa SVG */}
      <div style={{
        position: "relative",
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "10px",
        overflow: "hidden",
        minHeight: "150px",
        boxShadow: "0 0 20px rgba(99, 102, 241, 0.05)"
      }}>
        <svg width="100%" height="100%" viewBox="0 0 280 150" style={{ position: "absolute", top: 0, left: 0 }}>
          {/* Rejilla de fondo decorativa */}
          <defs>
            <pattern id="grid" width="15" height="15" patternUnits="userSpaceOnUse">
              <path d="M 15 0 L 0 0 0 15" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Línea de Ruta (Curva de Bezier) */}
          <path
            d="M 40 110 Q 140 140, 240 40"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Línea de progreso recorrida por el camión */}
          {phase >= 2 && (
            <path
              d={`M 40 110 Q 140 140, 240 40`}
              fill="none"
              stroke="#6366F1"
              strokeWidth="2"
              strokeDashoffset={100 - progress}
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
          )}

          {/* Nodo 1: Arborista (Houston, TX) */}
          <g transform="translate(40, 110)">
            <circle r="14" fill="rgba(34, 197, 94, 0.15)" style={{ animation: "ping 2s infinite" }} />
            <circle r="6" fill="#22c55e" />
            <text y="-10" textAnchor="middle" fill="#94A3B8" fontSize="8" fontWeight="700">ARBORIST</text>
          </g>

          {/* Nodo 2: Cliente (Houston, TX) */}
          <g transform="translate(240, 40)">
            <circle r="14" fill="rgba(99, 102, 241, 0.15)" />
            <circle r="6" fill="#6366F1" />
            <text y="-10" textAnchor="middle" fill="#94A3B8" fontSize="8" fontWeight="700">CLIENT</text>
          </g>

          {/* Icono del camión en movimiento */}
          {phase === 2 && (
            <g transform={`translate(${truckPos.x}, ${truckPos.y})`}>
              <rect x="-8" y="-5" width="16" height="10" rx="2" fill="#6366F1" />
              <rect x="4" y="-3" width="5" height="6" rx="1" fill="#06B6D4" />
              <circle cx="-4" cy="5" r="2.5" fill="#111115" />
              <circle cx="4" cy="5" r="2.5" fill="#111115" />
            </g>
          )}
        </svg>

        {/* Notificación Flotante al terminar la entrega */}
        {phase === 3 && (
          <div style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            border: "1px solid rgba(34, 197, 94, 0.3)",
            color: "#4ADE80",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "9px",
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            gap: "4px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            animation: "fadeIn 0.3s ease"
          }}>
            <CheckCircle size={10} />
            Firebase Push: Sent!
          </div>
        )}
      </div>

      {/* Consola de Ticker de Logística */}
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "8px",
        padding: "10px 12px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        minHeight: "75px"
      }}>
        <div style={{ fontSize: "8px", color: "#94A3B8", fontWeight: 700, textTransform: "uppercase" }}>
          Routing & Logistics Engine
        </div>

        {phase === 0 && (
          <div style={{ fontSize: "11px", color: "#F8FAFC", display: "flex", alignItems: "center", gap: "6px", animation: "fadeIn 0.2s ease" }}>
            <MapPin size={12} style={{ color: "#22c55e", animation: "pulse 1s infinite" }} />
            <span>{t({ en: "Arborist listed 12yd³ Pine wood chips", es: "Arborista publicó 12yd³ de astillas" })}</span>
          </div>
        )}

        {phase === 1 && (
          <div style={{ fontSize: "11px", color: "#F8FAFC", display: "flex", alignItems: "center", gap: "6px", animation: "fadeIn 0.2s ease" }}>
            <CreditCard size={12} style={{ color: "#818CF8" }} />
            <span>
              {t({ en: "Payment captured successfully via ", es: "Pago capturado con éxito vía " })}
              <strong style={{ color: "#818CF8" }}>{gateway === "stripe" ? "Stripe API" : "Square API"}</strong>
            </span>
          </div>
        )}

        {phase === 2 && (
          <div style={{ fontSize: "11px", color: "#F8FAFC", display: "flex", alignItems: "center", gap: "6px", animation: "fadeIn 0.2s ease" }}>
            <RefreshCw size={12} style={{ color: "#fbbf24", animation: "spin 2s linear infinite" }} />
            <span>
              {t({ en: "Optimizing last-mile GPS route... ", es: "Optimizando ruta GPS de última milla... " })}
              <span style={{ color: "#fbbf24", fontFamily: "monospace" }}>{progress}%</span>
            </span>
          </div>
        )}

        {phase === 3 && (
          <div style={{ fontSize: "11px", color: "#4ADE80", display: "flex", alignItems: "center", gap: "6px", animation: "fadeIn 0.2s ease" }}>
            <CheckCircle size={12} />
            <span style={{ fontWeight: 600 }}>
              {t({ en: "Delivered to Texas Yard! Firebase FCM push notified.", es: "¡Entregado en Patio Texas! Notificación FCM enviada." })}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
