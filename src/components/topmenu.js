import React from 'react';
import $ from 'jquery';


class Topmenu extends React.Component {
	constructor() {
		super();
		this.state = {
			menuItems: null,
			componentName: null
		}
	}
	handleClick(componentName) {
		this.setState({
			componentName: componentName
		});
	}
	componentDidMount() {
		let thiz = this;
		$.getJSON( "../files/menuItems.json", function( data ) {
			let items = [];
			let i = 0;
			$.each(data, function(key, menuItems){
				if (menuItems.children === undefined) {
					items.push(
						<li key={i} className="nav-item">
							<a className="nav-link" onClick={ ()=>thiz.handleClick(menuItems.link) }>{ menuItems.label }</a>
						</li>
					);
				} else {
					let dropdownItems = [];
					let id = "dropdown_" + i;
					let j = 0;
					$.each(menuItems.children, function(childrenKey, childrenValue) {
						let dropdownItemsId = "dropdown_items_" + j;
						dropdownItems.push(
							<a key={dropdownItemsId} className="dropdown-item" onClick={ ()=>thiz.handleClick(childrenValue.link) } >
								{childrenValue.label}
							</a>
						);
						j++;
					});
					items.push(
						<li key={id} className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">{menuItems.label}</a>
							<div key={id} className="dropdown-menu">
								{dropdownItems}
							</div>
						</li>
					);
				}
				i++;
			});
			thiz.setState({
				menuItems: items
			});
		});
	}

	menuEngine() {
		return (
			<div id="header">
				<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
					<a className="navbar-brand">
						<img src="https://www.w3schools.com/bootstrap4/bird.jpg" alt="Logo" style={{"width":"40px"}}/>
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
					aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="basicExampleNav">
						<ul className="navbar-nav mr-auto">
							{ this.state.menuItems }
						</ul>
					</div>	
				</nav>
			</div>
		);
	}
	render() {
		return (
			<div id="header">
				{ this.menuEngine() }
				{ console.log(this.state.componentName) }
			</div>
		);
	}
}

export default Topmenu;