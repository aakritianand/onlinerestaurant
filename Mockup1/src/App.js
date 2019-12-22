import React from 'react';
import './AppContent.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Introduction from './Introduction/Introduction';
import Footer from './Footer/Footer';
import Department from './Department/Department';
import Menu from './Menu/Menu';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing : 'Main'
		};
	}

	edit = (page) => {
		this.state.editing = page;
		this.handleUpdate();
	}

	handleUpdate = () => {
		this.setState({});
	};
	
	renderContent = () => {
		switch (this.state.editing) {
			case 'Main':
				return this.renderMain();
			case 'Introduction':
				return this.renderIntroduction();
			case 'Department':
				return this.renderDepartment();
			case 'Menu':
				return this.renderMenu();
			default:
				return this.renderMain();
		}
	}

	renderMain = () => {
		return (
			<Main/>
		);
	}

	renderIntroduction = () => {
		return (
			<Introduction/>
		);
	}

	renderDepartment = () => {
		return (
			<Department/>
		);
	}

	renderMenu = () => {
		return (
			<Menu/>
		)
	}

   	render() {
      	return (
         	<div>
            	<Header edit = {this.edit} />
            	{this.renderContent()}
				<Footer/>
			</div>
      	);
   	}
}

export default App; 
