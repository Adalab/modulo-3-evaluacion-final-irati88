const getCharacters = () => {

    return fetch("https://hp-api.onrender.com/api/characters")
        .then((response) => response.json())
        .then((data) => {
            const memberData = data.map((member) => {
                return {
                    id: member.id,
                    picture: member.image,
                    name: member.name,
                    house: member.house,
                    species: member.species,
                    gender: member.gender,
                    alive: member.alive,
                }
            })
            return memberData;
        });
};

export default getCharacters;

