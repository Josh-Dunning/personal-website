import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/App.css';
import Nav from '../components/Nav';
import $ from 'jquery';
import { Parallax, Background } from  'react-parallax';

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

	    if(height  > 66 && self.state.scroll === false) {
	    	self.toggleScroll(true);
	    } else if (height  < 66 && self.state.scroll === true) {
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
				<div className={scroll ? "headLock" : "headBox"}>
					{scroll ? '' : <img style={{height: '80px', marginTop: '28px'}} src={require('../images/jname.png')} alt="Josh Dunning" />}
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
				<div className={scroll ? "body bodyLock" : "body"} style={{display: 'flex', justifyContent: 'center'}}>
					<div style={{flex: '1', marginLeft: '30px', marginTop: '38px', backgroundColor: '#816C5B'}}>
						<div style={{height: '60px', width: '100%', backgroundColor: '#705c4c'}}>
						</div>
						<div style={{margin: '20px'}}>
							<div style={{height: '100px'}}/>
							<Parallax strength={300}>
			          <Background>
			            <img src={require('../images/arduinotest.jpg')}/>
			          </Background>
			          <h1 style={{height: '200px', width: '100%', marginLeft: '14px', marginTop: '10px'}}>Arduino Projects</h1>
			        </Parallax>
			        <div style={{height: '40px'}}/>
			        <Parallax strength={-300}>
			          <Background>
			            <img src={require('../images/code.jpg')}/>
			          </Background>
			          <h1 style={{height: '200px', width: '500px', marginLeft: '14px', marginTop: '10px'}}>Java Projects</h1>
			        </Parallax>
						</div>
					</div>
					<div style={{flex: '2', marginRight: '30px', marginTop: '38px', backgroundColor: '#C3B7AC'}}>
						<div style={{height: '60px', width: '100%', backgroundColor: '#705c4c'}}>
						</div>
						<div style={{margin: '20px'}}>
							<div style={{height: '200px'}}>
							</div>
			        <Parallax strength={200}>
			          <Background>
			            <img src={require('../images/arduinotest.jpg')}/>
			          </Background>
			          <h1 style={{height: '200px', width: '500px', marginLeft: '14px', marginTop: '10px'}}>Arduino Projects</h1>
			        </Parallax>
			      </div>
					</div>
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
