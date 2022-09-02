import styled from "styled-components";
import fontSpace from "../../fonts/spacerangergradital.ttf"

export const Main = styled.header`
    box-sizing: border-box;
    width: 100vw;
    background-color: #ee5500;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0% 20px;

    @font-face {
        font-family:'space' ;
        src: url(${fontSpace}) format("truetype") ;
        font-size: normal;
    }

    .logo{
        font-family: 'space';
    }
`