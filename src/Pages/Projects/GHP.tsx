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
                        <p className="text-lg"><b>Topic:</b> {ghpPgStruct[tab]["Topic"]}</p>
                        <p>Research doc:</p>
                        <iframe className="w-full px-3 min-h-[500px]" src={ghpPgStruct[tab]["Doc_link"]}/>
                    </div>
                break;
            case 2:
                let temp2: JSX.Element[] = [];
                for (let categs in ghpPgStruct[tab]) {
                    let imgs: JSX.Element[] = [];
                    if (Array.isArray(ghpPgStruct[tab][categs])) {
                        for (let imgSrc of ghpPgStruct[tab][categs]) {
                            imgs.push(<div className="w-1/4 mx-2 inline-block">
                                <img className="h-[200px] mx-auto" src={`/Images/GHP_SCH4U/${imgSrc}`}/>
                                <p>{(imgSrc as string).slice(0, -15)}</p>
                            </div>)
                        }
                    }
                    temp2.push(<div className="w-full">
                        <p className="text-lg">{categs}:</p>
                        {(imgs.length > 0)? <div className="text-center">{imgs}</div>
                        : <div className="mx-auto w-1/2">
                            <img className="w-full" src={`/Images/GHP_SCH4U/${ghpPgStruct[tab][categs]}`}/>
                            <p className="w-full text-center">From left to right: Sponge, circuit, and bimetallic strip</p>
                        </div>}                        
                    </div>)
                }
                tabContent = <div className="w-full">{temp2}</div>
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