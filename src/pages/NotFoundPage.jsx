import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <h1>Oops! - Sorry, Can't Find The Page</h1>
            <h2>
                <Link to="/"></Link>
                Home</h2>
        </>
    )
}

export default NotFoundPage;