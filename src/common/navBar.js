import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import UserInfo from '../components/userInfo';

class NavBar extends React.Component {

	handleClick(pagePath) {
		this.setState({
			currentPagePath: pagePath
		});
	}

	render() {
		return (
			<nav className="navbar navbar-default navbar-static-top" style={{"marginBottom": "0"}} >
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<UserInfo userInfo={this.props.userInfo} />
				</div>
				<ul className="nav navbar-top-links navbar-right">
					<li className="dropdown">
						<a className="dropdown-toggle" data-toggle="dropdown" ><i className="fa fa-envelope fa-fw"></i> <i className="fa fa-caret-down"></i></a>
						<ul className="dropdown-menu dropdown-messages">
							<li>
								<a>
									<div>
										<strong>آقای احمدی</strong>
										<span className="pull-right text-muted"><em>دیروز</em></span>
									</div>
									<div>با سلام خدمت شما آقای بختیاری و تشکر از زحمات شما از طریق این نامه می خواستم از اوضاع و احوال درس علی جان مطلع بشم روند تحصیلیش خوبه ...</div>
								</a>
							</li>
							<li className="divider"></li>
							<li>
								<a>
									<div>
										<strong>عباس مفاخری</strong>
										<span className="pull-right text-muted">
											<em>دوشنبه</em>
										</span>
									</div>
									<div>آقای بختیاری من صلاح نمی دونم که محمد با بچه ها در اردو تفریحی شرکت کنه دکترش اجازه نمی ده ...</div>
								</a>
							</li>
							<li className="divider"></li>
							<li className="divider"></li>
							<li><a className="text-center" ><strong>مشاهده همه پیام ها</strong><i className="fa fa-angle-left"></i></a></li>
						</ul>
					</li>
					<li className="dropdown">
						<a className="dropdown-toggle" data-toggle="dropdown" ><i className="fa fa-tasks fa-fw"></i> <i className="fa fa-caret-down"></i></a>
						<ul className="dropdown-menu dropdown-tasks">
							<li>
								<a>
									<div>
										<p>
											<strong>ریاضیات</strong>
											<span className="pull-right text-muted">40% تا اتمام درس</span>
										</p>
										<div className="progress progress-striped active">
											<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{"width":"40%"}} >
												<span className="sr-only">40% تکمیل درس (با موفقیت انحام شد)</span>
											</div>
										</div>
									</div>
								</a>
							</li>
							<li className="divider"></li>
							<li>
								<a>
									<div>
										<p>
											<strong>تربیت بدنی</strong>
											<span className="pull-right text-muted">20% تا تکمیل درس</span>
										</p>
										<div className="progress progress-striped active">
											<div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{"width":"20%"}} >
												<span className="sr-only">20% تکمیل</span>
											</div>
										</div>
									</div>
								</a>
							</li>
							<li className="divider"></li>
							<li>
								<a>
									<div>
										<p>
											<strong>روخوانی </strong>
											<span className="pull-right text-muted">60% تا تکمیل</span>
										</p>
										<div className="progress progress-striped active">
											<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width":"60%"}} >
												<span className="sr-only">60% تا تکمیل (رضایت بخش نیست)</span>
											</div>
										</div>
									</div>
								</a>
							</li>
							<li className="divider"></li>
							<li className="divider"></li>
							<li><a className="text-center" ><strong>مشاهده روند تمامی دروس</strong><i className="fa fa-angle-left"></i></a></li>
						</ul>
					</li>
				</ul>
				<div className="navbar-default sidebar" role="navigation">
					<div className="sidebar-nav navbar-collapse">
						<ul className="nav" id="side-menu">
							<li className="sidebar-search">
								<div className="input-group custom-search-form">
									<input type="text" className="form-control" placeholder="جستجو ..." />
									<span className="input-group-btn">
									<button className="btn btn-default" type="button">
										<i className="fa fa-search"></i>
									</button>
								</span>
								</div>
							</li>
							<li><Link to="/" className="active" ><i className="fa fa-dashboard fa-fw"></i> داشبورد</Link></li>
							<li>
								<a><i className="fa fa-table fa-fw"></i>کارنامه<span className="fa arrow"></span></a>
								<ul className="nav nav-second-level">
									<li><Link to="/createWorksheet" >صدور کارنامه</Link></li>
									<li><Link to="" >تاریخچه کارنامه ها</Link></li>
								</ul>
							</li>
							<li><Link to="/studentsList" ><i className="fa fa-list fa-fw"></i> لیست دانش آموزان</Link></li>
							<li><Link to="/classesList" ><i className="fa fa-list fa-fw"></i> لیست کلاس ها</Link></li>
							<li><Link to="/" ><i className="fa fa-table fa-fw"></i> برنامه هفتگی</Link></li>
							<li><Link to="/" ><i className="fa fa-gift fa-fw"></i> فوق برنامه</Link></li>
							<li><Link to="/" ><i className="fa fa-question-circle fa-fw"></i> نمونه سوالات امتحانی</Link></li>
							<li>
								<a><i className="fa fa-history fa-fw"></i> تاریخچه تحصیلی دانش آموزان <span className="fa arrow"></span></a>
								<ul className="nav nav-second-level">
									<li><Link to="/slideshow" >کارنامه های سال های گذشته</Link></li>
									<li><Link to="/" >توانمندی ها و علایق دانش آموز</Link></li>
									<li><Link to="/footer" >نمودار پیشرفت تحصیلی</Link></li>
								</ul>
							</li>
							
							<li><Link to="/" ><i className="fa fa-envelope-o fa-fw"></i> ارتباط با اولیا</Link></li>
							<li>
								<a><i className="fa fa-list-alt fa-fw"></i> لیست کلاس های دبیر<span className="fa arrow"></span></a>
								<ul className="nav nav-second-level">
									<li><Link to="/" > دانش آموزان مدرسه شماره ۱</Link></li>
									<li><Link to="/" > دانش آموزان مدرسه شماره ۲</Link></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return (
		{
			userInfo: state.userInfo
		}
	);
}
export default withRouter(connect(mapStateToProps)(NavBar));