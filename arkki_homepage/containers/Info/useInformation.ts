import { useRef } from "react";

export const useInformation = () => {
  const MarttiRef = useRef(null);
  const JyriRef = useRef(null);
  const NikiRef = useRef(null);
  const RiksuRef = useRef(null);
  const ContactRef = useRef(null);

  return {
    MarttiRef,
    JyriRef,
    NikiRef,
    RiksuRef,
    ContactRef,
  };
};