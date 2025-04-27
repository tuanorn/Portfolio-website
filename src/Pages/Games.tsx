import { TextInput, Button, Card } from "flowbite-react";
import { JSX, useState } from "react";
import Error404 from "./Error404";
import pgStruct from "./PageStructure.json";
import { Link } from "react-router-dom";

function GamePg(props : any) {
    return <div className="pt-3 w-full h-full">
        <iframe title="game" className="px-3 w-full h-full aspect-auto" src={props.link}/>
    </div>
}

function Games() {
    let [genresElem, setGenreElem] = useState<JSX.Element[]>([]);
    let genres = ["Action", "Puzzle", "Strategy"];
    genres.forEach((val, index) => {
        if (genresElem.length >= genres.length) {return;}
        genresElem.push(<Button className="p-0">{val}</Button>)
    })

    let [gameLink, setGameLink] = useState<string>("");

    let gameDivs : JSX.Element[] = [];
    for (let index = 0; index < pgStruct.Games.length; index += 3) {
        let row : JSX.Element[] = []
        for (let i = 0; i < 3; i++) {
            if (index + i + 1 > pgStruct.Games.length) break;
            let game = pgStruct.Games[index + i];
            row.push(<Card className="w-full max-h-fit p-0" onClick={
                    () => setGameLink(game.HTML_link)
                } imgSrc={game.Thumbnail}>
                <p className="w-full text-center">{game.Name}</p>
            </Card>);
        }
        gameDivs.push(<div className="w-full grid grid-cols-3 gap-3">
            {row}
        </div>)
    }
    return (gameLink === "")? <div className="grid grid-cols-4 gap-3 px-3 bg-white">
        <div className="search-section">
            <TextInput className="m-3" type="text" placeholder="Search a game..."/>
            <p className="text-lg">Genres</p>
            <div className="flex flex-wrap gap-3">
                {genresElem}
            </div>
        </div>
        <div className="games-section col-span-3">
            {gameDivs}     
        </div>
    </div>
    : <GamePg link={gameLink}/>
}
export default Games;