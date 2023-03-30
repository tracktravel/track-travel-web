"use client";
import React, { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    isMobile ? setUrl("https://api.whatsapp.com/send?phone=+5521994046975") : setUrl("https://web.whatsapp.com/send?phone=+5521994046975")
  }, []);

  return { url }

};
