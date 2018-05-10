import React from 'react'
import SimpleForm from './createWorksheet'

class ContactPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <SimpleForm onSubmit={this.submit} />
  }
}