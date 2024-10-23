import {} from "flowbite-react";

function Home() {
    return <div className="w-full px-3 bg-white">
        <div className="blog w-full">
            <p className="text-2xl"><b>[Title]</b></p>
            <div className="py-3 block"><hr className="mx-auto" style={{width: "80%", height: "2px"}}/></div>
            <p>[text]</p>
        </div>
    </div>
}
export default Home;