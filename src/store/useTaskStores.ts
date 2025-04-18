import { create } from "zustand";
import axios from "axios";
import { TasksType } from "../types";

type TaskStore = {
  tasks: TasksType[];
  fetchTasks: () => Promise<void>;
  toggleTask: (id: number, newDone: boolean) => Promise<void>;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  fetchTasks: async () => {
    const response = await axios.get<TasksType[]>(
      "http://localhost:8000/tarefas"
    );
    set({ tasks: response.data });
  },
  toggleTask: async (id: number, newDone: boolean) => {
    await axios.patch(`http://localhost:8000/tarefas/${id}`, {
      done: newDone,
    });
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, done: newDone } : task
      ),
    }));
  },
}));

export default useTaskStore;
