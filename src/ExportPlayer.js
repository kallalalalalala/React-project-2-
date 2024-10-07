import team from "./players";
export function Jouer() {
    return (
        <>
        {team.map((player, index) => (
            <>
            <h1 key={index}>{player.name}</h1>
            <p key={index}>{player.age}</p>
            <p key={index}>{player.jerseyNumber}</p>
            <p key={index}>{player.image}</p>
            <p key={index}>{player.nationality}</p>
            </>
        ))}
        </>
        
    );
}