import styled from "styled-components";


export const ContainerCard = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 20px;
    padding: 20px 20px;
    height: auto;

    @media(max-width: 900px) {
            height: 80vh;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            column-gap: 20px;
            padding: 20px;
    }

`

export const CardTrip = styled.div`
    background-color: #aa77ff;
    width: 95%;
    padding: 10px;
    text-align: left;
    box-shadow: 3px 3px 7px #00000080;

    span{
        font-weight: bold;

    }

    @media(max-width: 900px) {
        width: 300px;
    }

`
