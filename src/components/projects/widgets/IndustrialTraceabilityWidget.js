"use client";

import { useState, useEffect, useRef } from "react";
import { ScanLine, Play, RotateCcw, Cpu, Wifi } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function IndustrialTraceabilityWidget() {
  const { t } = useLanguage();
  const [logs, setLogs] = useState([
    { id: 1, time: "13:19:02", text: "System initialized. WebSockets status: CONNECTED.", type: "sys" },
    { id: 2, time: "13:19:05", text: "Production Order #PO-2026-928 launched.", type: "sys" }
  ]);
  const [oee, setOee] = useState(94.2);
  const [isScanning, setIsScanning] = useState(false);
  const [scanCount, setScanCount] = useState(148);
  const consoleEndRef = useRef(null);

  // Fluctuación aleatoria y suave de la eficiencia OEE
  useEffect(() => {
    const timer = setInterval(() => {
      setOee(prev => {
        const delta = (Math.random() - 0.5) * 0.4;
        const next = prev + delta;
        return Number(Math.max(92.0, Math.min(97.8, next)).toFixed(1));
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Hacer scroll automático al final de la consola cuando entran logs
  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  // Simular un escaneo de código de barras
  const triggerScan = () => {
    if (isScanning) return;
    setIsScanning(true);

    // Lista de SKUs y piezas aleatorias
    const parts = [
      "ABS Plastic Cover", "Steel Bracket L-30", "PCB Mainboard V2", 
      "Li-Ion Battery Cell", "Copper Core Coil", "Rubber Seal Gasket"
    ];
    const operators = ["Operator 04", "Operator 12", "Operator 09"];
    
    const randomPart = parts[Math.floor(Math.random() * parts.length)];
    const randomOp = operators[Math.floor(Math.random() * operators.length)];
    const skuCode = `SKU-${Math.floor(1000 + Math.random() * 9000)}`;

    setTimeout(() => {
      setIsScanning(false);
      setScanCount(prev => prev + 1);

      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];

      // Añadir log de escaneo
      setLogs(prev => [
        ...prev,
        {
          id: prev.length + 1,
          time: timeStr,
          text: `[BARCODE] Scanned ${skuCode} (${randomPart}) at ${randomOp}`,
          type: "scan"
        },
        {
          id: prev.length + 2,
          time: timeStr,
          text: `[WS BROADCAST] Broadcasted to 12 executives. Latency: 14ms`,
          type: "ws"
        }
      ]);
    }, 850);
  };

  return (
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      padding: "24px 20px",
      minHeight: "360px",
      background: "radial-gradient(circle at center, rgba(34, 197, 94, 0.04) 0%, transparent 70%)"
    }}>
      {/* Cabecera del Panel */}
      <div style={{
        display: "flex",
        justifyContent: "between",
        alignItems: "center",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        paddingBottom: "10px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Cpu size={16} style={{ color: "#22c55e" }} />
          <span style={{
            fontSize: "12px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "#F8FAFC"
          }}>
            Traceability Panel v4.1
          </span>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          backgroundColor: "rgba(34, 197, 94, 0.1)",
          padding: "2px 8px",
          borderRadius: "100px",
          border: "1px solid rgba(34, 197, 94, 0.2)"
        }}>
          <Wifi size={10} style={{ color: "#22c55e" }} />
          <span style={{ fontSize: "10px", fontWeight: 700, color: "#22c55e", textTransform: "uppercase" }}>
            Live
          </span>
        </div>
      </div>

      {/* Grid del Dashboard (OEE y Contador) */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.2fr",
        gap: "12px"
      }}>
        {/* OEE Circular Gauge */}
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "10px",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}>
          <span style={{ fontSize: "10px", color: "#94A3B8", fontWeight: 600, marginBottom: "8px" }}>
            PLANT OEE
          </span>
          <div style={{ position: "relative", width: "70px", height: "70px" }}>
            <svg width="70" height="70" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#222"
                strokeWidth="2.5"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeDasharray={`${oee}, 100`}
                style={{ transition: "stroke-dasharray 0.3s ease" }}
              />
            </svg>
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "13px",
              fontWeight: 800,
              color: "#F8FAFC"
            }}>
              {oee}%
            </div>
          </div>
        </div>

        {/* Scan Controls */}
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "10px",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
          <div>
            <div style={{ fontSize: "9px", color: "#94A3B8", fontWeight: 600 }}>TOTAL REGISTERED</div>
            <div style={{ fontSize: "20px", fontWeight: 900, color: "#F8FAFC", marginTop: "2px" }}>
              {scanCount}
            </div>
          </div>

          {/* Trigger Scan Button */}
          <button
            type="button"
            onClick={triggerScan}
            disabled={isScanning}
            style={{
              width: "100%",
              padding: "8px",
              backgroundColor: isScanning ? "#1e1e24" : "#22c55e",
              color: isScanning ? "#64748B" : "#0d0d0f",
              border: "none",
              borderRadius: "6px",
              fontWeight: 700,
              fontSize: "11px",
              cursor: isScanning ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              transition: "all 150ms ease",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <ScanLine size={13} style={{ animation: isScanning ? "spin 1.5s linear infinite" : "none" }} />
            {isScanning ? t({ en: "SCANNING...", es: "ESCANEANDO..." }) : t({ en: "TRIGGER SCAN", es: "GATILLAR ESCANEO" })}

            {/* Simulated Laser Ray effect when scanning */}
            {isScanning && (
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "2px",
                backgroundColor: "#ef4444",
                boxShadow: "0 0 10px #ef4444",
                animation: "scannerLaser 0.8s ease-in-out infinite"
              }} />
            )}
          </button>
        </div>
      </div>

      {/* Terminal de Logs en Tiempo Real */}
      <div style={{
        flex: 1,
        backgroundColor: "#0F172A",
        border: "none",
        borderRadius: "8px",
        padding: "10px 12px",
        fontFamily: "monospace",
        fontSize: "10px",
        lineHeight: "1.4",
        color: "#94A3B8",
        overflowY: "auto",
        maxHeight: "130px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)"
      }}>
        {logs.map((log) => (
          <div key={log.id} style={{ display: "flex", gap: "6px" }}>
            <span style={{ color: "#22c55e" }}>[{log.time}]</span>
            <span style={{ 
              color: log.type === "scan" ? "#ffffff" : log.type === "ws" ? "#818CF8" : "#94A3B8",
              wordBreak: "break-all"
            }}>
              {log.text}
            </span>
          </div>
        ))}
        <div ref={consoleEndRef} />
      </div>

      <style jsx global>{`
        @keyframes scannerLaser {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
      `}</style>
    </div>
  );
}
