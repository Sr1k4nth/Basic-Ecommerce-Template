import React from 'react'
import { Row, Col, Card, Label } from 'reactstrap'
import logo from '../Images/ShopLogo.png'

function Footer() {
    return (
        <div>
            <Card className='cardContent p-3'>
                <Row>
                    <Col md='12' lg='4' xl='4'>
                        <Row>
                            <span className='logoRow'>
                                <img src={logo} alt='shop Logo' width={100} style={{ marginLeft: '50px' }} />
                                <h5 className='marginTop me-3'><b>ROLEX - JEWELLERY</b></h5>
                            </span>
                        </Row>
                        <Col className=" text-md-start">
                            <h6 className='address mx-5'>
                                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
                                Lorem Ipsum Has Been The Industry Standard Dummy The 1500s.
                            </h6>
                        </Col>
                    </Col>
                    <Col  md='12' lg='4' xl='8'>
                        <Row className='mt-3'>
                            <Col md='3'>
                                <Row><h4 className='textColor text-start'><b>Products</b></h4></Row>
                                <Col className='mt-2 text-start'>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            Platinum
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            Diamond
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            Gold
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            Silver
                                        </a>
                                    </p>
                                </Col>
                            </Col>
                            <Col md='3'>
                                <Row><h4 className='textColor text-start'><b>Our Branch</b></h4></Row>
                                <Col className='mt-2 text-start'>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            ABC Company
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            ABC Company
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            ABC Company
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            ABC Company
                                        </a>
                                    </p>
                                </Col>
                            </Col>
                            <Col md='3'>
                                <Row><h4 className='textColor text-start'><b>Services</b></h4></Row>
                                <Col className='mt-2 text-start'>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            Home Delivery
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            Online Purchase
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            Discount Offer
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            Lowest Price
                                        </a>
                                    </p>
                                </Col>
                            </Col>
                            <Col md='3'>
                                <Row><h4 className='textColor text-start'><b>Contact</b></h4></Row>
                                <Col className='mt-2 text-start'>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            44 Roler Store, Salem
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            New Bus Stand, Salem
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            rolex@jewellery.Com
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='link-item'>
                                            (123) 456-7890 / (123) 456-7890
                                        </a>
                                    </p>
                                </Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
            <Card className='cardFooter p-3'>
                <Row>
                    <Col md='4' className='text-start'>
                        <Label className='social-text me-2'>
                            <a href="#!"><i className="fa fa-facebook mt-1" style={{ fontSize: "20px" }}></i></a>
                        </Label>
                        <Label className='social-text me-2'>
                            <a href="#!"><i className="fa fa-twitter text-info mt-1" style={{ fontSize: "20px" }}></i></a>
                        </Label>
                        <Label className='social-text me-2'>
                            <a href="#!"><i className="fa fa-google mt-1 text-danger" style={{ fontSize: "20px" }}></i></a>
                        </Label>
                        <Label className='social-text me-2'>
                            <a href="#!"><i className="fa fa-youtube-play mt-1 text-danger" style={{ fontSize: "20px" }}></i></a>
                        </Label>
                    </Col>
                    <Col md='4'>
                        <Label className='mt-3'><b>© 2023 - Ecommerce Software By MrSk™</b></Label>
                    </Col>
                    <Col md='4' className='text-end'>
                        <Label className='payment-text me-2'>
                            <a href="#!"><i className="fa fa-paypal mt-1" style={{ fontSize: "20px" }}></i></a>
                        </Label>
                        <Label className='payment-text me-2'>
                            <a href="#!"><i className="fa fa-cc-mastercard text-danger mt-1" style={{ fontSize: "20px" }}></i></a>
                        </Label>
                        <Label className='payment-text me-2'>
                            <a href="#!"><i className="fa fa-cc-visa  mt-1" style={{ fontSize: "20px" }}></i></a>
                        </Label>
                        <Label className='payment-text me-2'>
                            <a href="#!"><i className="fa fa-cc-discover mt-1 text-warning" style={{ fontSize: "20px" }}></i></a>
                        </Label>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Footer