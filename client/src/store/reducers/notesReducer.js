import { GET_NOTES, ADD_NOTE, DELETE_NOTE } from "../types";

const initialState = {
  notes: [],
  errors: [],
};

const notesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NOTES:
      return {
        ...state,
        notes: payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [payload, ...state.notes],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== payload),
      };
    default:
      return state;
  }
};

export default notesReducer;
