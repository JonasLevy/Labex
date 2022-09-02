import {useGetTrips} from "../../../../Hooks/useGetTrips"
import { CardTrip, ContainerCard } from "../styledTrip";
import { useNavigate } from "react-router-dom"



const Trip = () =>{

    const navigate = useNavigate()
    
        const tripList = useGetTrips()
        
        const goToApplication = () => {
            navigate('/applicationtrip')
        }
    

    console.log(tripList)
    return(
        <ContainerCard>
        {tripList.map(trip=>{
            return(
                <CardTrip>
                    <p> <span>Nome:</span> {trip.name}</p>
                    <p><span>Planeta:</span> {trip.planet}</p>
                    <p><span>Descrição:</span> {trip.description} </p>
                    <p><span>Data:</span> {trip.date} </p>
                    <p><span>Duração:</span> {trip.durationInDays} dias </p>
                    <button onClick={goToApplication}> Inscrever</button>
                </CardTrip>
            )
        })}
        </ContainerCard>
    )
}

export default Trip