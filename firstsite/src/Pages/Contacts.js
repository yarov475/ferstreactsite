import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from '@material-ui/core/Button';

export default class Contacts extends Component{

    render() {

        return(

            <div>
                <h1>подпишись на рассылку</h1>
                <Form>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" srOnly>
                                Name
                            </Form.Label>
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Ваше Имя"
                            />
                        </Col>
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                mail
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <FormControl id="inlineFormInputGroup" placeholder="EMail" />
                            </InputGroup>
                        </Col>
                        <Col xs="auto">
                            <Form.Check
                                type="checkbox"
                                id="autoSizingCheck"
                                className="mb-2"
                                label="Зпомнить меня"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button variant="contained" color="primary">
                                Hello World
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
                <div className="m-5 ">
                    <h2 className="alert-secondary">Пишите нам</h2>
                    <p>yayayay.yandex.ru</p>
                </div>
            </div>


        )
    }

}