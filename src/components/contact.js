import { Container } from "react-bootstrap";

import {
    ImLocation
} from 'react-icons/im'

export default function Contact() {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
        >
            <div class="form">
                <div
                    class="contact-info"
                    className="d-flex flex-column justify-content-left align-items-center"
                    style={{
                        padding: "2.3rem 2.2rem",
                        background: "#533483",
                        color: "white"
                    }}
                >
                    <h3
                        class="title"
                    >
                        Let's get in touch
                    </h3>
                    <p
                        className="text-justify"
                    >
                        This is a sample project contributed by Dheeraj Sai Tiwari to GRIP, The Sparks Foundation internship program.
                        For any further queries please reach out either through social handle links or the contact form alongside.
                    </p>

                    <div class="info">
                        <div class="information">
                            <ImLocation size="20" />
                            <p>hyderabad</p>
                        </div>
                        <div class="information">
                            <p>dheerajsaitiwari1110@gmail.com</p>
                        </div>
                    </div>

                    
                </div>

                <div
                    class="contact-form"
                    style={{
                        background: "#E94560"
                    }}
                >
                    <span class="circle one"></span>
                    <span class="circle two"></span>

                    <form action="https://formsubmit.co/f649ea36f16c2a99cab4de83c1935db9" method="POST" autocomplete="off">
                        <h3 class="title">Contact us</h3>
                        <div class="input-container">
                            <input type="text" name="name" class="input" placeholder="Username" />
                        </div>
                        <div class="input-container">
                            <input type="email" name="email" class="input" />
                            <label for="">Email</label>
                            <span>Email</span>
                        </div>
                        <div class="input-container">
                            <input type="tel" name="phone" class="input" />
                            <label for="">Phone</label>
                            <span>Phone</span>
                        </div>
                        <div class="input-container textarea">
                            <textarea name="message" class="input"></textarea>
                            <label for="">Message</label>
                            <span>Message</span>
                        </div>
                        <input type="submit" value="Send" class="btn" />
                    </form>
                </div>
            </div>
        </Container>
    )
}