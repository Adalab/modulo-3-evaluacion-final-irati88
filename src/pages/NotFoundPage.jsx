import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <h1>Dobby does not know of a character with that name, sir. Dobby is very sorry.</h1>
            <h2>
                <Link to="/"></Link>
                Home</h2>
        </>
    )
}

export default NotFoundPage;