import * as React from "react";
import LoginForm from "../../../components/forms/form";
import { Col, Image, Row } from "antd";
import { StyledLoginAbove, StyledLoginBelow, StyledLoginBody } from "./style";
import eleclab from "../../../assets/signinpage.svg";
import logo2 from "../../../assets/logo2.jpg"

const LoginPage :React.FC = () => {
  return (
    <StyledLoginBody>
      <StyledLoginAbove>
          <Row className="rowclass">
            <Col className="logo"><Image src={logo2} preview={false}/></Col>
            <Col flex="1 1 8%" className="details">
              <p id="heading1">Sign in to</p>
              <p id="heading2">Lorem ipsum is simply.</p>
              <p id="textbody">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>           </Col>
            <Col flex="1 1 5%" className="loginimage"><Image src={eleclab} preview={false}/></Col>
            <Col flex="1 1 15%" className="form"><LoginForm /></Col>
          </Row>
      </StyledLoginAbove>
      <StyledLoginBelow>
      <Row>
        <Col xs={{ span: 2 }} lg={{ span: 6, offset: 2 }}>
                  <p id="logas">Contact us</p>
                  <p id="footercontent">
                    Modern college of arts, science and commerce<br/>Shivajinagar, Pune-411005<br/>moderncollege@gmail.com<br/>+91-2163656125 
                  </p>
        </Col>
      </Row>
      </StyledLoginBelow>
    </StyledLoginBody>
  );
};

export default LoginPage;


