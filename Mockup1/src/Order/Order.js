import React, { Component } from 'react';
import './Order.css'
import DepartmentInfo from './DepartmentInfo';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image : process.env.PUBLIC_URL + '/Image/department1.jpg',
            address : 'xxx',
            openningTime : 'xxx',
            phone : 'xxx'
        }
    }

    handleUpdate = () => {
		this.setState({});
	};

    setState1 = () => {
        this.state.image = process.env.PUBLIC_URL + '/Image/department1.jpg'
        this.state.address = 'xxx';
        this.state.openningTime = 'xxx';
        this.state.phone = 'xxx';
        this.handleUpdate();
    }
    
    setState2 = () => {
        this.state.image = process.env.PUBLIC_URL + '/Image/department2.jpg'
        this.state.address = 'yyy';
        this.state.openningTime = 'yyy';
        this.state.phone = 'yyy';
        this.handleUpdate();
    }

    setState3 = () => {
        this.state.image = process.env.PUBLIC_URL + '/Image/department3.jpg'
        this.state.address = 'zzz';
        this.state.openningTime = 'zzz';
        this.state.phone = 'zzz';
        this.handleUpdate();
    }

    render() {
        return (
            <div class="order">
                <div class="branch">
                    <ul>
                        <li><button onClick = { () => this.setState1() }>Chi nhánh 1</button></li>
                        <li><button onClick = { () => this.setState2() }>Chi nhánh 2</button></li>
                        <li><button onClick = { () => this.setState3() }>Chi nhánh 3</button></li>
                    </ul>
                </div>
                <div class="left5">
                    <ul>
                        <li>
                            <label>Họ tên
                                <form><input type="text" placeholder="Nguyễn Văn A"></input></form>
                            </label>
                        </li>
                        <li>
                            <label>Số điện thoại
                                <form><input type="text" placeholder="xxx-xxx-xxx"></input></form>
                            </label>
                        </li>
                        <li>
                            <label>Số người
                                <form><input type="number" placeholder="10"></input></form>
                            </label>
                        </li>
                        <li>
                            <label>Ngày
                                <form><input type="date" placeholder="xx/xx/xxxx"></input></form>
                            </label>
                        </li>
                        <li>
                            <label>Giờ
                                <form><input type="text" placeholder="00:00"></input></form>
                            </label>
                        </li>
                        <li>
                            <label>Chi tiết
                                <form><input class="details" type="text" ></input></form>
                            </label>
                        </li>
                        <li>
                            <button class="ordernow"  >Đặt bàn ngay</button>
                        </li>
                       
                    </ul>
                </div>
                <DepartmentInfo
                    image = {this.state.image}
                    address = {this.state.address}
                    openningTime = {this.state.openningTime}
                    phone = {this.state.phone}
                />
            </div>

            
        );
    }
}

export default Order;