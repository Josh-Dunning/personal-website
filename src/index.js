import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';

class Head extends React.Component {

	constructor() {
		super();
		this.state = { 
			navPages: ['home', 'projects', 'about', 'blog', 'github', 'contact'],
			images: {
				home: require('./images/home.png'),
				projects: require('./images/projects.png'),
				about: require('./images/about.png'),
				blog: require('./images/blog.png'),
				github: require('./images/github.png'),
				contact: require('./images/contact.png'),
			}
		};
	}

	render() {

	const { navPages } = this.state
	const { images } = this.state

		return ( 
			
		<div style={{margin: '0'}}>
			<div className="page">
				<div className="headBox">
					<img style={{height: '120%', marginTop: '18px'}} src={require('./images/jname.png')} alt="Josh Dunning" />
				</div>
				<div className="navHide"></div>
				<div className="navBar">
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
