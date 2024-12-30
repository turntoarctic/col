import { Routes, Route } from "react-router";
import App from "./App";

import Paste from "./pages/paste";
import Note from "./pages/note/note";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index path="/paste" element={<Paste />} />
        <Route path="/note" element={<Note />} />
      </Route>
    </Routes>
  );
};
