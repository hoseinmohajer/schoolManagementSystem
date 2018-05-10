import React from 'react';
// import $ from 'jquery';

class ClassesList extends React.Component {
	constructor(props) {
		super();
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<i className="fa fa-list fa-fw"></i> لیست دانش آموزان
					<div className="pull-left">
						<div className="btn-group">
							<button><i className="fa fa-refresh"></i></button>
							&nbsp;
							<button><i className="fa fa-close"></i></button>
						</div>
					</div>
				</div>
				<div className="panel-body">
					<div className="row">
						<div className="col-lg-12">
							<div className="table-responsive">
								<table className="table table-bordered table-hover table-striped">
									<thead>
										<tr>
											<th>#</th>
											<th>نام مدرسه</th>
											<th>پایه</th>
										</tr>	
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>قلم</td>
											<td>ششم</td>
										</tr>
										<tr>
											<td>2</td>
											<td>دانش</td>
											<td>ششم</td>
										</tr>
										<tr>
											<td>3</td>
											<td>قلم</td>
											<td>ششم</td>
										</tr>
										<tr>
											<td>4</td>
											<td>قلم</td>
											<td>ششم</td>
										</tr>
										<tr>
											<td>5</td>
											<td>قلم</td>
											<td>ششم</td>
										</tr>
										<tr>
											<td>6</td>
											<td>دانش</td>
											<td>ششم</td>
										</tr>
										<tr>
											<td>7</td>
											<td>دانش</td>
											<td>ششم</td>
										</tr>
										<tr>
											<td>8</td>
											<td>دانش</td>
											<td>ششم</td>
										</tr>
										<tr>
											<td>9</td>
											<td>قلم</td>
											<td>ششم</td>
										</tr>
										<tr>
											<td>10</td>
											<td>مالک اشتر</td>
											<td>ششم</td>
										</tr>
										<tr>
											<td>11</td>
											<td>مالک اشتر</td>
											<td>ششم</td>
										</tr>
										<tr>
											<td>12</td>
											<td>مالک اشتر</td>
											<td>ششم</td>
										</tr>
										<tr>
											<td>13</td>
											<td>ستایش</td>
											<td>ششم</td>
										</tr>
										<tr>
											<td>14</td>
											<td>ستایش</td>
											<td>ششم</td>
										</tr>
										<tr>
											<td>15</td>
											<td>ستایش</td>
											<td>ششم</td>
										</tr>
										<tr>
											<td>16</td>
											<td>ستایش</td>
											<td>ششم</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="col-lg-8">
							<div id="morris-bar-chart"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ClassesList;