import Route from "./components/Route";
import SideBar from "./components/SideBar";
import TablePage from "./pages/TablePage";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";
function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
<SideBar/>

    <div className="col-5">
    <Route path="/">
        <DropdownPage/>
      </Route>
      <Route path="/accordion">
        <AccordionPage/>
      </Route>
      <Route path="/buttons">
        <ButtonPage/>
      </Route>
      <Route path="/modal">
        <ModalPage/>
      </Route>
      <Route path="/table">
        <TablePage/>
      </Route>
    </div>
    </div>
  );
}

export default App;
