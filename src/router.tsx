import { Routes, Route } from "react-router";
import App from "./App";

import Clipboard from "./pages/clipboard";
import Write from "./pages/write";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index path="/clipboard" element={<Clipboard />} />
        <Route path="/write" element={<Write />} />
      </Route>
    </Routes>
  );
};
