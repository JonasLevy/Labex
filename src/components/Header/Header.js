import { Main } from "./styledIndex"
import { useNavigate } from "react-router-dom"


 const Header = ({title}) => {
    const navigate = useNavigate()
    

    const goBack = () => {
        navigate(-1)
    }
    
    return(
        <Main>
            <h1 className="logo">LABEX</h1>
            <h1 className="title">{title} </h1>
            <button onClick={goBack}>Votar</button>
        </Main>
    )
}

export default Header