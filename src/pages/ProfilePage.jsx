import { useLocation, useParams } from "react-router-dom"

function ProfilePage() {

    //Hämtar state som skickats via Link
    const location = useLocation();
    const params = useParams();

    console.log(params)

    return(<div>
        <h2>Profile</h2>
        <p><strong>Användarnamn:</strong> {location.state.userName}</p>
        <p><strong>Namn:</strong> {location.state.name}</p>
        <p><strong>Ålder:</strong> {location.state.age}</p>
        <p><strong>Plats:</strong> {location.state.location.country}, {location.state.location.city}</p>
        </div>
    
    )
}

export default ProfilePage