import { styled } from "styled-components";


export const StyledDashboard = styled.div`
  min-width:100vw;
  min-height:100vh;
`;

export const StyledHeader = styled.div`
  position: sticky;
  min-height:1rem;
  top: 0;
  background-color: dodgerblue;
  color: white;
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
    font-size:18px;
    font-weight:500;
    padding:1rem;
  }

`;

export const StyledContent=styled.div`
  .practicalcontent{
    top:2;
  }

  .siderpractical{
    background:black;
  }

  Button{

  }

  .practical{
    margin:0.5rem;
    min-height:10rem;
    min-width:10rem;
  }

  
`;

export const CenteredTitle = styled.div`
  text-align: center;
`;

