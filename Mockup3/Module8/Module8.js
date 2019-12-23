import React, { Component } from 'react';
class Module8 extends Component {
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
                <div>
                  <ul>
                    <li>
                      <label>
                        Họ tên:   
                      </label>
                    </li>
                    <li>
                      <form >
                        <input id="cc4"  type="text" placeholder="Nguyễn Phương Hằng"/>
                      </form >
                    </li>
                    <li>
                      <label>
                        Số điện thoại:
                      </label>
                    </li>
                    <li>
                      <form >
                        <input id= "cc4"  type="phone" placeholder="xxxx-xxxx-xxx"/>
                      </form>
                    </li>
                    <li>
                      <label>
                        Địa chỉ:   
                      </label>
                    </li>
                    <li>
                      <form >
                        <input id="cc4"  type="text" placeholder="..."/>
                      </form >
                    </li>
                    
                    <li>
                      <label>
                        Mã số:
                      </label>
                    </li>
                    <li>
                      <form >
                        <input id= "cc4"  type="text" placeholder="..."/>
                      </form>
                    </li>
                    <li>
                      <label>
                        Gmail:
                      </label>
                    </li>
                    <li>
                      <input id ="cc4" type="mail" placeholder="..."></input>
                    </li>
                    <li>
                      <label>
                        Ngày bắt đầu làm việc:
                      </label>
                    </li>
                    <li>
                      <input id ="cc4" type="text" placeholder="..."></input>
                    </li>
                  </ul>
                </div>
                </div>
                </div>
        );
    }
}

export default Module8;  