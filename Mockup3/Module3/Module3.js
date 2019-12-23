import React, { Component } from 'react';

class Module3 extends Component {
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
                <div class="module2right">
                <div class="imgBox" style={{float:"right"}}>
                        <img src={process.env.PUBLIC_URL + '/Image/department1.jpg'} alt="somethings" style={{float:"right"}} />
                        <form method="post">
                           <div style={{float:"right"}}> <input type="submit" value="Save"/></div>
                            </form>
                        </div>        
                   <div class="formBlock">
                        <div class="textBox">Chi nhánh 1</div>
                        <form method="post">
                            <div class="sText">Địa chỉ:</div>
                            <input type="text" name="address" value=""/>
                            <div class="sText">Số điện thoại:</div>
                            <input type="text" name="phoneNumber" value=""/>   
                            <div class="sText">Giờ phục vụ</div>
                            <input type="text" name="workHour" value=""/>
                            <div><input type="submit" value="Save"/> </div>
                        </form>
                    </div>
                       
                </div>
                </div>
        );
    }
}

export default Module3;                