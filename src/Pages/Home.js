import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {
  Row,
  Col,
  Card,
  Button,
  CardFooter,
  CardBody
} from 'reactstrap'
import Slider from "react-slick";
import image1 from '../assets/img/Carosual_Images/img1.jpg';
import image2 from '../assets/img/Carosual_Images/img2.jpg';
import image3 from '../assets/img/Carosual_Images/img3.jpg';
import image4 from '../assets/img/Carosual_Images/img4.jpg';
import image5 from '../assets/img/Carosual_Images/img5.jpg';
import image7 from '../assets/img/Carosual_Images/img7.jpg';
import image8 from '../assets/img/Carosual_Images/img8.jpg';
import image9 from '../assets/img/Carosual_Images/img9.jpg';
import image10 from '../assets/img/Carosual_Images/img10.jpg';
import image11 from '../assets/img/Carosual_Images/img11.jpg';
import image12 from '../assets/img/Carosual_Images/img12.jpg';
import image13 from '../assets/img/Carosual_Images/img13.jpg';
import image14 from '../assets/img/Carosual_Images/img14.jpg';
import image15 from '../assets/img/Carosual_Images/img15.jpg';
import image16 from '../assets/img/Carosual_Images/img16.jpg';
import image17 from '../assets/img/Carosual_Images/img17.jpg';
import image19 from '../assets/img/Carosual_Images/img19.jpg';
import offer1 from '../assets/img/Carosual_Images/offer1.jpg';
import offer2 from '../assets/img/Carosual_Images/offer2.jpg';
import CardImg1 from '../assets/img/Carosual_Images/CardImg1.jpg';
// import CardImg2 from '../assets/img/Carosual_Images/CardImg2.jpg';
import CardImg4 from '../assets/img/Carosual_Images/CardImg4.jpg';
import CardImg3 from '../assets/img/Carosual_Images/CardImg3.jpg';
import CardImg5 from '../assets/img/Carosual_Images/CardImg5.jpg';
import CardImg6 from '../assets/img/Carosual_Images/CardImg6.jpg';
import RatingImg from '../assets/img/Carosual_Images/RatingImg.png';

export default function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
      }
    ]
  };

  const slideImg = [
    {
      img: image1
    },
    {
      img: image2
    },
    {
      img: image3
    },
    {
      img: image4
    },
    {
      img: image5
    },
    {
      img: image7
    },
    {
      img: image8
    },
    {
      img: image9
    },
    {
      img: image10
    },

  ];

  const slideImg2 = [
    {
      img: image11,
      amount: 1000
    },
    {
      img: image12,
      amount: 2799
    },
    {
      img: image13,
      amount: 3099
    },
    {
      img: image14,
      amount: 2999
    },
    {
      img: image15,
      amount: 1999
    },
    {
      img: image16,
      amount: 4444
    },
    {
      img: image17,
      amount: 7777
    },
    {
      img: image19,
      amount: 9999
    },
  ];

  return (
    <div>
      <Row>
        <Col md='9'>
          <div style={{ height: '400px', width: '100%' }}>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image1}
                  height='400px'
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image2}
                  height='400px'
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image3}
                  height='400px'
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image4}
                  height='400px'
                  alt="Fourth slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image5}
                  height='400px'
                  alt="Fivth slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
        <Col md='3' className='p-1'>
          <Col>
            <img
              className="d-block w-100"
              src={offer1}
              height='190px'
              alt="Fivth slide"
            />
          </Col>
          <Col className='mt-2'>
            <img
              className="d-block w-100"
              src={offer2}
              height='190px'
              alt="Fivth slide"
            /></Col>
        </Col>
      </Row>
      <Row>
        <Col md='3' className='p-3'>
          <Card className='p-1 cardContent cardBorder'>
            <CardBody className=''>
              <h4 className='mt-2'><b> Best Offers  </b></h4>
              <h4 className=''><b> Today Only left</b></h4>
              <hr className='p-0  mb-1' />
              <div className='text-center'>
                <Button
                  className='commonButton'
                  style={{ width: '200px' }}
                >
                  View All Product
                </Button>
              </div>
              <hr className='p-0 m-0' />
            </CardBody>
            <CardFooter className='p-0'>
              <img
                className="d-block w-100"
                src={CardImg1}
                height='160px'
                alt="Fivth slide"
              />
            </CardFooter>
          </Card>
        </Col>
        <Col md='9' className='p-5'>
          <Slider {...settings}>
            {slideImg.map(item => (
              <>
                <div className='p-2'>
                  <img
                    className="d-block w-100 imgHover"
                    src={item.img}
                    height='180px'
                    alt="Fivth slide"
                  />
                  <h5 className='mt-4 text-center'>Min.50% off</h5>
                  <div className='text-center'>
                    <Button
                      className='commonButton mt-2'
                      size='sm'
                    >
                      Click
                    </Button>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </Col>
      </Row>
      <Row>
        <Col md="1"></Col>
        <Col className='p-5'>
          <Slider {...settings}>
            {slideImg2.map(item => (
              <>
                <div className='p-2'>
                  <div className='image-box'>
                    <img
                      src={item.img}
                      height='280px'
                      width='250px'
                      alt="Fivth slide"
                    />
                  </div>
                  <h5 className='mt-4'>${item.amount}</h5><del className='text-right mt-1'>$4999</del>
                  <img src={RatingImg}
                    alt="rating"
                    height='100%'
                    width='200px'
                    className='p-0'/>
                </div>
              </>
            ))}
          </Slider>
        </Col>
        <Col md="1"></Col>
      </Row>
      <Row className='mt-5'>
        <Col md='3'>
          <Card className='cardContent'>
            <div className='image-box'>
              <img
                className="w-100"
                src={CardImg3}
                height='300px'
                alt="Fivth slide"
              />
            </div>
            <CardFooter className='text-center'>
              <h2> <b>bangle</b></h2>
            </CardFooter>
          </Card>
        </Col>
        <Col md='3'>
          <Card className='cardContent'>
            <div className='image-box'>
              <img
                className="w-100"
                src={CardImg4}
                height='300px'
                alt="Fivth slide"
              />
            </div>

            <CardFooter className='text-center'>
              <h2> <b>Necklaces</b></h2>
            </CardFooter>
          </Card>
        </Col>
        <Col md='3'>
          <Card className='cardContent'>
            <div className='image-box'>
              <img
                className="w-100"
                src={CardImg5}
                height='300px'
                alt="Fivth slide"
              />
            </div>
            <CardFooter className='text-center'>
              <h2> <b>Gold Dollar</b></h2>
            </CardFooter>
          </Card>
        </Col>
        <Col md='3'>
          <Card className='cardContent'>
            <div className='image-box'>
              <img
                className="w-100"
                src={CardImg6}
                height='300px'
                alt="Fivth slide"
              />
            </div>
            <CardFooter className='text-center'>
              <h2> <b>Locket Designs</b></h2>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
