import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    console.log("media",media)
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change",listener);
    return () => media.removeEventListener("change",listener);
  }, [matches, query]);

  return matches;
}

export const useIsXSmall = () => useMediaQuery('(min-width: 300px)');
export const useIsSmall = () => useMediaQuery('(min-width: 480px)');
export const useIsMedium = () => useMediaQuery('(min-width: 768px)');