import { create } from "zustand";

interface LevelStore {
  level: number;
  xp: number;
  addXp: (amount: number) => void;
  removeXp: (amount: number) => void;
}

const useLevelStore = create<LevelStore>((set) => ({
  level: 1,
  xp: 0,
  addXp: (amount) =>
    set((state) => {
      let xp = state.xp + amount;
      let level = state.level;

      while (xp >= 100) {
        xp -= 100;
        level += 1;
      }

      return { xp, level };
    }),
  removeXp: (amount) =>
    set((state) => {
      let xp = state.xp - amount;
      let level = state.level;

      while (xp < 0) {
        level -= 1;
        xp += 100;
      }

      return { xp, level };
    }),
}));

export default useLevelStore;
