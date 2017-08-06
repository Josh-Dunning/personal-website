import React from 'react';
import '../styles/App.css';
import { Transition } from 'semantic-ui-react';
import $ from 'jquery';

export default class Nav extends React.Component {

	constructor() {
		super();
		this.state = { 
			visible: false,
		};
	}

	toggleVisibility() {
		this.setState({ visible: !this.state.visible })
	}

	capitalize(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
	}

	componentDidMount () {
		$("." + this.props.name + " a").hover(
			this.toggleVisibility.bind(this),
			this.toggleVisibility.bind(this)
 		);
	}

	render() {

	const { visible } = this.state
	const { image } = this.props
	const { name } = this.props

		return ( 

		<div className={name}>
			<a 
				href={name === 'github' ? ('https://github.com/Josh-Dunning') : (name + '.html')}
				style={{display: 'block'}}
				target={name === 'github' ? "_blank" : ""}>
				<div className="navBox">
					<div className="navBand"/>					
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
			<a>
				<Transition visible={visible} animation='slide down' duration={700}>
					<div className="dropBox">AA</div>
				</Transition>
			</a>
		</div>)
	}
}
