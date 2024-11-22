import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewUserPage from './pages/NewUserPage'
import ProfilePage from './pages/ProfilePage'
function App() {

  const [users, setUsers] = useState([
    {
      userName: "CaptainFrisk",
      name: "Test Testsson",
      age: 99,
      location: {
        country: "Sweden",
        city: "Stockholm"
      }
    },
    {
      userName: "ShadowKnight",
      name: "John Doe",
      age: 45,
      location: {
        country: "USA",
        city: "New York"
      }
    },
    {
      userName: "BlueFalcon",
      name: "Sarah Bluefield",
      age: 30,
      location: {
        country: "Canada",
        city: "Toronto"
      }
    },
    {
      userName: "RavenHunter",
      name: "Michael Ravenwood",
      age: 55,
      location: {
        country: "UK",
        city: "London"
      }
    },
    {
      userName: "SilverWolf",
      name: "Luna Silverstone",
      age: 28,
      location: {
        country: "Australia",
        city: "Sydney"
      }
    }
  ])

  const addUser = (user) => {
    setUsers([...users, user])
  }

  return (
    <>
    <h1>React router - Användarlista</h1>
    <nav>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/newUser">Add new user</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage users={users}/>}/>
      <Route path="/newUser" element={<NewUserPage addUser={addUser}/>} />   
      <Route path="/profile/:id/" element={<ProfilePage/>} />
    </Routes>
    </>
  )
}

export default App