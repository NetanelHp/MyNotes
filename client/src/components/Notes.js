import React from "react";
import Note from "./Note";
import { useSelector } from "react-redux";
import { Heading, Pane } from "evergreen-ui";

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  return (
    <div className="notes">
      {notes.length === 0 ? (
        <Heading marginTop={200} is="h2" size={800}>
          Add some notes...
        </Heading>
      ) : (
        <Pane clearfix>
          {notes.map((note) => (
            <Note key={note._id} note={note} />
          ))}
        </Pane>
      )}
    </div>
  );
};

export default Notes;
