import React from "react";

class Panel extends React.Component {
	panelCloseButton() {
		alert('panel button closed');
	}
	render() {
		return (
			<div id="userAccountPanel">
				<div id="user-account-panel" className="panel panel-default">
					<div className="panel-heading">
						<i className={ this.props.titleIcon }></i> { this.props.title }
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
								{ this.props.children }
							</div>
						</div>
					</div>
					<div className="panel-footer">
						<div className="row">
							<div className="col-lg-12">
								<div className="pull-left">
									{ this.props.children[1] }
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Panel;