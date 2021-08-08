import React from 'react';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import {AnimatePresence, motion} from 'framer-motion';


function Results(){	
	return(
		<div className= 'AppLaout'>
			<Container >
				<motion.div 				
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{ duration: 1 }}
				>
	                <Row className='pageTitle'>
	            		<div>
	            			成果
	                	</div>
	                </Row>
	                <Row>
	            		<div className='introMainLayout'>
	                	</div>
	                </Row>
                </motion.div>
            </Container>
		</div>
	)
}

export default Results