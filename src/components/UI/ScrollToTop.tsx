import { useEffect } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  children?: ReactNode;
}
const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
