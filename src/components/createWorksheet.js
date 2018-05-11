import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

const url = 'http://localhost/schoolManagementSystem/php/index.php';

class SimpleForm extends React.Component {
	constructor() {
		super();
		this.state = {
			panelStatus: true
		}
		this.submit = this.submit.bind(this);
		this.panelCloseButton = this.panelCloseButton.bind(this);
	}

	submitToServer(data) {
		fetch(url, {
			method: 'post',
			body: JSON.stringify(data)
		}).then(res=>{
			return res.json()
		})
		.then(res => {
			return alert(res)
		})
	}

	submit({firstName = '', lastName = ''}) {
		let thiz = this;
		let error = {};
		let isError = false;
		if (firstName.trim() === '') {
			error.firstName = 'required!';
			isError = true;
		}
		if (lastName.trim() === '') {
			error.lastName = 'required!';
			isError = true;
		}
		if (isError) {
			throw new SubmissionError(error);
		} else {
			thiz.submitToServer({firstName, lastName})
		}
	}

	renderFields (props, { id, type, label, input, meta: {touched, error} }){
		const { handleSubmit, pristine, reset, submitting } = props
		let myInput = '';
		if ( (type === 'radio') || (type === 'checkbox') ) {
			myInput = <input className="" {...input} id={id} type={type}/>
		} else {
			myInput = <input className="form-control" {...input} id={id} type={type}/>
		}
		return (
			<div>
				<div className="form-group">
					<label className="" htmlFor={id} >{label}</label>
					{myInput}
					{ touched && error && <span className="error">{error}</span> }
				</div>
			</div>
		);
	}

	panelCloseButton() {
		this.refs.closeButton.className = 'hide';
		// this.setState({
		// 	panelStatus: false
		// });
	}

	componentWillMount() {
		// this.setState({
		// 	panelStatus: true
		// });
	}

	render() {
		return (
			<div ref="closeButton" className={'show'} >
				<div id="user-account-panel" className="panel panel-default">
					<div className="panel-heading">
						<i className="fa fa-user fa-fw"></i> Create work Sheet
						<div className="pull-left">
							<div className="btn-group">
								<button><i className="fa fa-refresh"></i></button>
								&nbsp;
								<button onClick={this.panelCloseButton} ><i className="fa fa-close"></i></button>
							</div>
						</div>
					</div>
					<div className="panel-body">
						<div className="row">
							<div className="col-lg-12">
								<form>
									<Field name="firstName" component={this.renderFields} type="text" placeholder="First Name" label="First Name" />
									<Field name="lastName" component={this.renderFields} type="text" placeholder="Last Name" label="Last Name" />
									<Field name="email" component={this.renderFields} type="email" placeholder="Email" label="Email" />
									<Field name="sex" component={this.renderFields} type="radio" value="male" id="male" label="Male" />
									<Field name="sex" component={this.renderFields} type="radio" value="female" id="female" label="Female" />
									<Field name="favoriteColor" component="select" label="Favorite Color" >
										<option />
										<option value="ff0000">Red</option>
										<option value="00ff00">Green</option>
										<option value="0000ff">Blue</option>
									</Field>
									<Field name="employed" id="employed" component={this.renderFields} type="checkbox" label="Employed" />
									<Field name="notes" component="textarea" label="Notes" />
									
								</form>
							</div>
						</div>
					</div>
					<div className="panel-footer">
						<div className="row">
							<div className="col-lg-12">
								<div className="pull-left">
									<button type="submit" className="btn btn-success" onClick={this.props.handleSubmit(this.submit)} >Save</button>
									<button type="button" disabled={pristine || submitting} onClick={reset}>
					          Clear Values
					        </button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default reduxForm({form: 'simple'})(SimpleForm);
