import React, { useEffect } from 'react'

export default function Chat() {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/642712f84247f20fefe91b2d/1gssa4700";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);

    return () => {
      const scripts = document.getElementsByTagName("script");
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.includes("tawk")) {
          scripts[i].parentNode.removeChild(scripts[i]);
        }
      }
    };
  }, []);

  return <div id="tawk-chat-container"></div>;
}