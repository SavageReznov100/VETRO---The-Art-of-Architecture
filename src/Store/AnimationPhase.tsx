import { create } from "zustand";

interface AnimationStore {
  animation: "animation1" | "animation2" | "animation3";
  setAnimation: (value: "animation1" | "animation2" | "animation3") => void;
}

export const useAnimationStore = create<AnimationStore>((set) => ({
  animation: "animation1",
  setAnimation: (value) => set({ animation: value }),
}));
