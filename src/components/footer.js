import React from "react";

class Footer extends React.Component{
	render() {
		return (
			  <footer className="page-footer font-small stylish-color-dark bg-dark pt-4 mt-4 ">
				  <div className="container text-center text-md-left">
					  <div className="row">
						  <div className="col-md-4">
							  <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Footer Content</h5>
							  <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
								  amet, consectetur adipisicing elit.</p>
						  </div>
						  <hr className="clearfix w-100 d-md-none"/>
						  <div className="col-md-2 mx-auto">
							  <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
							  <ul className="list-unstyled">
								  <li><a href="#!">Link 1</a></li>
								  <li><a href="#!">Link 2</a></li>
								  <li><a href="#!">Link 3</a></li>
								  <li><a href="#!">Link 4</a></li>
							  </ul>
						  </div>
						  <hr className="clearfix w-100 d-md-none"/>
						  <div className="col-md-2 mx-auto">
							  <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
							  <ul className="list-unstyled">
								  <li><a href="#!">Link 1</a></li>
								  <li><a href="#!">Link 2</a></li>
								  <li><a href="#!">Link 3</a></li>
								  <li><a href="#!">Link 4</a></li>
							  </ul>
						  </div>
						  <hr className="clearfix w-100 d-md-none"/>
						  <div className="col-md-2 mx-auto">
							  <h5 className="text-uppercase mb-4 mt-3 font-weight-bold ">Links</h5>
							  <ul className="list-unstyled">
								  <li><a href="#!">Link 1</a></li>
								  <li><a href="#!">Link 2</a></li>
								  <li><a href="#!">Link 3</a></li>
								  <li><a href="#!">Link 4</a></li>
							  </ul>
						  </div>
					  </div>
				  </div>
				  <hr/>
				  <div className="text-center py-3">
					  <ul className="list-unstyled list-inline mb-0">
						  <li className="list-inline-item">
							  <h5 className="mb-1">Register for free</h5>
						  </li>
						  <li className="list-inline-item"><a href="#!" className="btn btn-danger btn-rounded">Sign up!</a></li>
					  </ul>
				  </div>
				  <hr/>
				  <div className="text-center">
					  <ul className="list-unstyled list-inline">
						  <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1"><i className="fa fa-facebook"> </i></a></li>
						  <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> </i></a></li>
						  <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1"><i className="fa fa-google-plus"> </i></a></li>
						  <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin"> </i></a></li>
						  <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></a></li>
					  </ul>
				  </div>
				  <div className="footer-copyright py-3 text-center">
					  <div className="container-fluid">
						  © 2017 Copyright: <a href="https://mdbootstrap.com/material-design-for-bootstrap/"> MDBootstrap.com </a>
					  </div>
				  </div>
			  </footer>
		);
	}
}

export default Footer;