import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Transition } from 'semantic-ui-react';
import $ from 'jquery';
import Nav from './Nav';

class Head extends React.Component {

	constructor() {
		super();
		this.state = { 
			visibility: [],
			navPages: ['home', 'projects', 'about', 'blog', 'github', 'contact'],
			navIndex: '',
			images: {
				home: require('./images/home.png'),
				projects: require('./images/projects.png'),
				about: require('./images/about.png'),
				blog: require('./images/blog.png'),
				github: require('./images/github.png'),
				contact: require('./images/contact.png'),
			}

		};

		for ( var i = 0; i < this.state.navPages.length; i++) {
			this.state.visibility.push(false),
			this.setState({visibility: this.state.visibility })
		}
	}

	toggleVisibility(i, bool) {
		this.state.visibility[i] = bool,
		this.setState({visibility: this.state.visibility});
	}

	capitalize(string) {
  		return string.charAt(0).toUpperCase() + string.slice(1);
  	}

  	componentDidMount () {
  		$("a").hover(
	    function(event) {
	        // The mouse has entered the element, can reference the element via 'this'
	        //console.log(this)
	    },
	    function (event) {
	        // The mouse has left the element, can reference the element via 'this'
	    }
 	);
  }

  	

  render() {

/*
	let images = {
		home: require('./images/home.png'),
		projects: require('./images/projects.png'),
		about: require('./images/about.png'),
		blog: require('./images/blog.png'),
		github: require('./images/github.png'),
		contact: require('./images/contact.png'),
	}*/

	const { visibility } = this.state
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
			  <Nav name={page} image={images[page]}></Nav>
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
