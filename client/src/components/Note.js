import React, { useState } from "react";
import {
  Heading,
  Pane,
  Paragraph,
  EditIcon,
  CrossIcon,
  Button,
  Dialog,
} from "evergreen-ui";

import { useDispatch } from "react-redux";
import { deleteNote } from "../store/actions/notesActions";

const Note = ({ note }) => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();

  const onClickConfirm = () => {
    console.log(note._id);
    dispatch(deleteNote(note._id));
    setIsShown(false);
  };
  return (
    <Pane
      className="note-card"
      float="left"
      elevation={2}
      hoverElevation={3}
      width={350}
      height={300}
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      backgroundColor="white"
      padding={25}
      margin={24}
      borderRadius={15}
      borderTop={note.urgent}
      borderWidth={10}
      borderColor="salmon"
    >
      <Dialog
        isShown={isShown}
        title="Delete Note"
        intent="danger"
        onConfirm={onClickConfirm}
        confirmLabel="Delete"
        onCloseComplete={() => setIsShown(false)}
      >
        Are you sure you want to delete the note?
      </Dialog>
      <Heading>{note.title}</Heading>
      <Paragraph>{note.description}</Paragraph>
      <Paragraph>{note.createdAt}</Paragraph>
      <Pane>
        <Button size={15} marginRight={9} onClick={() => setIsShown(true)}>
          <CrossIcon color="red" />
        </Button>
        <Button appearance="primary" intent="none">
          <EditIcon />
        </Button>
      </Pane>
    </Pane>
  );
};

export default Note;
