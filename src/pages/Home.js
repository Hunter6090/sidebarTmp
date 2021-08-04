import React from 'react';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';

import Pic1 from "../img/pic1.jpg";
import Pic2 from "../img/pic2.jpg";

function Home(){
	return(
		<div className= 'home'>
			<Container>
                <Row className= 'header'>
                    <Col>
                    	<div className= 'headerText'>Title</div>
                    </Col>
                </Row>
                <Row className= 'contentLayout'>
                	<Col md={6}>
                		<div>
                			Maybe you wanna add some info here :)
                		</div>
                	</Col>
                	<Col md={6}>
                		<div className='rightContentLayout'>
                			Here you can do some description to the figure
	                		<div>
	                			<img className= 'pic1Layout' src ={Pic1} />
	                		</div>
	                		<div>
	                			<img className= 'pic2Layout' src ={Pic2} />
	                		</div>
                		</div>
                	</Col>
                </Row>
            </Container>
		</div>
	)
}

export default Home