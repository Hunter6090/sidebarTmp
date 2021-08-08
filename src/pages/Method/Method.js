import React from 'react';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import {AnimatePresence, motion} from 'framer-motion';


import BgPic from "../../img/bgPic.jpg";


function Method(){	
	return(
		<div className= 'AppLaout'>
			<Container >
				<motion.div 				
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{ duration: 1 }}
				>
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
	                			可能的方法
		                		<div>
		                			
		                		</div>
		                		<div>
		                			
		                		</div>
	                		</div>
	                	</Col>
	                </Row>
                </motion.div>
            </Container>
		</div>
	)
}

export default Method