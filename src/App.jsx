import { useState } from "react";
import "./App.css";
import BtnFirst from "./components/btnFirst";
import FirstHead from "./components/firstHead";
import Taskform from "./components/formCompo";
import TaskShow from "./components/taskShow";

function App() {
    const [active, setActive] = useState(false);
  return (
    <>
      
      <FirstHead />
      <BtnFirst active={active} setActive={setActive}/>
      <Taskform active={active} setActive={setActive} />
     
    </>
  );
}

export default App;
