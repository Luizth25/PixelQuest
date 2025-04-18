export type Character = "warrior" | "mage" | "archer" | "cleric";

export type MissionType = {
  id: number;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  done: boolean;
};

export type TasksType = {
  id: number;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  done: boolean;
  xp: number;
};
