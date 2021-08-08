import React from 'react';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import {AnimatePresence, motion} from 'framer-motion';

import Pic1 from "../../img/pid_Intro.png";


function Introduction(){	
	return(
		<div className= 'AppLaout'>
			<Container>
				<motion.div 				
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{ duration: 1 }}
				>
	                <Row className='pageTitle'>
	            		<div>
	            			專題介紹
	                	</div>
	                </Row>
	                <Row className='pageMainLayout'>
	            		<div className='pageMainFigure'>
	            			<img className= 'pic1Layout' src ={Pic1} />
	                	</div>
	                </Row>
                </motion.div>
            </Container>
		</div>
	)
}

export default Introduction