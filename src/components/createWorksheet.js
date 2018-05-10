import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import axios from 'axios';

class SimpleForm extends React.Component {
	constructor() {
		super();
		this.submit = this.submit.bind(this);
	}
	submitToServer(data) {
		axios({
			method:'get',
			url:'http://localhost/schoolManagementSystem/php/index.php',
			responseType:'stream'
		})
		  .then(function(response) {
				console.log(response)
		});
	}

	submit({firstName = '', lastName = ''}) {
		let thiz = this;
		console.log("in submit method ...");
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

	renderFields ({ id, type, label, input, meta: {touched, error} }){
			return (
				<div>
					<div className="input-row">
						<label htmlFor={id} >{label}</label>
						<input {...input} id={id} type={type}/>
						{ touched && error && <span className="error">{error}</span> }
					</div>
				</div>
			);
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.submit)}>
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
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		);
	}
};

export default reduxForm({
	form: 'simple', // a unique identifier for this form
})(SimpleForm);
