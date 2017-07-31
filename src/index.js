import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Head extends React.Component {
  render() {
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
	        <a href="index.html" style={{display: 'block'}}>
	          <div className="navBox">
	            <div className="navBand"></div>          
	            <div className="circBox">
	              <span className="circ">
	                <img src={require('./images/home.png')} style={{height: '25px'}}/>
	              </span>
	            </div>
	            <span className="navCover">
	              <div className="navText">Home</div>
	            </span>
	            <div className="circBoxB">
	              <div className="circB"></div>
	            </div>
	          </div>
	        </a>
	        <a href="projects.html" style={{display: 'block'}}>
	          <div className="navBox">
	            <div className="navBand"></div>          
	            <div className="circBox">
	              <span className="circ">
	                <img src={require('./images/projects.png')} style={{height: '25px'}}/>
	              </span>
	            </div>
	            <span href="projects.html" className="navCover">
	              <div className="navText">Projects</div>
	            </span>
	            <div className="circBoxB">
	              <div className="circB"></div>
	            </div>
	          </div>
	        </a>
	        <a href="about.html" style={{display: 'block'}}>
	          <div className="navBox">
	            <div className="navBand"></div>          
	            <div className="circBox">
	              <span className="circ">
	                <img src={require('./images/about.png')} style={{height: '25px'}}/>
	              </span>
	            </div>
	            <span href="about.html" className="navCover">
	              <div className="navText">About</div>
	            </span>
	            <div className="circBoxB">
	              <div className="circB"></div>
	            </div>
	          </div>
	        </a>
	        <a href="blog.html" style={{display: 'block'}}>
	          <div className="navBox">
	            <div className="navBand"></div>          
	            <div className="circBox">
	              <span className="circ">
	                <img src={require('./images/blog.png')} style={{height: '25px'}}/>
	              </span>
	            </div>
	            <span className="navCover">
	              <div className="navText">Blog</div>
	            </span>
	            <div className="circBoxB">
	              <div className="circB"></div>
	            </div>
	          </div>
	        </a>
	        <a href="https://github.com/Josh-Dunning" target="_blank" style={{display: 'block'}}>
	          <div className="navBox">
	            <div className="navBand"></div>          
	            <div className="circBox">
	              <span className="circ">
	                <img src={require('./images/github.png')} style={{height: '25px'}}/>
	              </span>
	            </div>
	            <span className="navCover">
	              <div className="navText">Github</div>
	            </span>
	            <div className="circBoxB">
	              <div className="circB"></div>
	            </div>
	          </div>  
	        </a>
	        <a href="content.html" style={{display: 'block'}}>    
	          <div className="navBox">
	            <div className="circBox">
	              <span className="circ">
	                <img src={require('./images/contact.png')} style={{height: '25px'}}/>
	              </span>
	            </div>
	            <span className="navCover">
	              <div className="navText">Contact</div>
	            </span>
	            <div className="circBoxB">
	              <div className="circB"></div>
	            </div>
	          </div>
	        </a>
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
