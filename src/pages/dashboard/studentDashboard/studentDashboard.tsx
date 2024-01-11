import * as React from "react";
import { CenteredTitle, StyledContent, StyledDashboard } from "./styles";
import {Card, Col, Row } from "antd";
import StudTable from "../../../components/table/studenttable";
import CardComponent from "../../../components/card/CardComponent";
import {practicals} from "../praticalsdata";

const StudentDashboard: React.FC = () => {
  return (
        <StyledDashboard>
          <StyledContent>
          <Row className="row" align="middle">
            <Col flex="0 0 50%" className="column practicals">
              <Card className="practical">
                  <CenteredTitle>
                    <h2>Practicals</h2>
                  </CenteredTitle>
                  <Row gutter={5}>
                    {practicals.map((obj,index) => ( 
                    <Col key={index} flex="0 0 32.5%">
                      <CardComponent title={obj.title} src={obj.src}/>
                    </Col>
                    ))}
                  </Row>
              </Card>
            </Col>
            <Col flex="0 0 50%" className="column tables">
            <Card className="h-100 practical">
            <CenteredTitle>
                    <h2>Submitted Practicals</h2>
                  </CenteredTitle>
              <StudTable/>
            </Card></Col>
          </Row>
          <Row>
            <Col span={12}></Col>
            <Col span={12}></Col>
          </Row>
          </StyledContent>
        </StyledDashboard>
  );
};

export default StudentDashboard;
