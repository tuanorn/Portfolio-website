import { Link } from "react-router-dom";
import { Accordion, Button, Card, Tabs, Timeline } from "flowbite-react";
import { useState } from "react";

function PPP() {
    let pppPgStruct: {[key: string]: any} = {
        "Brainstorming": [{
            "Title": "Airplanes",
            "ImgSrc": "Bell_X-1.jpg",
            "Text": "Before entering grade one, I was already fiddling with the paper airplanes my grandfather taught me to fold. It is this course of mindless exploration that stemmed my intellectual curiosity about how a plane can be optimized."
        }, {
            "Title": "Electric Propulsion",
            "ImgSrc": "Electric_propulsion.webp",
            "Text": "Moving towards the modern age, computer hardware evolves to have no moving parts. Hence, I sought similar progress in aeronautics and found electric propulsions. In 2018, MIT launched its first electro-aerodynamics airplane, which I aspire to replicate and improve, given the now massively available info on the topic."
        }, {
            "Title": "Energy Efficiency",
            "ImgSrc": "Leaf_in_bulb.png",
            "Text": "With global warming swirling its hurricanes around the world, I aspire to advance or at least encourage the movement toward using green energy."
        }, {
            "Title": "Programming",
            "ImgSrc": "Programming.jpg",
            "Text": "Offered a world of unlimited possibility, a 10-year-old child cannot help but delve into it and realize his imagination. I was given such opportunities and have maintained the endeavors to create a commercial game of my own ever since. Now, I also seek to diversify my skills into lower levels of programming."
        }, {
            "Title": "Printed Circuit Boards",
            "ImgSrc": "PCB.jpg",
            "Text": "It is fascinating how a piece of silicon can exert so much wonder, from simple robots to full-blown ultra graphics. Thus, I am intrigued by exploring such a powerful device."
        }],
        "Progress": [{
            "Date": "2024-09-27",
            "Title": "Brainstorming",
            "Desc": "5 topics to be amalgamated were presented"
        }]
    }
    let menuItems: JSX.Element[] = [];
    let brainstormingItems: JSX.Element[] = pppPgStruct["Brainstorming"].map((item: any) => {
        return <Card className="h-fit mb-3">
            <h5>{item["Title"]}</h5>
            <img className="max-w-[50%] mx-auto" src={require(`../Images/${item["ImgSrc"]}`)}></img>
            <p>{item["Text"]}</p>
        </Card>
    })
    menuItems.push(<Tabs.Item active title="Brainstorming">
        {brainstormingItems} 
    </Tabs.Item>)
    let timelineItems: JSX.Element[] = pppPgStruct["Progress"].map((item: any) => {
        return <Timeline.Item>
            <Timeline.Point/>
            <Timeline.Content>
                <Timeline.Time>{item["Date"]}</Timeline.Time>
                <Timeline.Title>{item["Title"]}</Timeline.Title>
                <Timeline.Body>{item["Desc"]}</Timeline.Body>
            </Timeline.Content>
        </Timeline.Item>
    });
    menuItems.push(<Tabs.Item active title="Progress">
        <p className="text-xl mb-3"><b>Timeline</b></p>
        <Timeline>
            {timelineItems}
        </Timeline>
    </Tabs.Item>)
    return <>
        <Tabs>
            {menuItems}
        </Tabs>
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