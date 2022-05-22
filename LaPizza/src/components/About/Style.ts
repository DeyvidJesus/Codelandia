import styled from "styled-components";

export const Container = styled.div`
    margin: 15rem 0 2rem 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    #TomatoImg {
        position: absolute;
        width: 150px;
        height: 132.16px;
        left: 1149px;
        top: 1150px;
    }

    #PizzaImg {
        position: absolute;
        width: 106.87px;
        height: 106.99px;
        left: 2px;
        top: 1300px;

        transform: matrix(-0.6, 0.8, -0.8, -0.6, 0, 0);
    }

    #Pizza2Img {
        position: absolute;
        width: 150px;
        height: 150.73px;
        left: 1189px;
        top: 1613px;
    }
`

export const InfoContainer = styled.div`
    width: 50%;
    height: 300px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;

    button {
        margin-bottom: -1.5rem;
        width: 157px;
        height: 31px;
        border-radius: 25px;
        padding: 8px 12px;
        background: var(--yellow);
        border: solid 1px #000;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            filter: brightness(0.9);
        }
    }  
`