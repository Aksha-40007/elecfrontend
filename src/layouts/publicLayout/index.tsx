import { Outlet } from "react-router-dom";
import { LayoutContentWrap, LayoutWrap } from "../layoutStyles";

const PublicLayout:React.FC = () => {
  return (
    <LayoutWrap>
      {/* <LayoutTopMenuWrap> Import here</LayoutTopMenuWrap> */}
      <LayoutContentWrap style={{height:'100vh', marginTop:0}}>
        <Outlet/>
      </LayoutContentWrap>
    </LayoutWrap>
  );
};

export default PublicLayout;

