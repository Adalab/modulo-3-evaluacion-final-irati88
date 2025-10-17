import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="notfound-page">
      <h1>
        Dobby does not know of a character with that name, sir. Dobby is very
        sorry.
      </h1>
      <h2>
        <Link to="/">Home</Link>
      </h2>
    </main>
  );
};

export default NotFoundPage;
