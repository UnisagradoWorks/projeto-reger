import './sobre.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Lixo1 from '../../../images/lixo1.png'
import Lixo1Mobile from '../../../images/lixo1Mobile.png'
import Lixo2 from '../../../images/lixo2.png'
import Lixo2Mobile from '../../../images/lixo2Mobile.png'
import Lixo3 from '../../../images/lixo3.png'
import Lixo3Mobile from '../../../images/lixo3Mobile.png'


function Sobre() {
    AOS.init({
        disable: window.innerWidth < 768
    })


    return (
        <>
            <div id='Sobre'></div>
            <section id='sobre' className='flex font column'>

                <div id='txtSobre'>
                    <h1><span>SOBRE</span> NÓS</h1>
                    <p>O Centro Universitário Sagrado Coração tem uma preocupação constante com os resíduos produzidos em todas as suas atividades. Essa preocupação vem de uma necessidade não só da instituição, mas um cuidado com os impactos causados no meio ambiente e com os efeitos a curto e longo prazo.</p>
                </div>

                <div id='imgSobre'>
                    <img data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true" className='lixoDesktop' src={Lixo1} alt="" />
                    <img data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true" className='lixoDesktop' src={Lixo2} alt="" />
                    <img data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true" className='lixoDesktop' src={Lixo3} alt="" />
                </div>

                <div id='carrossel'>
                    <Carousel showStatus={false} showArrows={true} autoPlay={true} infiniteLoop={true} transitionTime={400} stopOnHover={true} >
                        <div>
                            <img src={Lixo1Mobile} />
                            <p className="legend font">Pó de café e coador, resíduos de frutas (cascas, talos e restos), saquinhos de chá, resíduos alimentares (sem tempero), resíduos de jardinagem.</p>
                        </div>
                        <div>
                            <img src={Lixo2Mobile} />
                            <p className="legend font">Isopor, embalagens de sucos e salgadinhos, papel plástico, vidro, metal.</p>
                        </div>
                        <div>
                            <img src={Lixo3Mobile} />
                            <p className="legend font">Alimentos temperados, produtos colantes, guardanapos e lenços usados, embalagens (com resíduos não removíveis), ossos e espinhos, chiclete.</p>
                        </div>
                    </Carousel>
                </div>

            </section>
        </>
    )
}

export default Sobre