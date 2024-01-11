import styled from "styled-components";
import { colors } from "../../../global/theme";

export const StyledLoginBody = styled.div`
    min-width: 100%;
    max-height: 100%;
`;

export const StyledLoginAbove = styled.div`
    min-width:100%;
    min-height:65%;
    background-color: ${colors.dblue};
    .rowclass .logo{
        color:${colors.white0};
        font-size:20px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin: 0.5rem 1rem;
        height:10%;
        width:5%;
    }
    .rowclass .details{
        display:flex;
        flex-direction:column;
        color:${colors.white0};
        margin:7rem 0 5rem 2rem;
        font-size:20px;
        font-family: "Poppins";
        font-style: normal;
        line-height: normal;
        margin-left:1rem;
    }

    .details #heading1{
        font-weight:600;
    }
    
    .details #heading2{
        font-weight:400;
    }

    .details #textbody{
        font-weight:300;
    }

    .loginimage{
        max-width:100%;
        max-height: 100%;
        margin:2rem 0rem 1rem 2rem;
    }
    
`;

export const StyledLoginBelow = styled.div`
    min-width:100%;
    #logas{
        color: #000;
        font-family: Poppins;
        font-size: 25px;
        font-style: normal;
        font-weight: 550;
        line-height: normal;
        margin-top: 3rem;
    }
`;

