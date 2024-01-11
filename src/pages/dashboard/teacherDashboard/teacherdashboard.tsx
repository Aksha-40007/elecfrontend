import * as React from "react";
import {StyledContent, StyledDashboard } from "./styles";
import TeachTable from "../../../components/table/teachertable";

const TeacherDashboard: React.FC = () => {
  return (
  <StyledDashboard>
      <StyledContent>
        <TeachTable/>
      </StyledContent>
    </StyledDashboard>
  )
}

export default TeacherDashboard
