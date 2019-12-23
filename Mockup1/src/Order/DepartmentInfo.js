import React, { Component } from 'react';
import './Order.css'

class DepartmentInfo extends Component {
    render() {
        return (
            <div class="right5">
                <img src = {this.props.image} />    
                <p>Địa chỉ: {this.props.address} </p>
                <p>Giờ mở cửa: {this.props.openningTime} </p>
                <p>Số điện thoại: {this.props.phone}</p>
            </div>
        );
    }
}

export default DepartmentInfo;