import React from 'react'
import styled from 'styled-components';

const SolutionWrapper  = styled.div`
	background:url(images/solution-bg.jpg) no-repeat center;
	background-size:100%;
	min-height:730px;
`

const Solution = styled.div`
	background:#fff;
   box-shadow: -1.294px 4.83px 18px 0px rgba(0, 0, 0, 0.08);
	padding:35px;
	height:100%;
	.col-md-7 &{
		height:48.5%;
		&:first-child{margin-bottom:2%;}
	}
`


export default class Solutions extends React.Component{
	render(){
		return(

			 <SolutionWrapper>
				 <div className="container">
				 	<h1 className="text-center my-5">Our Solutions</h1>
				 	<div className="d-flex">
				 		<div className="col-md-5">
				 		<Solution>
				 			<h3 className="d-flex align-items-center">
				 				<img src="images/banking.png" alt=""/>
				 				Banking
				 			</h3>
				 			<h4>ASSET Banking Solutions</h4>
				 			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores inventore error, illum dolorum, laboriosam vero id obcaecati iste velit eius exercitationem consequuntur deserunt accusantium doloremque nulla impedit ipsa labore corporis.</p>
				 		</Solution>
				 		</div>
				 		<div className="col-md-7">
				 		<Solution>
				 			<div className="d-flex align-items-center">
				 				<div className="align-items-center col-5 d-flex">
				 					<img src="images/gover.png" alt=""/>
				 					<span className="h3">Government</span>
				 				</div>
				 				<p className="col-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores inventore error, illum dolorum, laboriosam vero id obcaecati iste velit eius exercitationem consequuntur deserunt accusantium doloremque nulla impedit ipsa labore corporis.</p>
				 			</div>
				 		</Solution>
				 		<Solution>
				 			<div className="d-flex align-items-center">
				 				<div className="align-items-center col-5 d-flex">
				 					<img src="images/telecom.png" alt=""/>
				 					<span  className="h3">Telecom</span>
				 				</div>
				 				<p className="col-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores inventore error, illum dolorum, laboriosam vero id obcaecati iste velit eius exercitationem consequuntur deserunt accusantium doloremque nulla impedit ipsa labore corporis.</p>
				 			</div>
				 		</Solution>
				 		</div>
				 	</div>
				 </div>
			 </SolutionWrapper>
			)
	}
}