import { InputSearch } from "./SearchBox.styled";

const SearchBox = () => {
  return (
    <>
      <InputSearch
        type="text"
        placeholder="&#xF002; Search"
        style={{ fontFamily: " Arial,FontAwesome" }}
      />
    </>
  );
};

export default SearchBox;
