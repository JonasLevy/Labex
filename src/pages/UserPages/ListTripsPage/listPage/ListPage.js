import Trip from "./Trip"
import { ContainerTripList } from "./styledTripList"
import Header from "../../../../components/Header/Header"




const ListPage = () => {

    

    

    return (
        <ContainerTripList>
            < Header title="Lista de Viagens" />

            <div className="containerButton">
                
                
            </div>
            
            <div className="containerTrips">
                <Trip />
            </div>


        </ContainerTripList>
    )
}

export default ListPage