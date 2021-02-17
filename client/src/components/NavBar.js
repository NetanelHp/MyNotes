import React, { useState } from "react";
import {
  Heading,
  Dialog,
  PlusIcon,
  IconButton,
  Pane,
  FormField,
  TextInputField,
  Switch,
  Paragraph,
} from "evergreen-ui";
import { useDispatch } from "react-redux";
import { addNote } from "../store/actions/notesActions";

const NavBar = () => {
  const [isShown, setIsShown] = useState(false);
  const [isUrgent, setIsUrgent] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const onConfirmClick = () => {
    const note = {
      title,
      description,
      urgent: isUrgent,
    };
    dispatch(addNote(note));
    setIsShown(false);
    setTitle("");
    setDescription("");
    setIsUrgent(false);
  };

  return (
    <div className="nav-bar">
      <Dialog
        isShown={isShown}
        title="Add note"
        onCloseComplete={() => setIsShown(false)}
        onConfirm={onConfirmClick}
      >
        <FormField label="Please fill all fields to add a note">
          <TextInputField
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Title"
          />
          <TextInputField
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
          />
          <Paragraph marginBottom={10}>Urgent?</Paragraph>
          <Switch
            checked={isUrgent}
            onChange={(e) => setIsUrgent(e.target.checked)}
          />
        </FormField>
      </Dialog>
      <Pane
        display="flex"
        justifyContent="space-around"
        marginTop={45}
        marginBottom={60}
      >
        <Heading is="h1" size={900}>
          Notes
        </Heading>
        <IconButton
          borderRadius={50}
          onClick={() => setIsShown(true)}
          icon={PlusIcon}
          height={40}
        />
      </Pane>
    </div>
  );
};

export default NavBar;
