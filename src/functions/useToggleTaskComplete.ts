const toggleTaskCompletion = <T extends { id: number; done: boolean }>(
  tasks: T[],
  id: number,
  onComplete: (task: T) => void,
  onUndo: (task: T) => void
): T[] => {
  return tasks.map((task) => {
    if (task.id === id) {
      if (!task.done) onComplete(task);
      else onUndo(task);

      return { ...task, done: !task.done };
    }
    return task;
  });
};

export default toggleTaskCompletion;
