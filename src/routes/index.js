import { Route, Routes } from "react-router-dom";
import { ProjectsList, NotFound, Project } from "../pages";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectsList />} />
      <Route path="/:id" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;