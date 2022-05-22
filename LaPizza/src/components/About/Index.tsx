import { Container, InfoContainer } from "./Style";
import TomatoImg from '../../assets/tomato.png'
import PizzaImg from '../../assets/image.png'
import PizzaImg2 from '../../assets/image2.png'
import RestaurantImg from '../../assets/restaurant.png'

export default function About() {
    return (
        <>
            <Container>
                <img id="TomatoImg" src={TomatoImg} alt="" />
                <img id="PizzaImg" src={PizzaImg} alt="" />
                <img src={RestaurantImg} alt="" />
                <InfoContainer >
                    <h1>Sobre a La Pizza</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus assumenda nemo culpa dolore impedit, modi eveniet corporis officiis exercitationem dicta harum optio molestias minima hic voluptatibus, corrupti consequuntur dolor eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, pariatur placeat molestiae hic et doloremque facilis laboriosam. Excepturi, ut a veritatis omnis animi vel consectetur molestias sapiente nisi error expedita? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quibusdam magni tempora, quasi recusandae sit, aperiam saepe id, quaerat laborum natus. Autem sequi odit tempore rem enim. Voluptatibus, illo fuga.</p>
                    <button type="button">Ler mais</button>
                </InfoContainer>
                <img id="Pizza2Img" src={PizzaImg2} alt="" />

            </Container>

            <footer>
                <p>TODOS OS DIREITOS RESERVADOS</p>
            </footer>
        </>
    );
}