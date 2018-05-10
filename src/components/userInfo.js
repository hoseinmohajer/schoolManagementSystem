import React from 'react';
import { Link } from 'react-router-dom';

class UserInfo extends React.Component {
	render() {
		return (
			<ul className="nav navbar-top-links navbar-right" style={{"height":"50px"}} >
				<li className="dropdown" >
					<a className="dropdown-toggle navbar-brand" data-toggle="dropdown" >
						<img src={(this.props.userInfo) ? this.props.userInfo.imgSrc : null} alt="Teacher Name" style={{"width":"25px", "marginLeft":"5px"}} />
						<span style={{"color": "#428bca"}} >دبیر: </span>{(this.props.userInfo) ? this.props.userInfo.teacherName : null}&nbsp;<i className="fa fa-caret-down"></i>
					</a>
					<ul className="dropdown-menu dropdown-user">
						<li><Link to="/userAccount"><i className="fa fa-user fa-fw"></i>حساب کاربری</Link></li>
						<li><a ><i className="fa fa-gear fa-fw"></i> تنظیمات</a></li>
						<li className="divider"></li>
						<li><a ><i className="fa fa-sign-out fa-fw"></i> خروج</a></li>
					</ul>
				</li>
			</ul>
		);
	}
}

export default UserInfo;