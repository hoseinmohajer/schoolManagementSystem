import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import { SubmissionError } from "redux-form";

import Slideshow 		from "../components/slideshow";
import StudentsList 	from "../components/studentsList";
import ClassesList 		from "../components/classesList";
import Footer 			from "../components/footer";
import MiniGaget 		from "../components/miniGaget";
import CreateWorksheet  from "../components/createWorksheet";
import UserAccount 		from "../components/userAccount";

class Container extends React.Component {
	// submit({firstName, lastName}) {
	// 	if (firstName.trim === '') {
	// 		error.firstName = 'required!';
	// 	}
	// 	if (lastName.trim === '') {
	// 		error.lastName = 'required!';
	// 	}
	// 	if (isError) {
	// 		throw new SubmissionError(error);
	// 	} else {
	// 		// submit form data to server ...
	// 		console.log('valid submission');
	// 	}
	// }
	render() {
		return (
			<div id="page-wrapper">
				<div className="row">
					<div className="col-lg-12">
						<div className="page-header">
							<h1>{ this.props.location.pathname }</h1>
							<h5 style={{"color":"#777"}} ><i className="fa fa-sitemap"></i>&nbsp;&nbsp;{ this.props.location.pathname }</h5>
						</div>
					</div>
				</div>
				<Switch>
					<Route exact path='/' component={MiniGaget} />
					<Route path='/createWorksheet' >
						<CreateWorksheet />
					</Route>
					<Route path='/slideshow' component={Slideshow} />
					<Route path='/studentsList' component={StudentsList} />
					<Route path='/classesList' component={ClassesList} />
					<Route path='/footer' component={Footer} />
					<Route path='/userAccount' component={UserAccount} />
				</Switch>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return (
		{
			title: state.pageTitle
		}
	);
}
export default withRouter(connect(mapStateToProps)(Container));
