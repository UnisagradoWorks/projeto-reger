import './dicas.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Num1 from '../../../images/num1.svg'
import Num2 from '../../../images/num2.svg'
import Num3 from '../../../images/num3.svg'
import Num4 from '../../../images/num4.svg'



function Dicas() {
    AOS.init({ disable: 'mobile', });

    return (
        <>
            <div id='Dicas'></div>
            <section id='dicas' className='flex font'>

                <div id='titleDicas'>
                    <h1>DICAS</h1>
                </div>

                <div id='itemsDicas'>

                    <div id='items1' className='flex'>

                        <div id='item1Dicas' data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true">{/*(1)*/}
                            <img src={Num1} alt="" />
                            <h2>REDUZIR</h2>
                            <p>consumir menos produtos e preferir aqueles que ofereçam menor potencial de geração de resíduos e tenham maior durabilidade.</p>
                        </div>



                        <div id='item2Dicas' data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true">{/*(2)*/}
                            <img src={Num2} alt="" />
                            <h2>RECICLAR</h2>
                            <p>Envolve a transformação dos materiais para a produção de matéria-prima para outros produtos por meio de processos industriais ou artesanais. É fabricar um produto a partir de um material usado.</p>
                        </div>

                    </div>

                    <div id='items2' className='flex'>

                        <div id='item3Dicas' data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true">{/*(3)*/}
                            <img src={Num3} alt="" />
                            <h2>REUTILIZAR</h2>
                            <p>Usar novamente as embalagens.</p>
                        </div>

                        <div id='item4Dicas' data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true">{/*(4)*/}
                            <img src={Num4} alt="" />
                            <h2>REPENSAR</h2>
                            <p>Sobre os seus atos de consumo e os impactos que eles provocam sobre você mesmo, a economia, as relações sociais e a natureza.</p>
                        </div>

                    </div>
                </div>


            </section >
        </>
    )
}

export default Dicas;