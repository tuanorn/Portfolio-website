import { TabsRef, Card, Table, Tabs, List } from "flowbite-react";
import { useRef, useState, useEffect, JSX } from "react";
import pageStruct from "../PageStructure.json";

function PPP(props: any) {
    const tabsRef = useRef<TabsRef>(null);
    const [activeTab, setActiveTab] = useState(0);
    useEffect(() => {
        tabsRef.current?.setActiveTab(parseInt(props.tabIndex));
    }, [props.tabIndex]);    
    let pppPgStruct: {[key: string]: any} = pageStruct.PPP;
    let menuItems: JSX.Element[] = [];
    let brainstormingItems: JSX.Element[] = pppPgStruct["Brainstorming"].map((item: any, index: number) => {
        return <Card className="h-fit mb-3">
            <h5>{item["Title"]}</h5>
            <img className="max-w-[50%] mx-auto" src={`/Images/PPP_SPH4U/${item["ImgSrc"]}`} alt="not found"></img>
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
        <img className="w-fit" src={`/Images/PPP_SPH4U/${pppPgStruct["PPP Slide"]["img2"]}`} alt="not found"/>
        <p><br/><br/>Old version:</p>
        <img className="w-fit" src={`/Images/PPP_SPH4U/${pppPgStruct["PPP Slide"]["img1"]}`} alt="not found"/>
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
        <img src={`/Images/PPP_SPH4U/${pppPgStruct["Plan of Action"]["Gantt Chart"]}`} alt="not found"/>
        <p className="text-xl mb-3"><b>Plan of Action:</b></p>
        <p>{pppPgStruct["Plan of Action"]["Plan of Action"]}</p>
    </Tabs.Item>);
    menuItems.push(<Tabs.Item active title="Secondary Research Mind Map">
        <img src={`/Images/PPP_SPH4U/${pppPgStruct["Secondary Research Mind Map"]["mindMapImg"]}`} alt="not found"/>
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
                <img className="w-1/2 justify-self-center" src={`/Images/PPP_SPH4U/${pppPgStruct["Primary Research"]["mesh_img"]}`} alt="not found"></img>
            </List.Item>
            <List.Item>
                BaramFlow - a GUI for OpenFOAM - was used for the simulation, with the following inputs:
                <img className="w-1/2 justify-self-center" src={`/Images/PPP_SPH4U/${pppPgStruct["Primary Research"]["CFD_inputs_img"]}`} alt="not found"></img>
            </List.Item>
            <List.Item>An experiment was not conducted for a physical wind tunnel due to inadequate budget and equipment.
                Factors such as pressure and temperature were uncontrollable, disallowing the application of dynamically similar flows.</List.Item>
        </List>
        <p className="text-lg mt-6">Results:</p>
        <a className="text-blue-400 underline" href="https://1drv.ms/x/c/b5933cfa18aa2826/EVwOPDXPHZdDh7R5CvxrlT4Bb_1z1wJ_Nz-AefWJkHK-6g">Link to data</a>
        <img className="w-3/4 justify-self-center mb-3" src={`/Images/PPP_SPH4U/${pppPgStruct["Primary Research"]["CFD_screenshots"]}`}/>
        <img src={`/Images/PPP_SPH4U/${pppPgStruct["Primary Research"]["table"]}`}/>
        <div className="flex my-3">
            <img className="w-1/3" src={`/Images/PPP_SPH4U/${pppPgStruct["Primary Research"]["drag_coeff_img"]}`} alt="not found"/>
            <img className="w-1/3" src={`/Images/PPP_SPH4U/${pppPgStruct["Primary Research"]["lift_coeff_img"]}`} alt="not found"/>
            <img className="w-1/3" src={`/Images/PPP_SPH4U/${pppPgStruct["Primary Research"]["moment_coeff_img"]}`} alt="not found"/>
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
        <img className="w-1/2 justify-self-center mb-6" src={`/Images/PPP_SPH4U/${pppPgStruct["Final Product"]["img1"]}`} alt="not found"/>
        <p>Airfoil and pivot:</p>
        <img className="w-1/2 justify-self-center mb-6" src={`/Images/PPP_SPH4U/${pppPgStruct["Final Product"]["img2"]}`} alt="not found"/>
        <p>Trifold:<br/><a className="text-blue-400 underline text-base" href="https://www.canva.com/design/DAGbaPDQfHY/3UPLxoKeT4-hmLst3mIxUw/view?utm_content=DAGbaPDQfHY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2bf0324f6f">Link to Canva</a></p>
        <img className="w-1/2 justify-self-center mb-6" src={`/Images/PPP_SPH4U/${pppPgStruct["Final Product"]["img3"]}`} alt="not found"/>
    </Tabs.Item>)


    return <>
        <Tabs className="gap-1" aria-label="Full width tabs" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
            {menuItems}
        </Tabs>
    </>
}
export default PPP;