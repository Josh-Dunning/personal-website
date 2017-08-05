import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Transition } from 'semantic-ui-react';

class Head extends React.Component {

	constructor() {
		super();
		this.state = { 
			visibility: []
		};

		for ( var i = 0; i < 6; i++) {
			this.state.visibility.push(false),
			this.setState({visibility: this.state.visibility })
		}
	}

	showVisibility(i) {
		this.state.visibility[i] = true,
		this.setState({visibility: this.state.visibility});
	}

	capitalize(string) {
  		return string.charAt(0).toUpperCase() + string.slice(1);
  	}

  render() {

	var navPages = ['home', 'projects', 'about', 'blog', 'github', 'contact'];

	let images = {
		home: require('./images/home.png'),
		projects: require('./images/projects.png'),
		about: require('./images/about.png'),
		blog: require('./images/blog.png'),
		github: require('./images/github.png'),
		contact: require('./images/contact.png'),
	}

	const { visibility } = this.state

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
			 <a 
			  href={ page === 'github' ? ('https://github.com/Josh-Dunning') : (page + '.html')}
			  style={{display: 'block'}}
			  target={ page === 'github' ? "_blank" : ""}
			  onMouseOver={() => this.showVisibility(i)}>
	          <div className="navBox">
	            <div className="navBand"></div>          
	            <div className="circBox">
	              <span className="circ">
	                <img src={images[page]} alt='missing_image' style={{height: '25px'}}/>
	              </span>
	            </div>
	            <span className="navCover">
	              <div className="navText">{this.capitalize(page)}</div>
	            </span>
	            <div className="circBoxB">
	              <div className="circB"></div>
	            </div>
	          </div>
	        </a>
	        <Transition visible={visibility[i]} animation='drop' duration={700}>
	        	<div className="dropBox">AA</div>
	        </Transition>
	        </div>)
			)}
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
