import { useEffect, useState } from "react";

export default function useSpotlight(shortcut = "k") {
  const [isActive, setIsActive] = useState(false);

  const blur = (timeout = 100) => {
    setTimeout(() => {
      setIsActive(false);
    }, timeout);
  };

  const keyDownCb = (shortcut: string) => (e: KeyboardEvent) => {
    if (e.key === shortcut && e.ctrlKey) {
      e.preventDefault();
      setIsActive((v) => !v);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownCb(shortcut));

    return () => {
      window.removeEventListener("keydown", keyDownCb(shortcut));
    };
  }, []);

  return {
    isActive,
    blur,
  };
}
