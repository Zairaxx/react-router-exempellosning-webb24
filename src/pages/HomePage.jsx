function HomePage(props) {
    console.log(props);
    return(<>
        <h2>Home</h2>
        <ul>
            {props.users.map((user,i) => <li key={i}>{user.userName}</li>)}
        </ul>
    </>)
}

export default HomePage