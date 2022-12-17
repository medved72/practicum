import { useWindowSize } from "@shared/hooks/useWindowSize";

export const useIsMobile = () => {
  const windowSize = useWindowSize();

  return windowSize.width <= 980;
};
