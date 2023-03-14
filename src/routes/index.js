import { Route, Routes } from "react-router-dom";
import {Home,NotFound} from "../pages"

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default Navigation;