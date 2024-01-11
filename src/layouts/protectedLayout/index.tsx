import * as React from "react";
import { Button, Drawer, Image, Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import {
  ProtectedLayoutContentWrap,
  ProtectedLayoutTopMenuWrap,
  ProtectedLayoutWrap,
} from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import { colors } from "../../global/theme";
import logo from "../../assets/logo2.jpg";
import { useAppDispatch } from "../../store";
import { removeAuthUser } from "../../store/slices/AuthUserSlice";

const { Content, Footer } = Layout;

const ProtectedLayout: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <ProtectedLayoutWrap>
      <ProtectedLayoutTopMenuWrap>
        <div className="menuIcon">
          <MenuOutlined
            style={{ color: "white" }}
            onClick={() => {
              setOpenMenu(true);
            }}
          />
        </div>
        <span className="headerMenu">
          <HeaderMenu isInline={false} />
        </span>
        <Drawer
          open={openMenu}
          onClose={() => {
            setOpenMenu(false);
          }}
          closable={false}
          bodyStyle={{ backgroundColor: `${colors.dblue}` }}
        >
          <HeaderMenu  isInline />
        </Drawer>
      </ProtectedLayoutTopMenuWrap>
      <ProtectedLayoutContentWrap>
        <Layout>
          <Content>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Modern College Shivajinagar Pune-41105
          </Footer>
        </Layout>
      </ProtectedLayoutContentWrap>
    </ProtectedLayoutWrap>
  );
};

function HeaderMenu({ isInline }: { isInline: boolean }) {
  const dispatch = useAppDispatch();
  const navigate= useNavigate();
  const handlelogout = () =>{
   // debugger
    dispatch(removeAuthUser());
    navigate('/login');
  }

  // React.useEffect(()=>{

  // },[])

  return (
    <div className="menuitems">
      <Menu
        mode={isInline ? "inline" : "horizontal"}
        className="headermenuitem"
        items={[
          {
            key: "logo",
            itemIcon: <Image className="logoImg" preview={false} src={logo} />,
          },
          {
            key: "logout",
            itemIcon: <Button onClick={handlelogout}>Logout</Button>,
          },
        ]}
      ></Menu>
    </div>
  );
}

export default ProtectedLayout;
