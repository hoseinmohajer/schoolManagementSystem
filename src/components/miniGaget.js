import React from "react";

class MiniGaget extends React.Component{
	
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<div className="row">
									<div className="col-xs-4">
										<i className="fa fa-comments fa-5x"></i>
									</div>
									<div className="col-xs-8 text-right">
										<div className="huge">۲۶</div>
										<div>یادداشت جدید!</div>
									</div>
								</div>
							</div>
							<a >
								<div className="panel-footer">
									<span className="pull-right">مشاهده جزئیات</span>
									<span className="pull-left"><i className="fa fa-arrow-circle-left"></i></span>
									<div className="clearfix"></div>
								</div>
							</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="panel panel-green">
							<div className="panel-heading">
								<div className="row">
									<div className="col-xs-4">
										<i className="fa fa-tasks fa-5x"></i>
									</div>
									<div className="col-xs-8 text-right">
										<div className="huge">۱۲</div>
										<div>امور محول شده به شما</div>
									</div>
								</div>
							</div>
							<a >
								<div className="panel-footer">
									<span className="pull-right">مشاهده جزئیات</span>
									<span className="pull-left"><i className="fa fa-arrow-circle-left"></i></span>
									<div className="clearfix"></div>
								</div>
							</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="panel panel-red">
							<div className="panel-heading">
								<div className="row">
									<div className="col-xs-4">
										<i className="fa fa-support fa-5x"></i>
									</div>
									<div className="col-xs-8 text-right">
										<div className="huge">۱۳</div>
										<div>جلسات فوق برنامه</div>
									</div>
								</div>
							</div>
							<a >
								<div className="panel-footer">
									<span className="pull-right">مشاهده جزئیات</span>
									<span className="pull-left"><i className="fa fa-arrow-circle-left"></i></span>
									<div className="clearfix"></div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MiniGaget;








