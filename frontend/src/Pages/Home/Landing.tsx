import './Landing.css'
import Navbar from "../../assets/Components/Navbar/navbar"
import Home from '../../assets/Components/Containers/Home/home'
import Projeto from "../../assets/Components/Containers/Projeto/projeto"
import Footer from "../../assets/Components/Footer/footer"
import Sobre from "../../assets/Components/Containers/Sobre/sobre"
import Dicas from '../../assets/Components/Containers/Dicas/dicas'

function Landing() {
    return (
        <>
            <Navbar />
            <Home />
            <Projeto />
            <Sobre />
            <Dicas />
            <Footer />
        </>
    )
}

export default Landing