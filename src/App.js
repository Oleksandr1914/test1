import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import ListItem from "./components/ListItem/ListItem";
import Workspace from "./components/Workspace/Workspace";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/" element={<ListItem />}>
            <Route index element={<Workspace />} />
            <Route path=":id" element={<Workspace />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
