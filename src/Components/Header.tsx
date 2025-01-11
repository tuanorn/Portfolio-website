import { Button } from "flowbite-react";
import { JSX, useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Header(props: any) {
    let menuItems: string[] = ["home", "games", "projects"];
    let [buttonElem, setButtonElem] = useState<JSX.Element[]>([]);
    menuItems.forEach((val, index) => {
        if (buttonElem.length >= menuItems.length) {return;}
        buttonElem.push(<Button color="gray"><Link to={"/" + (val !== "home"? val : "")}>
            {val.at(0)?.toLocaleUpperCase() + val.slice(1, val.length)}
        </Link></Button>)
    });
    return <div className="w-full relative aspect-video" style={{minHeight: "200px"}}>
        <img className="w-full fixed top-0 left-0 -z-10 brightness-50 aspect-video" src={require(`../Images/${props.img}`)}/>
        <p className={`w-full text-center absolute top-1/2 ${props.title == "Personal Physics Project"? "text-gray-300" : ""}`}><span className="text-xs">Minh's</span><br/><span className="text-4xl">{props.title}</span></p>
        <Button.Group className="absolute bottom-0 right-0">
            {buttonElem}
            <Outlet/>
        </Button.Group>
    </div>
}
export default Header;