import React from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

class Topmenu extends React.Component {
	clickHandle(componentName) {
		console.log(componentName);
	}
	menuEngine() {
		$.getJSON( "../files/menuItems.json", function( data ) {
			var dropdownIDcounter = 1;
			$.each(data, function(key, menuItems){
				if (menuItems.children === undefined) {
					$(".navbar-nav").append(
						'<li class="nav-item">' +
							'<a class="nav-link" href="' + menuItems.linke + '">' + menuItems.label + '</a>' +
						'</li>'
					);
				} else {
					var id = "dropdown_" + dropdownIDcounter++;
					$(".navbar-nav").append(
						'<li class="nav-item dropdown">' +
							'<a class="nav-link dropdown-toggle" href="' + menuItems.linke + '"  id="navbardrop" data-toggle="dropdown">' + menuItems.label + '</a>' +
							'<div id="' + id + '" class="dropdown-menu"></div>' +
						'</li>'
					);
					$.each(menuItems.children, function(childrenKey, childrenValue) {
						$("#"+id).append(
							'<a class="dropdown-item" href="' + childrenValue.linke + '">' +
								childrenValue.label +
							'</a>'
						);
					});
				}
			});
		});
		const menuElements = (
			<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
				<a className="navbar-brand">
					<img src="https://www.w3schools.com/bootstrap4/bird.jpg" alt="Logo" style={{"width":"40px"}}/>
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
				aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="basicExampleNav">
					<ul className="navbar-nav mr-auto"></ul>
				</div>	
			</nav>
		);
		return menuElements;
	}
	render() {
		return (
			<div id="header"> { this.menuEngine() } </div>
		);
	}
}

export default Topmenu;