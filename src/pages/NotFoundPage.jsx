import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="notfound-page">
      <h1>
        Begone, for there is nothing here for you!
      </h1>
      <h2>
        <Link to="/">Home</Link>
      </h2>
    </main>
  );
};

export default NotFoundPage;
