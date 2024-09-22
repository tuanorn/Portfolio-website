import {Button, ButtonGroup} from "flowbite-react";
import {Outlet, Link} from "react-router-dom";

const Header: React.FC = () => {
    return <div className="w-full bg-cyan-400 z-[-1] min-h-[200px]">
        <div className="w-full h-fit flex items-center justify-center relative">
            <img className="w-full h-full absolute top-0 left-0" src={require("../Images/Pong_preview.png")}/>
            <p>[Brand]</p>
        </div>
        <ButtonGroup className="w-full">
            <Button><Link to="/">Home</Link></Button>
            <Button><Link to="/games">Games</Link></Button>
            <Button><Link to="/projects">Projects</Link></Button>
            <Outlet/>
        </ButtonGroup>
    </div>
}
export default Header;