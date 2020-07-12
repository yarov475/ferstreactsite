import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import A from './../assets/bst3.jpg';
import B from './../assets/backStage.jpg';
import C from './../assets/backStage2.jpg';

export default class Blod extends Component{
    render() {
        return(
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src={A} />
                    <Card.Body>
                        <Card.Title>Актер</Card.Title>
                        <Card.Text>
                             – живая связь между текстом автора, сценическими указаниями режиссера и восприятием зрителя. В истории театра эта трудная задача превращала актера то в личность, обожаемую и мистифицированную, то в существо, презираемое обществом с почти инстинктивным страхом. Долгое время термин «актер» обозначал действующее лицо пьесы; затем – исполнителя роли, ремесленника сцены, комедианта.  .
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="p-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Театр — канал, посредством которого льётся непосредственно в народные массы то, что вырабатывает наука и знание.

                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">

                               <cite title="Source Title"> Ф. Шиллер</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Img variant="top" src={B} />
                    <Card.Body>
                        <Card.Title>У Роджерс</Card.Title>
                        <Card.Text>
                            Театр: единственное место, где бедные свысока глядят на богатых.
                            {' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card bg="primary" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Театр — сильнейшее оружие, но, как и всякое оружие, о двух концах: оно может приносить великое благо людям и может быть величайшим злом.

                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                <cite title="Source Title">В. Гюго
                                    </cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Авансцена</Card.Title>
                        <Card.Text>
                             – пространство сцены между занавесом и зрительным залом.

                            В качестве игровой площадки авансцена широко используется в оперных и балетных спектаклях. В драматических театрах авансцена служит основным местом действия для небольших сцен перед закрытым занавесом, которые связывают картины спектакля.

                            Некоторые режиссеры выносят на авансцену основное действие, расширяя сценическую площадку..{' '}
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img src={C} />
                </Card>
                <Card className="text-right">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Если двое разговаривают, а третий слушает их разговор, – это уже театр.

                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                               польский актер<cite title="Source Title">Густав Холоубек (р. 1923),
                               </cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Виссарион Белинский (1811 – 1848), критик</Card.Title>
                        <Card.Text>
                            Что же такое театр? О, это истинный храм искусства!

                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        )
    }

}