import { TextInput, Button } from "flowbite-react";
import { useState } from "react";
import { put } from "@vercel/blob";

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
        <div className="games-section col-span-2">
            [games menu]
        </div>
    </div>
}
export default Games;