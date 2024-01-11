// // ProtectedRoutes.tsx
import * as React from "react";
import {  Route, Routes } from "react-router-dom";
import ProtectedLayout from "../layouts/protectedLayout";
import StudentDashboard from "../pages/dashboard/studentDashboard/studentDashboard";
import PageNotFound from "../components/error/pagenotfound";
import TeacherDashboard from "../pages/dashboard/teacherDashboard/teacherdashboard";
import { useAppSelector } from "../store";
import Unauthorized from "../components/error/unauthorized";
import PublicLayout from "../layouts/publicLayout";

const getDashboard = (authUser:any) =>{
  const role: string | null = authUser?.user_role;
  if (!role) return Unauthorized;
  if (role === 'student') return StudentDashboard;
  if (role === 'admin') return TeacherDashboard;
}
  const ProtectedRoutes: React.FC = () => {
    const authUser = useAppSelector((state)=> state.currentAuthUser.authUser);
    let Component: React.FC | undefined = getDashboard(authUser);
    React.useEffect(() => {
      alert('akshata');  
      if (authUser) {
            Component = getDashboard(authUser);
        }
      }, [authUser]);
    
    return (
      <Routes>
        <Route path="/" element={<ProtectedLayout />}>
          {Component && <Route path="dashboard" element={<Component />} />}
        </Route>
        {/* <Route path="l" element={<PublicLayout/>}/> */}
        <Route path="*" element={<Unauthorized />} />
      </Routes>
    );
  };

export default ProtectedRoutes;
