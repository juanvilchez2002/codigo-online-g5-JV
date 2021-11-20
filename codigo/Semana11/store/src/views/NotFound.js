import img404 from "../assets/404.jpg";


export default function NotFound() {
    return (
        <div className="container pt-5">
            <img src={img404} style={{ width: "100%" }} />
        </div>
    );
}
