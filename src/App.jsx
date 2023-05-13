import Home from "./Components/Home.jsx";
import Layout from "./_layout.jsx";
import Blind from "./Components/Blind";
import Blinding from "./Components/Blinding.jsx";
import { Especific } from "./Components/Especific.jsx";

function App() {


    return (
        <Layout>
            <Home />
            <Blind />
            <Blinding />
            <Especific />
        </Layout>

    )
}

export default App
