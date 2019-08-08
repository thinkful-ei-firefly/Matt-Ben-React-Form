import { createContext } from "react";

const AppContext = createContext({
  folders: null,
  notes: null,
  deleteNote: () => {}
});

export default AppContext;
