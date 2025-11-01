import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export function useOutsudeClick<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
          
    };
  }, [callback]);

  return ref;
}
