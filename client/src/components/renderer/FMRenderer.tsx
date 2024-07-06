import { FC, useEffect, useRef } from "react";

import {
  __federation_method_getRemote,
  __federation_method_setRemote,
  // @ts-expect-error __federation__ is a global variable injected by Vite
} from "__federation__";
import { createRoot } from "react-dom/client";

export interface FMRendererProps {
  url: string;
}

export const FMRenderer: FC<FMRendererProps> = ({ url }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    __federation_method_setRemote("microfrontends", {
      url: () => Promise.resolve(url),
      format: "var",
      from: "webpack",
    });

    const rootEl = document.createElement("div");
    containerRef.current?.appendChild(rootEl);

    const root = createRoot(rootEl);
    __federation_method_getRemote("microfrontends", ".").then((m: { ReactFM: FC }) => {
      root.render(<m.ReactFM />);
    });

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
};
