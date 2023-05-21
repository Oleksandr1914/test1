import {
  SidebarContainer,
  BtnContainer,
  IconPlus,
  IconDelete,
  IconToggle,
  Wrapper,
} from "./Sidebar.styled";
import Button from "../button/Button";
import SearchBox from "../SearchBox/SearchBox";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useNotes } from "../../notesContext";
import { nanoid } from "nanoid";

const Sidebar = () => {
  const { List, addNoteData, deleteUserHandler, objectEdit } = useNotes();
  const navigate = useNavigate();
  const location = useLocation();

  const addItem = () => {
    const dateNow = new Date();
    const id = nanoid();
    const itemNote = {
      id: id,
      text: "",
      date: dateNow.toLocaleString(),
      isActive: true,
    };

    addNoteData(itemNote);
    navigate(`/${id}`);
  };

  const deleteItem = async () => {
    let ok = window.confirm("delete this note?");
    if (!ok) {
      return;
    }
    const idLoc = location?.pathname.slice(1, location.pathname.length);

    const deleteObject = await List.notes.find((el) => {
      if (idLoc === el.id) {
        return el;
      }
    });

    deleteUserHandler(deleteObject);
    const objectNav = List.notes[0];

    // objectEdit({ ...objectNav, isActive: true });
    // navigate(`/${objectNav?.id}`);
  };

  return (
    <>
      <SidebarContainer>
        <BtnContainer>
          <Button onClick={addItem}>
            <IconPlus />
          </Button>
          <Button>
            <IconDelete onClick={deleteItem} />
          </Button>
          <Button>
            <IconToggle />
          </Button>
        </BtnContainer>
        <SearchBox />
      </SidebarContainer>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default Sidebar;
