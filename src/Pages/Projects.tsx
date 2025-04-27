import { Link } from "react-router-dom";
import { Accordion } from "flowbite-react";
import { JSX } from "react";
import PPP from "./Projects/PPP";
import GHP from "./Projects/GHP";
import pageStruct from "./PageStructure.json";



function Projects() {
    let projectPgStruct: {[key: string]: any} = pageStruct.Projects;
    let projectElem: JSX.Element[] = [];
    for (let attr in projectPgStruct) {
        let contentElem: JSX.Element[] = [];
        for (let listItem of projectPgStruct[attr]) {
            contentElem.push(<p className="w-full border-b border-b-gray-500 py-2"><Link to={listItem["Link"]}>{listItem["Name"]}</Link></p>);
            
        }
        projectElem.push(<Accordion.Panel>
            <Accordion.Title className="bg-gray-100 hover:bg-gray-200 text-black">{attr}</Accordion.Title>
            <Accordion.Content className="bg-white">
                {contentElem}
            </Accordion.Content>
        </Accordion.Panel>);
    }
    return <>
        <Accordion >
            {projectElem}
        </Accordion>
    </>
}
export {Projects, PPP, GHP};