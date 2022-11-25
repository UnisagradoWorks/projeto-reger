import './home.css'
import Trees from '../../../images/Trees.png'
import Folhas from '../../../images/FolhasBar.png'

function Home() {

    return (
        <>
            <section id='homeSection' className="flex font">
                <div id='inicioHome'>
                    <img id='trees' src={Trees} alt="Imagem árvore" />
                    <div className='flex column'>
                        <h1 className='font'>Projeto Reger</h1>
                        <p className='font'>Juntos por um mundo mais sustentável!</p>
                    </div>
                </div>
                <div id='folhasDiv'>
                    <div id='folhasHome'>
                        <div id='Projeto'></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home