import { Card, Tabs, TabsRef } from "flowbite-react";
import pageStruct from "../PageStructure.json";
import { JSX, useEffect, useRef, useState } from "react";

function GHP(props: any) {
    const tabsRef = useRef<TabsRef>(null);
    const [activeTab, setActiveTab] = useState(0);
    useEffect(() => {
        tabsRef.current?.setActiveTab(parseInt(props.tabIndex));
    }, [props.tabIndex]);

    let ghpPgStruct: {[key: string]: any} = pageStruct.GHP;
    let tabs: JSX.Element[] = [];
    let index = 0;
    for (let tab in ghpPgStruct) {
        let tabContent: JSX.Element = <></>;
        switch (index) {
            case 0:
                let temp: JSX.Element[] = [];
                for (let i = 0; i < 2; i++) {
                    temp.push(<Card className="mt-3 w-full">
                            <p className="text-lg"><b>{"Topic " + (i+1) + ": "}</b>{ghpPgStruct[tab]["Topic " + (i+1)]}</p>
                            <p>{"DQ " + (i+1) + ": " + ghpPgStruct[tab]["DQ " + (i+1)]}</p>
                            <p>Units covered: {ghpPgStruct[tab]["Units covered[" + i + "]"]}</p>
                        </Card>)
                } 
                tabContent = <div className="grid grid-cols-2 w-full gap-6">{temp}</div>;
                break;
            case 1:
                tabContent = <div className="w-full">
                        <p className="text-lg"><b>Topic:</b> Active Origami</p>
                        <p>Research doc:</p>
                        <iframe className="w-full px-3 min-h-[500px]" src={ghpPgStruct[tab]["Doc_link"]}/>
                    </div>
        }
        tabs.push(<Tabs.Item title={tab}>
                {tabContent}
            </Tabs.Item>)
        index++;
    }
    
    return <>
        <Tabs className="gap-1" aria-label="Full width tabs" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
            {tabs}
        </Tabs>
    </>
}
export default GHP;