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
            case 1: case 2: case 3:
                let temp2: JSX.Element[] = [];
                temp2.push(<p className="text-lg w-full text-center mb-6 font-bold">{ghpPgStruct[tab]["Title"]}</p>)
                let content = ghpPgStruct[tab]["Content"] as string;
                let strToAdd = "";
                let currStr = content;
                let splitIndex = 0;
                let splitCount = 0;
                while (splitIndex >= 0 && splitCount <= 5) {
                    splitCount++;
                    splitIndex = (currStr.indexOf("\n") == -1)? currStr.indexOf("[img]") : currStr.indexOf("\n");
                    strToAdd = (splitIndex >= 0)? currStr.substring(0, splitIndex) : currStr;
                    temp2.push(<p className="indent-11 px-10 mb-3">{strToAdd}</p>)

                    if (currStr.indexOf("[img]") >= 0 && currStr.indexOf("[img]") == splitIndex) {
                        for (let categs in ghpPgStruct[tab]) {
                            if (categs == "Title" || categs == "Content") continue;
                            let imgs: JSX.Element[] = [];
                            if (Array.isArray(ghpPgStruct[tab][categs])) {
                                for (let imgSrc of ghpPgStruct[tab][categs]) {
                                    imgs.push(<div className="w-1/4 mx-2 inline-block">
                                        <img className="h-[200px] mx-auto" src={`/Images/GHP_SCH4U/${imgSrc}`}/>
                                        <p>{(imgSrc as string).slice(0, -15)}</p>
                                    </div>)
                                }
                            }
                            temp2.push(<div className="w-full mb-6">
                                {(imgs.length > 0)? <div className="text-center">{imgs}</div>
                                : <div className="mx-auto w-1/3 mb-6">
                                    <img className="w-full" src={`/Images/GHP_SCH4U/${ghpPgStruct[tab][categs]}`}/>
                                    <p className="w-full text-center">From left to right: Sponge, circuit, and bimetallic strip</p>
                                </div>}                        
                            </div>)
                        }
                    }
                    currStr = currStr.substring(splitIndex + ((currStr.indexOf("[img]") >= 0 && currStr.indexOf("[img]") == splitIndex)? 5 : 1));
                }
                tabContent = <div className="w-full">{temp2}</div>
                break;
            case 4:
                tabContent = <div className="w-full">
                        <p className="text-lg mb-6"><b>Topic:</b> {ghpPgStruct[tab]["Topic"]}</p>
                        <iframe className="w-full px-3 min-h-[800px]" src={ghpPgStruct[tab]["Doc_link"]}/>
                    </div>
                break;
            case 5:
                tabContent = <div className="text-center">
                    <iframe loading="lazy" className="w-full aspect-video"
                        src={ghpPgStruct[tab]["Link"]} allow="fullscreen">
                    </iframe>
                    <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGp6ncGD9o&#x2F;paQd7-ljqcPPd0GvlJkxLQ&#x2F;view?utm_content=DAGp6ncGD9o&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noreferrer">SCH4U Summative Slides</a>
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