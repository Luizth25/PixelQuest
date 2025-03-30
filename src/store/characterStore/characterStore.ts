import { create } from "zustand";
import { Character } from "../../types";

interface CharacterStore {
  avatar: Character;
  setAvatar: (avatar: Character) => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  avatar: "warrior",
  setAvatar: (avatar) => set({ avatar }),
}));
