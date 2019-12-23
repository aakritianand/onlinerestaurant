import React from 'react';
import './AppContent.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Introduction from './Introduction/Introduction';
import Footer from './Footer/Footer';
import Department from './Department/Department';
import Menu from './Menu/Menu';
import Order from './Order/Order';
import Help from './Help/Help';
import Module1 from './Module1/Module1';
import Module2 from './Module2/Module2';
import Module3 from './Module3/Module3';
import Module4 from './Module4/Module4';
import Module5 from './Module5/Module5';
import Module6 from './Module6/Module6';

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
			case 'Order':
				return this.renderOrder();
			case 'Help':
				return this.renderHelp();
			case 'Module1':
				return this.renderModule1();
			case 'Module2':
				return this.renderModule2();
			case 'Module3':
				return this.renderModule3();
			case 'Module4':
				return this.renderModule4();
			case 'Module5':
				return this.renderModule5();
			case 'Module6':
				return this.renderModule6();
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

	renderOrder = () => {
		return (
			<Order/>
		)
	}

	renderHelp = () => {
		return (
			<Help/>
		)
	}

	renderModule1 = () => {
		return (
			<Module1 edit = {this.edit}/>
		)
	}

	renderModule2 = () => {
		return (
			<Module2 edit = {this.edit} />
		)
	}

	renderModule3 = () => {
		return (
			<Module3 edit = {this.edit}/>
		)
	}

	renderModule4 = () => {
		return (
			<Module4/>
		)
	}

	renderModule5 = () => {
		return (
			<Module5 edit = {this.edit}/>
		)
	}

	renderModule6 = () => {
		return (
			<Module6 edit = {this.edit}/>
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
