import LaCumaImg from '../../assets/LaCuma.png'
import LaBanaImg from '../../assets/LaBana.png'
import LaMentaImg from '../../assets/LaMenta.png'
import LaTocaImg from '../../assets/LaToca.png'
import MushroomImg from '../../assets/Mushroom.png'
import FishImg from '../../assets/fish.png'
import SpiceImg from '../../assets/spice.png'
import LeafImg from '../../assets/Leaf.png'

import { Container, UlContainer } from "./Style";

export default function Menu() {
    return (
            <Container>
            <img id='MushroomImg' src={MushroomImg} alt="" />
            <img id='FishImg' src={FishImg} alt="" />
            <h1>Mais Vendidas</h1>
            <img id='LeafImg' src={LeafImg} alt="" />
                <UlContainer>
                <li>
                    <img src={LaCumaImg} alt="Imagem da pizza LaCuma" />
                    <h2>La Cuma</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <h1>R$ 23</h1>
                    <button type="button">Comprar Agora</button>
                </li>
                <li>
                    <img src={LaMentaImg} alt="Imagem da pizza LaMenta" />
                    <h2>La Menta</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum veniam.</p>
                    <h1>R$ 23</h1>
                    <button type="button">Comprar Agora</button>
                </li>
                <li>
                    <img src={LaBanaImg} alt="Imagem da pizza LaBana" />
                    <h2>La Bana</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum veniam quam expedita.</p>
                    <h1>R$ 23</h1>
                    <button type="button">Comprar Agora</button>
                </li>
                <li>
                    <img src={LaTocaImg} alt="Imagem da pizza LaToca" />
                    <h2>La Toca</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum veniam.</p>
                    <h1>R$ 23</h1>
                    <button type="button">Comprar Agora</button>
                </li>
                </UlContainer>
                <img id='SpiceImg' src={SpiceImg} alt="" />
            </Container>
    )
}