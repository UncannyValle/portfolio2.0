import { useState, useEffect } from "react";

const useVisibility = (): Boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const elementTop =
        window.innerHeight || document.documentElement.clientHeight;

      setIsVisible(elementTop - scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible;
};

export default useVisibility;
