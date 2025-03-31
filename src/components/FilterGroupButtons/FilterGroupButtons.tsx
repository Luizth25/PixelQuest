import { FilterGroup, FilterGroupButton } from "./FilterGroupButtons.styles";

type TFilterGroupButtons = {
  filter: "all" | "active" | "done";
  setFilter: React.Dispatch<React.SetStateAction<"all" | "active" | "done">>;
};

const FilterGroupButtons = ({ filter, setFilter }: TFilterGroupButtons) => {
  return (
    <FilterGroup>
      <FilterGroupButton
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        Todas
      </FilterGroupButton>
      <FilterGroupButton
        className={filter === "active" ? "active" : ""}
        onClick={() => setFilter("active")}
      >
        Pendentes
      </FilterGroupButton>
      <FilterGroupButton
        className={filter === "done" ? "active" : ""}
        onClick={() => setFilter("done")}
      >
        Concluídas
      </FilterGroupButton>
    </FilterGroup>
  );
};
export default FilterGroupButtons;
