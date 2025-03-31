import { MissionType } from "../../types";
import { Form } from "./CreateTaskForm.styles";

type TCharacterTaskFormProps = {
  handleSubmit: (e: React.FormEvent) => void;
  input: string;
  setInput: (value: React.SetStateAction<string>) => void;
  difficulty: MissionType["difficulty"];
  setDifficulty: (
    value: React.SetStateAction<"easy" | "medium" | "hard">
  ) => void;
};

const CreateTaskForm = ({
  input,
  setInput,
  handleSubmit,
  difficulty,
  setDifficulty,
}: TCharacterTaskFormProps) => {
  return (
    <Form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nova missão..."
      />
      <select
        value={difficulty}
        onChange={(e) =>
          setDifficulty(e.target.value as MissionType["difficulty"])
        }
      >
        <option value="easy">Fácil</option>
        <option value="medium">Média</option>
        <option value="hard">Difícil</option>
      </select>
      <button type="submit">Adicionar</button>
    </Form>
  );
};

export default CreateTaskForm;
