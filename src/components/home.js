import {
    Button, 
    Col,
    Container, 
    Row 
} from "react-bootstrap";

import kids from "../assets/img/img.gif"
import "../assets/css/home.css";


export default function Home() {
    return(
        <Container
            className="d-flex justify-content-between"
            style={{
                minHeight:"80%",
                color: "white",
            }}
        >
            <Row xs={1} md={2} lg={2}>
                <Col
                    className="m-10 d-flex flex-column justify-content-center align-items-center "
                >
                    <h1
                        className="gradient-text"
                        style={{
                            fontSize:"60px",
                            fontWeight:"800"
                        }}
                    >
                        Donate to make a difference.
                    </h1>
                    <h2
                        className="gradient-text"
                        style={{
                            fontWeight:"700"
                        }}
                    >
                        Give hope, save lives.
                    </h2>
                    <h4
                        style={{
                            color:"#212529",
                        }} 
                    >
                        Giving is not just about making a donation, it's about making a difference
                    </h4>
                    <a
                        href="https://rzp.io/l/jgRPSJqS"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button
                            className="donate-button btn-6"
                            style={{
                                color:"white",
                                marginTop:"20px",
                                fontSize:"20px",
                                fontWeight:"600",
                                border:"none"
                            }} 
                        >
                            Donate
                        </Button>
                    </a>
                </Col>
                <Col
                    className="d-flex justify-content-center align-items-center"
                    md={6}
                    lg={6}
                    // md={{span: 3}}
                    // md={{offset:0}}
                >
                    <img
                        height="80%"
                        // height={{sm: "50%", md:"80%"}}
                        width="90%"
                        src={kids}
                        alt="Kids_Image"
                        style={{
                            borderRadius:"100%",
                            width: "100%",
                            boxShadow: "5px 5px 10px 0px black"
                        }}
                    />
                </Col>
            </Row>
        </Container>
    )
};
