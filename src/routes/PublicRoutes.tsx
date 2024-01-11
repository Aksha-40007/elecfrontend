import * as React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import PublicLayout from "../layouts/publicLayout";
import PageNotFound from "../components/error/pagenotfound";
// import TeacherDashboard from "../pages/dashboard/teacherDashboard/teacherdashboard";
// import StudentDashboard from "../pages/dashboard/studentDashboard/studentDashboard";

const PublicRoutes: React.FC = () => {
  // React.useEffect(()=>{
  // },[])
  alert('Public');
  return (
    <Routes>  
     <Route path="/" element={<PublicLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default PublicRoutes;

