import { styled } from "styled-components";
import { colors } from "../../global/theme";

const TOP_MENU_HEIGHT = 4;

export const ProtectedLayoutWrap = styled.div`
    min-height: 100vh;
    min-width:100vw;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    background-color: white;
`;

export const ProtectedLayoutTopMenuWrap = styled.div`
    background-color: ${colors.dblue};
    color: ${colors.white0};
    position: sticky;
    top: 0;
    width: 100%;
    position: -webkit-fixed;
    position: fixed;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    .menuIcon{
      background-color: ${colors.dblue};
      height:10%;
      padding:5px;
    }  

    .headermenuitem{
      background-color: ${colors.dblue};
      color:${colors.white0};
      font-weight:600;
      border:none;
      padding:0.3rem;
      display:flex;
      justify-content:space-between;
    }

    .headermenuitem .ant-menu-item:first-child {
      padding-right: 80%;
    }

    .logoImg{
        height:50px;
    }

    .menuDrawer{
      width:100%;
      height:100%;
      background-color:${colors.dblue};
    }
    
    @media (max-width:500px){
      .headerMenu{
        display:none;
      }

    }

    @media (min-width:500px){
      .menuIcon{
        display:none;
      }

      .headermenuitem.ant-menu-horizontal .ant-menu-item::after {
        border-bottom: none;
      }
    }
`;

export const ProtectedLayoutContentWrap = styled.div`
    margin-top: ${TOP_MENU_HEIGHT}rem;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    display: flex calc(100vh - ${TOP_MENU_HEIGHT}rem);
`;