import LaPizzaImg from "../../assets/LaPizza.png";
import PlantImg from '../../assets/Plant.png'

import { Container } from "./Style";

function Header() {
    return (
        <Container>
            <img src={LaPizzaImg} alt="" />
            <img id='PlantImg' src={PlantImg} alt="" />
        </Container>
    );
}

export default Header