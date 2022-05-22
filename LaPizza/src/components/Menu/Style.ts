import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 7rem 0;
    width: 100%;

    #MushroomImg {
        position: absolute;
        width: 50px;
        height: 43.67px;
        left: 1192px;
        top: 587px;
        filter: drop-shadow(4px 1px 6px rgba(0, 0, 0, 0.25));
    }

    #FishImg {
        position: absolute;
        width: 100px;
        height: 100px;
        left: 382px;
        top: 580px;
        filter: drop-shadow(4px 2px 6px rgba(0, 0, 0, 0.43));
    }

    #LeafImg {
        position: absolute;
        z-index: -1;
        width: 60px;
        height: 90px;
        left: 1260px;
        top: 827px;
        filter: drop-shadow(2px 2px 7px rgba(0, 0, 0, 0.45));
        transform: rotate(25deg);
    }

    #SpiceImg {
        position: absolute;
        width: 133.84px;
        height: 90.2px;
        left: 19px;
        top: 1076.09px;
        transform: rotate(-5.18deg);
    }
`

export const UlContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 5rem;

    img {
        margin: -4rem 4rem 0 4rem;
    }

    li {
        background: var(--pink);
        width: 275px;
        height: 300px;
        border-radius: 25px;
        margin: 0 1rem;   

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        p {
            text-align: center;
        }

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
    }
`