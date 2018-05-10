import React from "react";
import $ from "jquery";

class UserAccount extends React.Component {
	panelCloseButton() {
		$("#userAccountPanel").hide();
	}
	componentWillUpdate() {
		$("#userAccountPanel").show();
	}
	save() {
		alert("Your data has saved ...");
	}
	render() {
		return (
			<div id="userAccountPanel">
				<div id="user-account-panel" className="panel panel-default">
					<div className="panel-heading">
						<i className="fa fa-user fa-fw"></i> حساب کاربری
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
								<div className="col-lg-6">
									<form>
											<div className="form-group">
												<label>نام</label>
												<input className="form-control" placeholder="نام" />
											</div>
											<div className="form-group">
												<label>نام خانوادگی</label>
												<input className="form-control" placeholder="نام خانوادگی" />
											</div>
									</form>
								</div>
								<div className="col-lg-6">
									<form>
											<div className="form-group">
												<label>شماره پرسنلی</label>
												<input className="form-control" placeholder="شماره پرسنلی" />
											</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="panel-footer">
						<div className="row">
							<div className="col-lg-12">
								<div className="pull-left">
									<button type="submit" className="btn btn-success" onClick={this.save} >ذخیره اطلاعات</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default UserAccount;
