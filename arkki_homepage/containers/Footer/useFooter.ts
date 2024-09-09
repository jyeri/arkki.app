import { useScroll } from "framer-motion";

export const useFooter = () => {
  const { scrollYProgress } = useScroll();
  return { scrollYProgress };
};