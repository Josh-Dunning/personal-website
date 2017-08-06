import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Transition } from 'semantic-ui-react';
import $ from 'jquery';

export default class Nav extends React.Component {

	constructor() {
		super();
		this.state = { 
			visible: false,
			name: 'blank',
			image: 'blank'
		};
	}

	toggleVisibility = () => this.setState({ visible: !this.state.visible })

	capitalize(string) {
  		return string.charAt(0).toUpperCase() + string.slice(1);
  	}

  	componentDidMount () {
  		$("a").hover(
	    function(event) {
	        //this.toggleVisibility
	    },
	    function (event) {
	        //this.toggleVisibility
	    }
 	);
  }

  render() {

	const { visible } = this.state
	const { image } = this.state
	const { name } = this.state

    return ( 
    <div>
	 <a 
	  href={ name === 'github' ? ('https://github.com/Josh-Dunning') : (name + '.html')}
	  style={{display: 'block'}}
	  target={ name === 'github' ? "_blank" : ""}>
      <div className="navBox">
        <div className="navBand"></div>          
        <div className="circBox">
          <span className="circ">
            <img src={image} alt='missing_image' style={{height: '25px'}}/>
          </span>
        </div>
        <span className="navCover">
          <div className="navText">{this.capitalize(name)}</div>
        </span>
        <div className="circBoxB">
          <div className="circB"></div>
        </div>
      </div>
    </a>
    <Transition visible={visible} animation='drop' duration={700}>
    	<div className="dropBox">AA</div>
    </Transition>
    </div>)
  }
}

/*ReactDOM.render(
  <Head />,
  document.getElementById('root')
);*/
