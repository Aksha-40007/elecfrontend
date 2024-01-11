import * as React from "react";
import { StyledBackgroundForm } from "./style";
import { useAppDispatch, useAppSelector } from "../../store";
import { login } from "../../store/slices/AuthUserSlice";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const authUser = useAppSelector((state) => state.currentAuthUser.authUser);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (authUser) {
      navigate(`/dashboard`);
    }
    console.log("Inside Auth",authUser);
  }, [authUser]);

  const onFinish = (values: any) => {
    const { username, password } = values;
    const payload = { username, password };
    try {
       dispatch(login(payload));
    } catch (error) {
      console.error("Not able to login, try again!!", error);
    }
  };

  
  return (
    <>
      <StyledBackgroundForm>
        <Typography.Title
          level={3}
          style={{ textAlign: "center", marginBottom: "1rem" }}
        >
          Welcome to Electronics Lab <br />Sign In
        </Typography.Title>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <div>
    <Typography.Title level={5} style={{ marginBottom: "0.5rem" }}>
      Enter your email:
    </Typography.Title>
    <Input placeholder="Username" autoComplete="username" />
  </div>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          ><div>
          <Typography.Title level={5}>
            Enter your password:
          </Typography.Title>
          <Input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
        </div>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        {/* {loading === 'loading' && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {isLoggedIn && <p>Logged in!</p>} */}
      </StyledBackgroundForm>
    </>
  );
};

export default LoginForm;
