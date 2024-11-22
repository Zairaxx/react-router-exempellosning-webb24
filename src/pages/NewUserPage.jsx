import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"

function NewUserPage({addUser}){

    let [userName, setUsername] = useState("")
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [country, setCountry] = useState("")
    let [city, setCity] = useState("")

    let navigate = useNavigate();

    return(<>
        <h2>New user</h2>
        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
        <br/>
        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
        <br/>
        <input type="text" placeholder="Age" onChange={e => setAge(e.target.value)} />
        <br/>
        <input type="text" placeholder="Country" onChange={e => setCountry(e.target.value)}/>
        <br/>
        <input type="text" placeholder="City" onChange={e => setCity(e.target.value)}/>
        <br/>
        {/* <Link to="/"> */}
        <button onClick={() => {
        addUser({
            userName,
            name,
            age,
            location: {
                country,
                city
            }
        })
        navigate("/")
        
    }}>Add user</button>
        {/* </Link> */}

    </>)
}

export default NewUserPage