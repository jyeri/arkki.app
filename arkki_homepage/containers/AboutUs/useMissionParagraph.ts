import { useRef } from "react";

export const useMissionParagraph = () => {
  const missionRef = useRef<HTMLDivElement>(null);
  const joinRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);

  return {
    missionRef,
    joinRef,
    journeyRef,
  };
};