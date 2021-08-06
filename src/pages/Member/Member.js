import React from 'react';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';


function Member(){	
	return(
		<div className= 'introduction'>
			<Container >
                <Row >
                    <Col>
                    	<div></div>
                    </Col>
                </Row>
                <Row >
                	<Col md={5}>
                		<div>
                			
                		</div>
                	</Col>
                	<Col md={5}>
                		<div >
                			組員介紹
	                		<div>
	                			
	                		</div>
	                		<div>
	                			
	                		</div>
                		</div>
                	</Col>
                </Row>
            </Container>
		</div>
	)
}

export default Member