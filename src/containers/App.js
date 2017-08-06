import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/App.css';
import Nav from '../components/Nav';
import $ from 'jquery';

export default class Head extends React.Component {

	constructor() {
		super();
		this.state = { 
			scroll: false,
			navPages: ['home', 'projects', 'about', 'blog', 'github', 'contact'],
			images: {
				home: require('../images/home.png'),
				projects: require('../images/projects.png'),
				about: require('../images/about.png'),
				blog: require('../images/blog.png'),
				github: require('../images/github.png'),
				contact: require('../images/contact.png'),
			}
		};
	}

	toggleScroll (bool) {
		this.setState({scroll: bool})
	}

	componentDidMount () {

		var self = this;

	  $(window).scroll(function() {
	    var height = $(window).scrollTop();

	    if(height  > 70) {
	    	self.toggleScroll(true);
	    } else {
	    	self.toggleScroll(false);
	    }
		});
	}

	render() {

	const { navPages } = this.state
	const { images } = this.state
	const { scroll } = this.state

		return ( 
			
		<div style={{margin: '0'}}>
			<div className="page">
				<div className="headBox">
					<img style={{height: '120%', marginTop: '18px'}} src={require('../images/jname.png')} alt="Josh Dunning" />
				</div>
				<div className={scroll ? "hideLock" : "navHide"}></div>
				<div className={scroll ? "navBar navLock" : "navBar"}>
					<div className="navBox" style={{flex: '1', marginLeft: '0'}}>
						<div className="navBand"></div>	
					</div>
					{navPages.map((page, i) => (
					<div key={page}>
						<Nav name={page} image={images[page]}/>
					</div>))}
				</div>
			</div>
		</div>
		);
	}
}

// ========================================

ReactDOM.render(
	<Head />,
	document.getElementById('root')
);
