import { useParams, Link } from "react-router-dom";
import ls from "../services/localStorage";
import CharacterDetail from "../components/CharacterDetail";

const DetailPage = () => {
  const { id } = useParams();
  const characters = ls.get("characters", []);
  const character = characters.find(
    (character) => character.id === Number(id) || String(character.id) === id
  );

  return (
    <main className="detail-page">
      {character ? (
        <>
          <CharacterDetail character={character} />
          <Link className="back-link" to="/">
            ← Back to list
          </Link>
        </>
      ) : (
        <>
          <p>Character not found, sir</p>
          <Link className="back-link" to="/">
            ← Back
          </Link>
        </>
      )}
    </main>
  );
};

export default DetailPage;
