import { Link } from "react-router-dom";

function HomePage(props) {
    console.log(props);
    return(<>
        <h2>Home</h2>
        <ul>
            {props.users.map(
                (user,i) =><li key={i}><Link to="/profile" state={user}>{user.userName}</Link></li>)}
        </ul>
    </>)
}

export default HomePage