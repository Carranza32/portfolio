"use client";

import { useState } from "react";
import Image from "next/image";
import { Monitor, Smartphone, LayoutDashboard, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MBEMockupWidget() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("mobile"); // Default to mobile which has the video!
  const [activeWebIndex, setActiveWebIndex] = useState(0);

  const webScreenshots = [
    { src: "/img/mbe/web/web_dashboard1.png", label: { en: "Main Dashboard", es: "Dashboard Principal" } },
    { src: "/img/mbe/web/web_dashboard_income.png", label: { en: "Financial Reports", es: "Reportes Financieros" } },
    { src: "/img/mbe/web/web_prealert_creation.png", label: { en: "Pre-alert Creation", es: "Creación de Pre-alerta" } },
  ];

  return (
    <div className="mbe-widget-container" style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      position: "relative",
      minHeight: "360px",
      background: "radial-gradient(circle at center, rgba(108, 99, 255, 0.08) 0%, transparent 70%)"
    }}>
      {/* Selector de Dispositivo */}
      <div className="mbe-widget-tabs" style={{
        display: "flex",
        gap: "8px",
        marginBottom: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        padding: "4px",
        borderRadius: "100px",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        zIndex: 10
      }}>
        <button
          type="button"
          onClick={() => setActiveTab("mobile")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 14px",
            borderRadius: "100px",
            border: "none",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            backgroundColor: activeTab === "mobile" ? "#6366F1" : "transparent",
            color: activeTab === "mobile" ? "#ffffff" : "#94A3B8",
            transition: "all 200ms ease"
          }}
        >
          <Smartphone size={14} />
          {t({ en: "Mobile App", es: "App Móvil" })}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("web")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 14px",
            borderRadius: "100px",
            border: "none",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            backgroundColor: activeTab === "web" ? "#6366F1" : "transparent",
            color: activeTab === "web" ? "#ffffff" : "#94A3B8",
            transition: "all 200ms ease"
          }}
        >
          <Monitor size={14} />
          {t({ en: "Web SaaS", es: "SaaS Web" })}
        </button>
      </div>

      {/* Contenedor de Mockup */}
      <div className="mbe-widget-viewport" style={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
      }}>
        {activeTab === "mobile" ? (
          /* Teléfono Móvil */
          <div className="pdb-phone-frame" style={{
            position: "relative",
            width: "190px",
            height: "380px",
            borderRadius: "32px",
            border: "6px solid #1a1a24",
            backgroundColor: "#000000",
            overflow: "hidden",
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.60), 0 0 30px rgba(99, 102, 241, 0.15)",
            transform: "translateY(5px)",
            transition: "all 0.3s ease"
          }}>
            <div className="pdb-phone-notch" style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "15px",
              backgroundColor: "#1a1a24",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              zIndex: 5
            }} />
            <div className="pdb-phone-screen" style={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden"
            }}>
              <video
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/img/mbe/mobile/mobile_cus_prealert_list.PNG"
              >
                <source src="/img/mbe/mobile/ScreenRecording_04-14-2026 07-04-10_1.MP4" type="video/mp4" />
              </video>
            </div>
          </div>
        ) : (
          /* Navegador Web */
          <div className="mbe-web-stack" style={{
            width: "90%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            animation: "fadeIn 0.3s ease"
          }}>
            <div className="pdb-browser-frame" style={{
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backgroundColor: "rgba(13, 13, 17, 0.70)",
              overflow: "hidden",
              boxShadow: "0 15px 30px rgba(0,0,0,0.50), 0 0 20px rgba(99, 102, 241, 0.08)",
            }}>
              {/* Barra del Navegador */}
              <div className="pdb-browser-bar" style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                backgroundColor: "rgba(255, 255, 255, 0.04)"
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#ef4444", display: "inline-block" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#eab308", display: "inline-block" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22c55e", display: "inline-block" }} />
                <span style={{
                  flex: 1,
                  textAlign: "center",
                  fontSize: "10px",
                  color: "#94A3B8",
                  fontFamily: "monospace",
                  backgroundColor: "#111115",
                  padding: "2px 0",
                  borderRadius: "4px",
                  marginLeft: "10px",
                  maxWidth: "180px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                }}>
                  operator.mbe.sv
                </span>
              </div>
              {/* Pantalla del Navegador */}
              <div className="pdb-browser-screen" style={{
                position: "relative",
                width: "100%",
                height: "200px",
                backgroundColor: "rgba(0, 0, 0, 0.05)"
              }}>
                <Image
                  src={webScreenshots[activeWebIndex].src}
                  alt={t(webScreenshots[activeWebIndex].label)}
                  fill
                  className="pdb-screen-img"
                  style={{ objectFit: "cover" }}
                  sizes="400px"
                />
              </div>
            </div>

            {/* Selectores de Capturas Web */}
            <div className="mbe-web-selectors" style={{
              display: "flex",
              justifyContent: "center",
              gap: "6px",
              marginTop: "12px"
            }}>
              {webScreenshots.map((screen, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveWebIndex(idx)}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "4px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    fontSize: "10px",
                    fontWeight: 600,
                    cursor: "pointer",
                    backgroundColor: activeWebIndex === idx ? "#6366F1" : "#111115",
                    color: activeWebIndex === idx ? "#ffffff" : "#94A3B8",
                    transition: "all 150ms ease"
                  }}
                >
                  {t(screen.label)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
