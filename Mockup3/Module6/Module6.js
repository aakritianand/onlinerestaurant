import React, { Component } from 'react';

class Module6 extends Component {
    render() {
        return (
            <div>
                <div class="module2header">
                    <p>Main Admin: Nguyễn Phương Hằng</p>
                </div>
                <div class="module2left">
                    <div >
                    <div class="list"><a href="https://google.com">Giới thiệu chung</a></div>
                    <div class="list"><a href="https://apple.com">Chi nhánh</a></div>
                    <div class="list"><a href="https://google.com">Thực đơn</a></div>
                    <div class="list"><a href="https://google.com">Khuyến mãi</a></div>
                    <div class="list"><a href="https://google.com">Quản lý sub-admin</a></div>
                    <div class="list"><a href="https://google.com">Đơn hàng</a></div>
                    </div>
                </div>

                <div class="module2right" >
                    <div class="formblock">
                        <div class="textBox" style={{backgroundColor:"rgb(245, 203, 153)"}}>Sub admin 1</div>
                        <form method="post">
                            <div style={{marginLeft:"40px"}}>Họ tên:</div>
                            <input type="text" name="fname" value=""/>
                            <div style={{marginLeft:"40px"}}>Số điện thoại:</div>
                            <input type="text" name="phone" value=""/>
                            <div style={{marginLeft:"40px"}}>Địa chỉ:</div>
                            <input type="text" name="address" value=""/>
                            <div style={{marginLeft:"40px"}}>Mã số:</div>
                            <input type="text" name="id" value=""/>
                            <div style={{marginLeft:"40px"}}>Email:</div>
                            <input type="email" name="mail" value=""/>
                            <div> <input type="submit" value="Save"/></div>
                        </form>
                    </div>
                    <div class="formblock">
                        <div class="textBox" style={{backgroundColor:"rgb(245, 203, 153)"}}>Sub admin 2</div>
                        <form method="post">
                            <div style={{marginLeft:"40px"}}>Họ tên:</div>
                            <input type="text" name="fname" value=""/>
                            <div style={{marginLeft:"40px"}}>Số điện thoại:</div>
                            <input type="text" name="phone" value=""/>
                            <div style={{marginLeft:"40px"}}>Địa chỉ:</div>
                            <input type="text" name="address" value=""/>
                            <div style={{marginLeft:"40px"}}>Mã số:</div>
                            <input type="text" name="id" value=""/>
                            <div style={{marginLeft:"40px"}}>Email:</div>
                            <input type="email" name="mail" value=""/>
                            <div> <input type="submit" value="Save"/></div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Module6;            