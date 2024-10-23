function Error404() {
    return <div className="z-50 w-full h-full absolute text-center bg-white">
        <p>404 Error: The webpage "{window.location.href}" is not found</p>
    </div>
}
export default Error404;
