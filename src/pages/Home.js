import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

function Home(){
	return(
		<div className= 'home'>
			<Container>
                <Row>
                    <Col md={2}>Col={2}</Col>
                    <Col md={1}>Col={1}</Col>
                    <Col md={1}>Col={1}</Col>
                    <Col md={1}>Col={1}</Col>
                    <Col md={1}>Col={1}</Col>
                    <Col md={1}>Col={1}</Col>
                    <Col md={1}>Col={1}</Col>
                    <Col md={1}>Col={1}</Col>
                    <Col md={1}>Col={1}</Col>
                    <Col md={1}>Col={1}</Col>
                    <Col md={1}>Col={1}</Col>
                    <Col md={1}>Col={1}</Col>
                </Row>
            </Container>
		</div>
	)
}

export default Home