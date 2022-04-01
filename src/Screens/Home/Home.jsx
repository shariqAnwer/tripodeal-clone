import "./Home.css"
import {Link} from "react-router-dom"


const Home = () => {
    return (
        <>
            <h1>Welcome to Home Page</h1>
           
                <Link to="/Search">Search button</Link>

        </>
    )
}


export default Home