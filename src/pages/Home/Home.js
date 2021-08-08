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
	                <Row>
	                    <Col>
	                    	<div className= 'pageTitle'>PID風扇控制</div>
	                    </Col>
	                </Row>
	                <Row>
	                	<Col xs={12} sm={12} md={12} lg ={12} xl={6}>
	                		<div className= 'videocol'>
	                			影片欄位 :)
	                		</div>
	                	</Col>
	                	<Col xs={12} sm={12} md={12} lg ={12} xl={6}>
	                		<div className='videoText'>
	                			PID風扇控制相關資訊，
		                		<div>
		                			<img className='imgLayout' src ={Pic1} />
		                		</div>
		                		<div>
		                			<img className='imgLayout' src ={Pic2} />
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