import { useNotes } from "../../notesContext";
import { ButtonBox } from "./Button.styled";
import { nanoid } from "nanoid";

const Button = ({ children }) => {
  const { List, setList } = useNotes();

  const addItem = () => {
    const dateNow = new Date();

    setList([
      ...List,
      { id: nanoid(), title: "", text: "", date: dateNow.toLocaleString() },
    ]);
  };

  return <ButtonBox onClick={addItem}>{children}</ButtonBox>;
};

export default Button;
