import { Link } from "react-router-dom";
import { Accordion, Button, Card, Timeline } from "flowbite-react";
import { useState } from "react";

function PPP() {
    let pppPgStruct: {[key: string]: any} = {
        "Brainstorming": [{
            "Title": "Airplanes",
            "ImgSrc": "Bell_X-1.jpg",
            "Text": "Before entering grade one, I was already fiddling with the paper airplanes that my grandfather taught me to fold. It's this course of mindless exploration that stemmed my intellectual curiosity of how a plane may be optimized."
        }, {
            "Title": "Electric Propulsion",
            "ImgSrc": "Electric_propulsion.webp",
            "Text": "Moving towards the modern age, computer hardwares evolve to have no moving parts. Hence, I sought for a similar progess in aeronautics and found electric propulsions. In 2018, MIT launched its first electro-aerodynamics airplane, which I aspire to replicate and improve, given the now massively available info on the topic."
        }, {
            "Title": "Energy Efficiency",
            "ImgSrc": "Leaf_in_bulb.png",
            "Text": "With global warming swirling its hurricanes around the world, I aspire to advance or at least encourage the movement toward using green energy."
        }, {
            "Title": "Programming",
            "ImgSrc": "Programming.jpg",
            "Text": "Offered a world of unlimited possibility, a 10-year-old child cannot help but delve into it and realize his imagination. I was given such opportunities and maintained the endeavors to create a commercial game of my own ever since. Now I also seek to diversify my skills into lower levels of programming"
        }, {
            "Title": "Printer Circuit Boards",
            "ImgSrc": "PCB.jpg",
            "Text": "It is intricate how a piece of silicon can exert so much of a wonder, from simple robots to full-blown ultra graphics. Thus, I am intrigue in exploring such a powerful device."
        }]
    }
    let brainstormingItems: JSX.Element[] = pppPgStruct["Brainstorming"].map((item: any) => {
        return <Card className="h-fit mb-3">
            <h5>{item["Title"]}</h5>
            <img className="max-w-[50%] mx-auto" src={require(`../Images/${item["ImgSrc"]}`)}></img>
            <p>{item["Text"]}</p>
        </Card>
    })
    let timelineItems: JSX.Element[] = [];
    return <>
        <div className="w-full">
            <p className="text-lg mb-5"><b>Brainstorming</b></p>
            {brainstormingItems}
        </div>
        <Timeline>
            
        </Timeline>
    </>
}
function Projects() {
    let projectPgStruct: {[key: string]: any} = {
        "Academic Projects": [{
            "Name": "Personal Physics Project (PPP)",
            "Link": "/projects/PPP"
        }],
        "Community Projects": []
    }
    let projectElem: JSX.Element[] = [];
    for (let attr in projectPgStruct) {
        let contentElem: JSX.Element[] = [];
        for (let listItem of projectPgStruct[attr]) {
            contentElem.push(<Link to={listItem["Link"]}>{listItem["Name"]}</Link>);
        }
        projectElem.push(<Accordion.Panel>
            <Accordion.Title className="bg-gray-100 hover:bg-gray-200 text-black">{attr}</Accordion.Title>
            <Accordion.Content className="bg-white">
                {contentElem}
            </Accordion.Content>
        </Accordion.Panel>);
    }
    return <>
        <Accordion>
            {projectElem}
        </Accordion>
    </>
}
export {Projects, PPP};