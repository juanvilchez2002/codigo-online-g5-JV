import { Carousel } from "react-bootstrap"
import header1 from "../assets/header1.jpg"
import header2 from "../assets/header2.jpg"
import header3 from "../assets/header3.jpg"

export default function HeaderCarouse() {
    return (
        <header>
            <Carousel style={{
                maxHeight: "500px",
                overflow:"hidden"
            }}>
                <Carousel.Item>
                    <img 
                        src={header1} 
                        alt="header1" 
                        className="d-block w-100" 
                        style={{objectFit:"over", height:"100%", transform:"translateY(-150px"}} 
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        src={header2} 
                        alt="header2" 
                        className="d-block w-100" 
                        style={{objectFit:"over", height:"100%", transform:"translateY(-600px"}} 
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        src={header3} 
                        alt="header3" 
                        className="d-block w-100" 
                        style={{objectFit:"over", height:"100%", transform:"translateY(-700px"}} 
                    />
                </Carousel.Item>
            </Carousel>
        </header>
    )
}
