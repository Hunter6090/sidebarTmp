import React from 'react';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';


function Introduction(){	
	return(
		<div className= 'AppLaout'>
			<Container>
                <Row className='pageTitle'>
            		<div>
            			專題介紹
                	</div>
                </Row>
                <Row className='pageMainLayout'>
            		<div className='pageMainFigure'>
            			圖片
                	</div>
                </Row>
            </Container>
		</div>
	)
}

export default Introduction