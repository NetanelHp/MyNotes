import { GET_NOTES, ADD_NOTE, DELETE_NOTE } from "../types";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getNotes = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:4000/getnotes");
    dispatch({
      type: GET_NOTES,
      payload: data,
    });
  } catch (error) {}
};

export const addNote = (note) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/addnote",
      JSON.stringify(note),
      config
    );
    dispatch({
      type: ADD_NOTE,
      payload: data,
    });
  } catch (err) {}
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:4000/deletenote/${id}`
    );
    dispatch({
      type: DELETE_NOTE,
      payload: id,
    });
  } catch (err) {}
};
