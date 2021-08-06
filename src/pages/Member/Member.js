import React from 'react';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';


function Member(){	
	return(
		<div className= 'AppLaout'>
			<Container>
                <Row>
	        		<div className='pageTitle'>
	        			組員介紹
	        		</div>
                </Row>
                <div className='memberMainLayout'>
                	<div className="memberSection">
                		<Row>
	                		<Col md={4} className="avatarSection">
	                			<p>許凱榛</p>
	                		</Col>
	                		<Col md={8} className="memberIntro">
	                			<p className="introTitle">負責部分</p>
	                		</Col>
                		</Row>
                	</div>
                	<div className="memberSection">
                		<Row>
	                		<Col md={4} className="avatarSection">
	                			<p>許凱榛</p>
	                		</Col>
	                		<Col md={8} className="memberIntro">
	                			<p className="introTitle">負責部分</p>
	                		</Col>
                		</Row>
                	</div>
                </div>
            </Container>
		</div>
	)
}

export default Member