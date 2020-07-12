import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import './../App.css';
import bilet from './../assets/ma.jpg';
import monter from './../assets/monter.jpg';
import but from './../assets/propertyNan.jpg';







export default class Home extends Component{
     render() {
         return<div>



             {/*<div>*/}
             {/*<Badge variant="secondary">Технический персонал</Badge>*/}
             {/*             </div>*/}
             <div>
                 <Carousel>
                     <Carousel.Item>
                         <img
                             className="d-block w-100"
                             src="data:image/jpeg;base64,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"
                             alt="Third slide"
                            height="800px"                         />

                         <Carousel.Caption>
                             <h3>Фасад</h3>

                         </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                         <img
                             className="d-block w-100"
                             src="http://www.saint-petersburg.com/images/buildings/mariinsky-theatre/world-famous-mariinsky-theatre-in-st-petersburg.jpg"
                             alt="Third slide"
                             height="800px"
                         />

                         <Carousel.Caption>
                             <h3>Залл</h3>

                         </Carousel.Caption>
                     </Carousel.Item>
                 </Carousel>
             </div>
             <div>
                 <h1>Мариинский</h1>
             </div>


             <CardDeck>
                 <Card>
                     <Card.Img variant="top" src={bilet} />
                     <Card.Body>
                         <Card.Title>Капельдинеры</Card.Title>
                         <Card.Text>
                           театр начинается не с вешалки а с человека
                         </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                         <small className="text-muted">Last updated 3 mins ago</small>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <Card.Img variant="top" src={but}/>
                     <Card.Body>
                         <Card.Title>Бутафоры</Card.Title>
                         <Card.Text>
                             тише летучей мыши
                         </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                         <small className="text-muted">Last updated 3 mins ago</small>
                     </Card.Footer>
                 </Card>
                 <Card>
                     <Card.Img variant="top" src= {monter}/>
                     <Card.Body>
                         <Card.Title>Монтировщики</Card.Title>
                         <Card.Text>
                        Разбирают остров буян потому что вечером собирают Париж
                         </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                         <small className="text-muted">Last updated 3 mins ago</small>
                     </Card.Footer>
                 </Card>
             </CardDeck>



           <p className= "text m-5">Государственный академический Мариинский театр (в 1935—1992 годах — Ленинградский ордена Ленина и ордена Октябрьской Революции академический театр оперы и балета имени С. М. Кирова, часто сокращённо — Кировский театр) — театр оперы и балета в Санкт-Петербурге, один из ведущих музыкальных театров России и мира.

               Труппа, основанная ещё в XVIII веке, до революции функционировала под руководством дирекции Императорских театров. В 1784—1886 годах для балетных и оперных спектаклей использовалось преимущественно здание Большого театра (в 1896 году перестроено архитектором В. В. Николя для размещения Санкт-Петербургской консерватории), в 1859—1860 году там же, на Театральной площади, архитектором А. К. Кавосом было выстроено нынешнее здание театра, названное в честь императрицы Марии Александровны.

           </p>




 </div>
     }

 }