import { styled } from "styled-components";
import { colors } from "../global/theme";

const TOP_MENU_HEIGHT = 5;

export const LayoutWrap = styled.div`
    max-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
`;

export const LayoutTopMenuWrap = styled.div`
    background-color: ${colors.dblue};
    color: ${colors.white0};
    position: sticky;
    top: 0;
    width: 100%;
    position: -webkit-fixed;
    position: fixed;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  @media screen and (max-width:847px)  {
    .column {
      flex: 100% !important; /* !important so that it overrides the inline style because by default it has higher priority */
    }
  }
  
  @media screen and (min-width:847px){
    .avtar{
      text-align:end;
    }
  }

  .column{
    font-size:14px;
    font-weight:500;
    padding:1rem;
  }

  .logo{
    margin-left:2rem;
    top: 0.5rem;
  }
`;

export const LayoutContentWrap = styled.div`
    margin-top: ${TOP_MENU_HEIGHT}rem;
    min-width: 100%;
    min-height: 100% ;
    overflow-x: hidden;
    display: flex calc(100vh - ${TOP_MENU_HEIGHT}rem);

`;