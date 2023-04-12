import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import {
  Row,
  Col,
  Nav,
  Card,
  FormGroup,
  Input,
  InputGroup,
  Button,
  NavItem,
  Navbar
} from 'reactstrap'
import logo from '../Images/ShopLogo.png'

function NavBar() {

  const getInitialState = () => {
    const initialState = {
      activeTab: '1'
    }
    return initialState
  };

  const [state, setState] = useState(getInitialState());
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  const toggle = (tab) => {
    if (state.activeTab !== tab) {
      setState(prev => ({
        ...prev,
        activeTab: tab
      }))
    }
  };

  return (
    <div>
      <Nav className="header-nav">
        <div>
          <span style={{ marginRight: "16px" }}> Welcome To Rolex Jewellery Store </span> |
          <span style={{ marginLeft: "16px" }} className='mr-5'> Need  Help? - (949) 569-4371 / (630) 446-8851  </span>
        </div>
        <div >
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="navbar__item"

          >
            Home
          </NavLink> |
          <NavLink
            exact
            to="/about"
            activeClassName="active"
            className="navbar__item"

          >
            About
          </NavLink> |
          <NavLink
            exact
            to="/contact"
            activeClassName="active"
            className="navbar__item"

          >
            Contact Us
          </NavLink>
        </div>
      </Nav>
      <Card className='cardNav' >
        <Row>
          <Col md='3'>
            <Row>
              <Col md='5'>
                <img src={logo} alt='shop Logo' width={100} style={{ marginLeft: '50px' }} />
              </Col>
              <Col>
                <h1 className='mt-4 me-4'><b>ROLEX</b></h1>
              </Col>
            </Row>
          </Col>
          <Col md='6'>
            <FormGroup row style={{ marginTop: '22px' }}>
              <Col>
                <InputGroup className='mx-4 search-widget' style={{ height: '50px' }}>
                  <Input
                    type="text"
                    name="search"
                    id="serchList"
                    className=''
                    placeholder="Search Here ..."
                  />
                </InputGroup>
              </Col>
              <Col md='3'>
                <Button
                  style={{ height: '48px' }}
                  className='me-5 commonButton'
                >
                  Search
                </Button>
              </Col>
            </FormGroup>
          </Col>
          <Col md='3' className='mt-4'>
            <Row>
              <Col md='6'>
                <a href='#!' className='link-item'>
                  <i class="fa fa-user-circle me-2 mt-2" style={{ fontSize: '30px' }}></i><b>My Account</b>
                </a>
              </Col>
              <Col md='6'>
                <a href='#!' className='link-item'>
                  <i class="fa fa-shopping-bag me-2 mt-2" style={{ fontSize: '30px' }}></i><b>My Cart</b>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <div className={`navbar_Sticky ${stickyClass}`}>
        <Card className='cardNav'>
          <Navbar className='dashboard_Nav'>
            <div className='container-fluid'>
              <Nav>
                <NavItem>
                  <NavLink
                    to='#'
                    className=""
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Gold
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    to='#'
                    className=""
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Silver
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    to='#'
                    className=""
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Diamond
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    to='#'
                    className=""
                    onClick={() => {
                      toggle("4");
                    }}
                  >
                    Platinum
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Navbar>
        </Card>
      </div>
    </div>
  );
}

export default NavBar;
