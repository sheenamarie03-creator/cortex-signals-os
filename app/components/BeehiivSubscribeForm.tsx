"use client";

import { useEffect, useRef } from "react";

const BEEHIIV_FORM_ID = "4e0af6a5-2aab-4e5b-bd82-d5583f9e481a";
const BEEHIIV_LOADER_SRC = "https://subscribe-forms.beehiiv.com/v3/loader.js";

export function BeehiivSubscribeForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    container.replaceChildren();

    const script = document.createElement("script");
    script.async = true;
    script.src = BEEHIIV_LOADER_SRC;
    script.dataset.beehiivForm = BEEHIIV_FORM_ID;

    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return (
    <div className="beehiiv-form-card" aria-label="Subscribe to Cortex Signals on Beehiiv">
      <div ref={containerRef} className="beehiiv-form-mount" />
    </div>
  );
}
