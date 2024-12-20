import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Accordion, Button, Card, Table, Tabs, TabsRef, Timeline } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { text } from "stream/consumers";


function PPP(props: any) {
    const navigate = useNavigate();
    const tabsRef = useRef<TabsRef>(null);
    const [activeTab, setActiveTab] = useState(0);
    useEffect(() => {
        tabsRef.current?.setActiveTab(parseInt(props.tabIndex));
        console.log(props.tabIndex, activeTab, tabsRef.current);
    }, [props.tabIndex]);    
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
            "Desc": "Brainstorming of 5 topics"
        }, {
            "Date": "2024-10-04",
            "Desc": "Driving Questions"
        }, {
            "Date": "2024-10-22",
            "Desc": "PPP Slide"
        }],
        "Driving Questions": [{
            "First draft of DQs": "How may the shape of a plane affect its flight?",
            "Critique": "Too broad",
            "A.I. Revised DQs": "How does the wing shape (e.g., airfoil profile, aspect ratio) influence lift and drag in a plane?"
        }, {
            "First draft of DQs": "How may origami be used as prototypes?",
            "Critique": "More engineering-focused than physics-focused",
            "A.I. Revised DQs": "How can origami principles (e.g., folding patterns, structural integrity) be applied to design more efficient or lightweight aircraft components?"
        }, {
            "First draft of DQs": "How may an electric thruster be integrated into a plane for flight?",
            "Critique": "More engineering-focused than physics-focused",
            "A.I. Revised DQs": "What are the physical limitations and challenges of integrating electric thrusters into a conventional aircraft model, and how can these be addressed?"
        }, {
            "First draft of DQs": "How may the thrust of an electric thruster be improved while retaining its efficiency?",
            "Critique": "Strong but too broad",
            "A.I. Revised DQs": "How does the magnetic field strength, current, and thruster geometry affect the thrust and efficiency of an electric thruster?"
        }],
        "PPP Slide": {
            "imgName": "Physics_Personal_Project-Poster_Plan.jpg"
        },
        "Reflection": {
            "Title": "Reflection on Peer Feedback",
            "Content": "I had planned to test each of the 5 wings at different angles, recording their lift and drag coefficients and the Reynold’s number. However, the suggestion to limit the number of factors gave me a revelation to how I can make my research more thorough. Hence, I decided to study only, and extensively, about the Concorde’s wing and limiting the independent variable to only the angle of attack. With this, I can reduce the complexity of my project and provide a more presentable product."
        },
        "Plan of Action": {
            "Gantt Chart": "PPP_gantt_chart.png",
            "Plan of Action": "Within this week, a 3D model of the Concorde's wing will be produced, and research on analyzing CFD results will be completed. Next week will be dedicated to collecting Reynold's numbers and lift-to-drag ratios at different angles of attack; a 3D model must be produced or found before then. The physical model of the wing should be built right after the CFD data collection, giving a week and a half to gather materials and tools. Within the last week of November, a script will be prepared as a research paper with its implications researched."
        },
        "Secondary Research Mind Map": {
            "mindMapImg": "The_Physics_of_Wings-Mindmap-PPP.jpg"
        }
    }
    let menuItems: JSX.Element[] = [];
    let brainstormingItems: JSX.Element[] = pppPgStruct["Brainstorming"].map((item: any) => {
        return <Card className="h-fit mb-3">
            <h5>{item["Title"]}</h5>
            <img className="max-w-[50%] mx-auto" src={require(`../Images/${item["ImgSrc"]}`)}></img>
            <p>{item["Text"]}</p>
        </Card>
    })
    let makeDrivingQList = () => {
        let headerCells: JSX.Element[] = [];
        for (let key in pppPgStruct["Driving Questions"][0]) {
            headerCells.push(<Table.HeadCell className="bg-gray-300">{key}</Table.HeadCell>);
        }
        let rows: JSX.Element[] = [];
        for (let row of pppPgStruct["Driving Questions"]) {
            let tempArray: JSX.Element[] = [];
            for (let attr in row) {
                tempArray.push(<Table.Cell>{row[attr]}</Table.Cell>);
            }
            rows.push(<Table.Row className="border-b border-gray-300">{tempArray}</Table.Row>)
        }
        return <>
            <Table>
                <Table.Head>
                    {headerCells}
                </Table.Head>
                <Table.Body>
                    {rows}
                </Table.Body>
            </Table>
            <Card className="mt-3 mx-20">
                <p><b>Prompt:</b><br/>I have 4 driving questions listed below:</p>
                <ul>
                    <li>- How may the shape of a plane affect its flight?</li>
                    <li>- How may origami be used as prototypes?</li>
                    <li>- How may an electric thruster be integrated into a plane for flight?</li>
                    <li>- How may the thrust of an electric thruster be improved while retaining its efficiency?</li>
                </ul>
                <p>They are meant for a physics experiment. Provide criticism on their propriety, tell me how they can be improved, and create more appropriate questions.</p>
            </Card>
        </>
    }
    let timelineItems: JSX.Element[] = pppPgStruct["Progress"].map((item: any) => {
        return <Timeline.Item>
            <Timeline.Point/>
            <Timeline.Content>
                <Timeline.Time>{item["Date"]}</Timeline.Time>
                <Timeline.Title>{item["Desc"]}</Timeline.Title>
            </Timeline.Content>
        </Timeline.Item>
    });
    menuItems.push(<Tabs.Item active title="Brainstorming">
        {brainstormingItems}
    </Tabs.Item>);
    menuItems.push(<Tabs.Item active title="Driving Questions">
        {makeDrivingQList()}
    </Tabs.Item>);
    menuItems.push(<Tabs.Item active title="PPP Slide">
        <img className="w-fit" src={require(`../Images/${pppPgStruct["PPP Slide"]["imgName"]}`)}/>
    </Tabs.Item>);
    menuItems.push(<Tabs.Item active title="Progress">
        <p className="text-xl mb-3"><b>Timeline</b></p>
        <Timeline>
            {timelineItems}
        </Timeline>
    </Tabs.Item>);

    // fetch("src/Text_files/Reflection_on_peer_feedback.txt").then((res) => res.text())
    //     .then((text) => {reflection_content = text; console.log(text)});
    menuItems.push(<Tabs.Item active title="Reflection">
        <p className="text-xl mb-3"><b>{pppPgStruct["Reflection"]["Title"]}</b></p>
        <p>{pppPgStruct["Reflection"]["Content"]}</p>
    </Tabs.Item>);
    menuItems.push(<Tabs.Item active title="Plan of Action">
        <p className="text-xl mb-3"><b>Gantt Chart:</b></p>
        <img src={require(`../Images/${pppPgStruct["Plan of Action"]["Gantt Chart"]}`)}/>
        <p className="text-xl mb-3"><b>Plan of Action:</b></p>
        <p>{pppPgStruct["Plan of Action"]["Plan of Action"]}</p>
    </Tabs.Item>);
    menuItems.push(<Tabs.Item active title="Secondary Research Mind Map">
        <img src={require(`../Images/${pppPgStruct["Secondary Research Mind Map"]["mindMapImg"]}`)}/>
    </Tabs.Item>);



    return <>
        <Tabs className="gap-1" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
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