import React, { Component } from 'react';

class Module5 extends Component {
    render() {
        return (
            <div bigdivcontent5>
        <div class="left5" >
          <div>
            <input id="thongtin" type="button" value="Thông tin"/>
          </div>
          <div>
            <input id="lsdonhang" type="button" value="Lịch sử đơn hàng"/>
          </div>
        </div>
        <div class="right5">
        <ul>
            <li>
            <label>
                Họ và tên:    
              </label>
            </li>
            <li>
            <form >

                  <input id="cc4"  type="text" placeholder="Nguyễn Văn A"/>
             
        </form >

            </li>
            <li>
            <label>
                Số điện thoại:
                  
              </label>
            </li>
            <li>
            <form  >
             
                  <input id= "cc4"  type="text" placeholder="xxxx-xxxx-xxx"/>
              
        </form>
            </li>
            <li>
            <label>
                Địa chỉ:
                  
              </label>
            </li>
            <li>
            <form >
              
               
                  <input id= "cc4"  type="text" placeholder="..."/>
             
        </form>
            </li>
            <li>
              <label>
                Email:
              </label>
            </li>
            <li>
            <input id ="cc4" type="text" placeholder="...@email.com"></input>
            </li>
            
            
          </ul>
        </div>
      </div>
      
        );
    }
}

export default Module5;