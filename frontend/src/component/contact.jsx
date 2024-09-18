import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Footer from "./userfooter";
// import Header from "./header";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phno, setPhno] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    // const [username1, setUsername] = useState('');

    const cus = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/cus", {
            name: name,
            email: email,
            phno: phno,
            subject: subject,
            message: message
        })
            .then(() => {
                alert('Data passed successfully');
            })
            .catch((error) => {
                console.error('Error passing data:', error);
                alert('Data passing failed');
            });
    };

    return (
        <>
        {/* <Header username={username1} setUsername={setUsername}/> */}
            <Container fluid maxWidth="xl">
                <Row className="py-5">
                    <Col xs={12}>
                        <div className="text-center">
                            <h2 className="mt-2 mb-2" style={{ lineHeight: 3, color: "black" }}>
                                Contact <span style={{ color: "#59B2F4", fontWeight: "bold" }}>Me</span>
                            </h2>
                        </div>
                    </Col>

                    <Col lg={6} md={12} xs={12}>
                        <Card className="m-3">
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4242.608692279499!2d78.74488024491103!3d10.311154910738033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b007c0aeaec6f69%3A0x4bd279452465829b!2sMamarathupatti%2C%20Tamil%20Nadu%20622422!5e1!3m2!1sen!2sin!4v1724382841308!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            />
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card className="m-3">
                            <Card.Body>
                                <form onSubmit={cus}>
                                    <Row>
                                        <Col lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Enter Your Name</Form.Label>
                                                <Form.Control type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Enter Your Email Id</Form.Label>
                                                <Form.Control type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Enter Your Mobile Number</Form.Label>
                                                <Form.Control type="text" placeholder="Your Mobile Number" onChange={(e) => setPhno(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Enter the Subject</Form.Label>
                                                <Form.Control type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Enter Your Message Here...</Form.Label>
                                        <Form.Control as="textarea" placeholder="Leave a message" style={{ height: "100px" }} onChange={(e) => setMessage(e.target.value)} />
                                    </Form.Group>

                                    <div className="text-center">
                                        <Button variant="primary" style={{ width: "50%" }} type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}
