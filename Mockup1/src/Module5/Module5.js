import React, { Component } from 'react';
import './Module5.css'
class Module5 extends Component {
    render() {
        return (
            <div bigdivcontent5>
              <div class="left5" >
                <div>
                  <button id="thongtin" onClick = { () => this.props.edit('Module5') }>Thông tin</button>
                </div>
                <div>
                  <button id="lsdonhang" onClick = { () => this.props.edit('Module6') }>Lịch sử đơn hàng</button>
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
                       <form>
                          <input id="cc4"  type="text" placeholder="Nguyễn Văn A"/>             
                      </form>
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