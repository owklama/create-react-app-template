import { useEffect, useState } from "react";

export const useGetScreenHeight = () => {
  // Mobile height fix
  const [height, setHeight] = useState(window.innerHeight);

  const updateWindowDimensions = () => {
    const newHeight = window.innerHeight;
    setHeight(newHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    window.addEventListener("DOMContentLoaded", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
      window.addEventListener("DOMContentLoaded", updateWindowDimensions);
    };
  }, []);

  return height;
};
