import {} from "flowbite-react";

function Home() {
    return <div className="w-full mx-3 flex gap-3">
        <div className="blog w-full bg-black">
            <p className="text-2xl"><b>About me</b></p>
            <hr className="mx-auto" style={{width: "80%", height: "2px",
                marginTop: "0.75rem", marginBottom: "0.75rem"}}/>
            <p>[text]</p>
        </div>
        <div>
            [ads]
        </div>
    </div>
}
export default Home;