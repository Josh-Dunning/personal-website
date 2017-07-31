import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Head extends React.Component {

  

  render() {

  	function capitalize(string) {
  	return string.charAt(0).toUpperCase() + string.slice(1);
  	}

	var navPages = ['home', 'projects', 'about', 'blog', 'github', 'contact'];

	let images = {
		home: require('./images/home.png'),
		projects: require('./images/projects.png'),
		about: require('./images/about.png'),
		blog: require('./images/blog.png'),
		github: require('./images/github.png'),
		contact: require('./images/contact.png'),
	}

	


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
			{navPages.map((page) =>
			  <a 
			  	href={ page == 'github' ? ('https://github.com/Josh-Dunning') : (page + '.html')}
			  	style={{display: 'block'}}
			  	target={ page == 'github' ? "_blank" : ""}>
	          <div className="navBox">
	            <div className="navBand"></div>          
	            <div className="circBox">
	              <span className="circ">
	                <img src={images[page]} style={{height: '25px'}}/>
	              </span>
	            </div>
	            <span className="navCover">
	              <div className="navText">{capitalize(page)}</div>
	            </span>
	            <div className="circBoxB">
	              <div className="circB"></div>
	            </div>
	          </div>
	        </a>
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
