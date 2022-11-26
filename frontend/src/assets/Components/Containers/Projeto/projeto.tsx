import './projeto.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Celular from '../../../images/celular.png'
import Num1 from '../../../images/num1.svg'
import Num2 from '../../../images/num2.svg'
import Num3 from '../../../images/num3.svg'
import Num4 from '../../../images/num4.svg'
import Localizacao from '../../../images/location.svg'



function Projeto() {
    AOS.init({
        disable: window.innerWidth < 768
    })


    return (
        <>
            <div id='Projeto'></div>
            <section id='projeto' className='flex font'>

                <div id='titleProjeto'>
                    <h1><span>O</span> <span>PROJETO</span></h1>
                </div>

                <div id='itemsProjeto'>

                    <div id='celularProjeto'>
                        <img src={Celular} alt="Imagem celular" />
                    </div>

                    <div id='items1' className='flex'>

                        <div id='item1Projeto' data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true">{/*(1)*/}
                            <img src={Num1} alt="círculo verde" />
                            <h2>O QUE FAZEMOS</h2>
                            <p>O projeto tem como função reduzir o consumo de resíduos dentro do campus, assim incentivando o descarte correto.</p>
                        </div>



                        <div id='item2Projeto' data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true">{/*(2)*/}
                            <img src={Num2} alt="círculo verde" />
                            <h2>COMO FAZEMOS</h2>
                            <p>Dentro do projeto os descartes são feitos através dos lixos de recicláveis, orgânicos, de rejeitos, de medicamentos e de pilhas, fazendo com que os os mesmos sejam descartados adequadamente. </p>
                        </div>

                    </div>

                    <div id='celularDesktop'>{/*(celular)*/}

                        <img src={Celular} alt="Imagem celular" />

                    </div>

                    <div id='items2' className='flex'>

                        <div id='item3Projeto' data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true">{/*(3)*/}
                            <img src={Num3} alt="círculo verde" />
                            <h2>CRESCEMOS</h2>
                            <p>Até o momento tivemos 189 pessoas atendidas de forma direta e 8340 atendimentos de forma indireta pelo projeto.</p>
                        </div>

                        <div id='item4Projeto' data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true">{/*(4)*/}
                            <img src={Num4} alt="círculo verde" />
                            <h2>ONDE ESTAMOS</h2>
                            <a href='https://goo.gl/maps/kEXfcZpubQQ9aCve7' target='_blank' ><p>R. Irmã Arminda, 10-50 <br /> - Jardim Brasil, Bauru - SP, <br /> 17011-160 <img id='locaPin' src={Localizacao} alt="Imagem localização" /></p></a>
                        </div>

                    </div>
                </div>

                {/* <div id='Sobre' ></div> */}
            </section >
        </>
    )
}

export default Projeto;