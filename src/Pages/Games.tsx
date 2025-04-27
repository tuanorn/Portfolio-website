import { TextInput, Button } from "flowbite-react";
import { JSX, useState } from "react";
import Error404 from "./Error404";

function Games() {
    let [genresElem, setGenreElem] = useState<JSX.Element[]>([]);
    let genres = ["Action", "Puzzle", "Strategy"];
    genres.forEach((val, index) => {
        if (genresElem.length >= genres.length) {return;}
        genresElem.push(<Button className="p-0">{val}</Button>)
    })
    return <div className="grid grid-cols-4 gap-3 px-3 bg-white">
        <div className="search-section">
            <TextInput className="m-3" type="text" placeholder="Search a game..."/>
            <p className="text-lg">Genres</p>
            <div className="flex flex-wrap gap-3">
                {genresElem}
            </div>
        </div>
        <div className="games-section col-span-3">
            <iframe title="Game" src="/Web_apps/Ludus_Fortunae-utility_app/index.html" className="w-full aspect-square"/>
            
        </div>
    </div>
}
export default Games;