import { FC, useEffect, useRef } from "react";

type UnloadApplication = () => void;

const loadApplicationInContainer = (url: string): UnloadApplication => {
  const script = document.createElement("script");
  script.id = "mfe-loading-script";
  script.src = url;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
    document.body.innerHTML;
  };
};

export interface RendererProps {
  url: string;
}

export const Renderer: FC<RendererProps> = ({ url }) => {
  const loaded = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (loaded.current) {
      return;
    }
    const unload = loadApplicationInContainer(url);

    return () => {
      unload();
      loaded.current = false;
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [url]);

  return <div id="vanilla-js-root" ref={containerRef}></div>;
};
