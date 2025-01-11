import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Accordion, Button, Card, List, Table, Tabs, TabsRef, Timeline } from "flowbite-react";
import { JSX, useEffect, useRef, useState } from "react";
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
            "img1": "Physics_Personal_Project-Poster_Plan.jpg",
            "img2": "Physics_Personal_Project-Poster_Plan-updated.jpg"
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
        },
        "Primary Research": {
            "spreadsheetLink": "https://1drv.ms/x/c/b5933cfa18aa2826/EVwOPDXPHZdDh7R5CvxrlT4Bb_1z1wJ_Nz-AefWJkHK-6g",
            "CFD_screenshots": "NACA_4415_CFD_Screenshots.png",
            "table": "NACA_4415_CFD_Results_Summary.png",
            "mesh_img": "Mesh.png",
            "CFD_inputs_img": "CFD_inputs.png",
            "drag_coeff_img": "Drag_coeff_graph.png",
            "lift_coeff_img": "Lift_coeff_graph.png",
            "moment_coeff_img": "Moment_coeff_graph.png"
        },
        "Final Product": {
            "img1": "Wind Tunnel - PPP - SPH4U0.jpg",
            "img2": "Airfoil - PPP - SPH4U0.jpg",
            "img3": "Trifold - PPP - SPH4U0.jpg"
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
    // let timelineItems: JSX.Element[] = pppPgStruct["Progress"].map((item: any) => {
    //     return <Timeline.Item>
    //         <Timeline.Point/>
    //         <Timeline.Content>
    //             <Timeline.Time>{item["Date"]}</Timeline.Time>
    //             <Timeline.Title>{item["Desc"]}</Timeline.Title>
    //         </Timeline.Content>
    //     </Timeline.Item>
    // });
    
    menuItems.push(<Tabs.Item active title="Brainstorming">
        {brainstormingItems}
    </Tabs.Item>);
    menuItems.push(<Tabs.Item active title="Driving Questions">
        {makeDrivingQList()}
    </Tabs.Item>);
    menuItems.push(<Tabs.Item active title="PPP Slide">
        <img className="w-fit" src={require(`../Images/${pppPgStruct["PPP Slide"]["img2"]}`)}/>
        <p><br/><br/>Old version:</p>
        <img className="w-fit" src={require(`../Images/${pppPgStruct["PPP Slide"]["img1"]}`)}/>
    </Tabs.Item>);
    // menuItems.push(<Tabs.Item active title="Progress">
    //     <p className="text-xl mb-3"><b>Timeline</b></p>
    //     <Timeline>
    //         {timelineItems}
    //     </Timeline>
    // </Tabs.Item>);

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
    menuItems.push(<Tabs.Item active title="Primary Research">
        <p className="text-lg w-full mt-6">Question:</p>
        <p className="text-center w-full">How does angle of attack affect the lift and drag coefficients?</p>
        <p className="text-lg mt-6">Hypothesis:</p>
        <p className="text-center w-full">The coefficients of drag and lift would increase as the angle of attack increases.</p>
        <p className="text-lg mt-6">Methodology:</p>
        <List className="text-black">
            <List.Item>
                Created a 2D mesh that is punctured with the shape of the NACA 4415 and uses a semi-circle inlet, to change the angle of attack without changing the mesh.
                The mesh has approximately 7,500,000 cells with a 1-cell depth for OpenFOAM to consider it a 2D mesh.
                <img className="w-1/2 justify-self-center" src={require(`../Images/${pppPgStruct["Primary Research"]["mesh_img"]}`)}></img>
            </List.Item>
            <List.Item>
                BaramFlow - a GUI for OpenFOAM - was used for the simulation, with the following inputs:
                <img className="w-1/2 justify-self-center" src={require(`../Images/${pppPgStruct["Primary Research"]["CFD_inputs_img"]}`)}></img>
            </List.Item>
            <List.Item>An experiment was not conducted for a physical wind tunnel due to inadequate budget and equipment.
                Factors such as pressure and temperature were uncontrollable, disallowing the application of dynamically similar flows.</List.Item>
        </List>
        <p className="text-lg mt-6">Results:</p>
        <a className="text-blue-400 underline" href="https://1drv.ms/x/c/b5933cfa18aa2826/EVwOPDXPHZdDh7R5CvxrlT4Bb_1z1wJ_Nz-AefWJkHK-6g">Link to data</a>
        <img className="w-3/4 justify-self-center mb-3" src={require(`../Images/${pppPgStruct["Primary Research"]["CFD_screenshots"]}`)}/>
        <img src={require(`../Images/${pppPgStruct["Primary Research"]["table"]}`)}/>
        <div className="flex my-3">
            <img className="w-1/3" src={require(`../Images/${pppPgStruct["Primary Research"]["drag_coeff_img"]}`)}/>
            <img className="w-1/3" src={require(`../Images/${pppPgStruct["Primary Research"]["lift_coeff_img"]}`)}/>
            <img className="w-1/3" src={require(`../Images/${pppPgStruct["Primary Research"]["moment_coeff_img"]}`)}/>
        </div>
        <p>The results conforms to the hypothesis. As the angle of attack increases, the curvature of the airfoil increases relative to the flow;
            this would increase the speed on top of the airfoil, creating a higher pressure difference (according to the Benoulli's principle) and hence generate more lift.
            Since dynamic pressure and the planform area do not change, the coefficient of lift increases. With the amplified effects of the normal and axial forces,
            drag also increases, giving a higher coefficient of drag.<br/>
            Although the simulation did not converge, the fluctuations of lift and drag forces were below 0.5, satiable for the experiment's purpose.</p>
        <p className="text-lg mt-6">Conclusion</p>
        <p>This experiment formed the basis for calculating the performance of the NACA 4415 in different situations.
            With the coefficients as constants at a given angle of attack, the required speeds can be derived for environments of different fluid densities.
            In addition, 2D simulations prove handy in their simplicity and expandable nature (such as through using multiple different airfoils and integrating the individual 2D CFD results).
            Hence, the experiment's results may contribute to future research.</p>
        <p className="text-lg mt-6">Reflection</p>
        <p>Throughout the project, I encountered several hurdles, such as not knowing how to operate OpenFOAM, struggling to understand an aerodynamic concept, and finding myself oblivious in my plans.
            I hence endeavored to seek alternatives, or at least facilitators, for the process. Owing to the attempt, I was able to discover BaramCFD, understand the fundamentals of aerodynamics (by reading a chapter of a textbook),
            and readjust my plan to match my capabilities (by presenting results on the NACA 4415 airfoil instead of the Concorde's wing).</p>
    </Tabs.Item>)
    menuItems.push(<Tabs.Item className="grid" active title="Final Product">
        <p>Wind tunnel comprises:</p>
        <List className="text-black">
            <List.Item>A fan with a variable speed controller</List.Item>
            <List.Item>A flow straightener</List.Item>
        </List>
        <img className="w-1/2 justify-self-center mb-6" src={require(`../Images/${pppPgStruct["Final Product"]["img1"]}`)}/>
        <p>Airfoil and pivot:</p>
        <img className="w-1/2 justify-self-center mb-6" src={require(`../Images/${pppPgStruct["Final Product"]["img2"]}`)}/>
        <p>Trifold:<br/><a className="text-blue-400 underline text-base" href="https://www.canva.com/design/DAGbaPDQfHY/3UPLxoKeT4-hmLst3mIxUw/view?utm_content=DAGbaPDQfHY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2bf0324f6f">Link to Canva</a></p>
        <img className="w-1/2 justify-self-center mb-6" src={require(`../Images/${pppPgStruct["Final Product"]["img3"]}`)}/>
    </Tabs.Item>)


    return <>
        <Tabs className="gap-1" aria-label="Full width tabs" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
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
        <Accordion >
            {projectElem}
        </Accordion>
    </>
}
export {Projects, PPP};