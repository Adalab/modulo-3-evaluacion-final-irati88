const getCharacters = () => {

  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
        const memberData = data.map((member) => {
    return {
        picture: member.image,
        name: member.name,
        species: member.species,
    }
        })
     return memberData;
    });
};

export default getCharacters;
