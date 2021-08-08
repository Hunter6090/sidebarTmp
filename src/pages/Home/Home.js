import React from 'react';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import {AnimatePresence, motion} from 'framer-motion';

import Pic1 from "../../img/pidmd1.jpg";
import Pic2 from "../../img/pidpic.jpg";


function Home(){
	return(
		<div className= 'AppLaout'>
			<Container>
				<motion.div 				
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{ duration: 1 }}
				>
	                <Row className= 'header'>
	                    <Col>
	                    	<div className= 'headerText'>PID風扇控制</div>
	                    </Col>
	                </Row>
	                <Row className= 'contentLayout'>
	                	<Col md={6}>
	                		<div className= 'videocol'>
	                			影片欄位 :)
	                		</div>
	                	</Col>
	                	<Col md={6}>
	                		<div className='rightContentLayout'>
	                			PID風扇控制相關資訊，
		                		<div>
		                			<img className= 'pic1Layout' src ={Pic1} />
		                		</div>
		                		<div>
		                			<img className= 'pic2Layout' src ={Pic2} />
		                		</div>
	                		</div>
	                	</Col>
	                </Row>
                </motion.div>
            </Container>
		</div>
	)
}

export default Home