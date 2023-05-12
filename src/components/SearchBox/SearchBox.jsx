import { InputSearch } from "./SearchBox.styled";
import { useNotes } from "../../notesContext";

const SearchBox = () => {
  const { List, changeFilterState } = useNotes();

  return (
    <>
      <InputSearch
        type="text"
        name="filter"
        value={List.filter}
        onChange={(e) => changeFilterState(e.target.value)}
        placeholder="&#xF002; Search"
        style={{ fontFamily: " Arial,FontAwesome" }}
      />
    </>
  );
};

export default SearchBox;
