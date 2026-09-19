"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export default function MarketTicker() {
  const host = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState<boolean | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    setEnabled(!preference.matches);
    const change = () => setEnabled(!preference.matches);
    preference.addEventListener("change", change);
    return () => preference.removeEventListener("change", change);
  }, []);

  useEffect(() => {
    const container = host.current;
    if (!container || !enabled) return;
    setFailed(false);
    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.onerror = () => setFailed(true);
    script.textContent = JSON.stringify({
      symbols: [
        { proName: "NASDAQ:AAPL", title: "Apple" },
        { proName: "NASDAQ:MSFT", title: "Microsoft" },
        { proName: "NASDAQ:NVDA", title: "NVIDIA" },
        { proName: "NYSE:TSM", title: "TSMC ADR" },
        { proName: "NYSE:SAP", title: "SAP ADR" },
        { proName: "NYSE:SHEL", title: "Shell ADR" }
      ], colorTheme: "dark", locale: "en", isTransparent: false,
      showSymbolLogo: false, displayMode: "regular", largeChartUrl: ""
    });
    container.replaceChildren(widget, script);
    const timeout = window.setTimeout(() => {
      if (!container.querySelector("iframe")) setFailed(true);
    }, 12000);
    return () => { window.clearTimeout(timeout); script.onerror = null; container.replaceChildren(); };
  }, [enabled]);

  return <aside className="market-ticker" aria-label="International company market quotes">
    <div className="ticker-feed">
      {enabled && !failed ? <div className="tradingview-widget-container" ref={host} /> :
        <p className="ticker-message">{failed ? "Market quotes are unavailable." : enabled === null ? "Loading market quotes..." : "Market ticker paused."} <a href="https://www.tradingview.com/markets/stocks-worldwide/" target="_blank" rel="noopener noreferrer">View markets</a></p>}
    </div>
    <div className="ticker-caption"><span><a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">Quotes by TradingView</a> <span className="ticker-delay"> · Exchange delays may apply</span></span>
      <button type="button" className="ticker-toggle" disabled={enabled === null} onClick={() => { setFailed(false); setEnabled(!enabled); }} title={enabled ? "Pause and hide market ticker" : "Show market ticker"} aria-label={enabled ? "Pause and hide market ticker" : "Show market ticker"}>
        {enabled ? <Pause size={13} /> : <Play size={13} />}<span>{enabled ? "Pause" : "Show quotes"}</span>
      </button>
    </div>
  </aside>;
}
