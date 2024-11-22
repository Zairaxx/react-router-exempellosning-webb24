import { useState } from "react"

function NewUserPage({addUser}){

    let [userName, setUsername] = useState("")
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [country, setCountry] = useState("")
    let [city, setCity] = useState("")

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
        <button onClick={() => addUser({
            userName,
            name,
            age,
            location: {
                country,
                city
            }
        })}>Add user</button>

    </>)
}

export default NewUserPage