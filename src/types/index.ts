export type Character = "warrior" | "mage" | "archer" | "cleric";

export type MissionType = {
  id: number;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  done: boolean;
};
