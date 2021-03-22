import { useEffect, useState } from 'react';

export default function useSpotlight(shortcut = 'k') {
  const [isActive, setIsActive] = useState(false);

  const blur = (timeout = 100) => {
    setTimeout(() => {
      setIsActive(false);
    }, timeout);
  };

  const keyDownCb = (sc) => (e) => {
    if (e.key === sc && e.ctrlKey) {
      e.preventDefault();
      setIsActive((v) => !v);
    }
  };

  const keyboardShortcuts = (sc = shortcut) => {
    useEffect(() => {
      window.addEventListener('keydown', keyDownCb(sc));

      return () => {
        window.removeEventListener('keydown', keyDownCb(sc));
      };
    }, []);
  };

  return {
    isActive,
    blur,
    keyboardShortcuts,
  };
}
