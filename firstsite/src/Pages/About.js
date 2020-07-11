import React, {Component} from "react";
import one from  './../assets/backStage.jpg';
import two from './../assets/bst3.jpg' ;
import Tab from "react-bootstrap/Tab";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";


export default class About extends Component{
    render() {
        return(
            <div className="tabAll">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Технические службы</Nav.Link>

                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Творческий коллектив</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img src={one} alt="" className ="tabImg" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi atque beatae commodi debitis deleniti dolore doloremque ea eaque earum eius, fuga, fugiat harum illo laboriosam modi mollitia neque nesciunt nobis nulla, odio officiis optio pariatur perferendis qui quod recusandae sit soluta sunt temporibus vero vitae voluptas voluptate? Accusamus accusantium aliquam animi aperiam at culpa cum cumque dicta ea eligendi esse ex fugit ipsa laboriosam magni nemo neque, quam quas quo repudiandae velit, voluptate voluptates? Doloribus error ex, exercitationem . Aliquam.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                   <img src={two} alt=""className ="tabImg"/ >
                                   <p>Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi atque beatae commodi debitis deleniti dolore doloremque ea eaque earum eius, fuga, fugiat harum illo laboriosam modi mollitia neque nesciunt nobis nulla, odio officiis optio pariatur perferendis qui quod recusandae sit soluta sunt temporibus vero vitae voluptas voluptate? Accusamus accusantium aliquam animi aperiam at culpa cum cumque dicta ea eligendi esse ex fugit ipsa laboriosam magni nemo neque, quam quas quo repudiandae velit, voluptate voluptates? Doloribus error ex, exercitationem . Aliquam. </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>

        )
    }

}