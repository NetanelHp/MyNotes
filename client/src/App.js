import "./App.css";
import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";
import { useDispatch } from "react-redux";
import { getNotes } from "./store/actions/notesActions";

const App = () => {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getNotes());
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Notes />
    </div>
  );
};

export default App;
