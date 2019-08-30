import { createContext } from 'react';

const AppContext = createContext({
  folders: [],
  notes: [],
  deleteNote: () => {}
});

export default AppContext;
