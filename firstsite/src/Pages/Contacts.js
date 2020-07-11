import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
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
                                placeholder="Jane Doe"
                            />
                        </Col>
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                Username
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <FormControl id="inlineFormInputGroup" placeholder="Username" />
                            </InputGroup>
                        </Col>
                        <Col xs="auto">
                            <Form.Check
                                type="checkbox"
                                id="autoSizingCheck"
                                className="mb-2"
                                label="Remember me"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" className="mb-2">
                                Submit
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>

            </div>

        )
    }

}