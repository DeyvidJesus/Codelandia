import styled from "styled-components";
import BackgroundImg from '../../assets/HeaderBackground.svg'

export const Container = styled.header`
    width: 100%;
    height: 500px;
    background: url(${BackgroundImg});
    display: flex;
    justify-content: center;
    align-items: center;

    #PlantImg {
        position: absolute;
        width: 100px;
        left: 0;
        bottom: 5px;
        filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.24));
    }
`