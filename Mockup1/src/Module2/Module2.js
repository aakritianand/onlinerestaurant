import React, { Component } from 'react';
import './Module2.css'
class Module2 extends Component {
    render() {
        return (
            <div class="bigdivcontent2">
              
              <div>
                    <img class= "shrimp-michellin" src={process.env.PUBLIC_URL + '/Image/shrimp-michellin.jpg'}/>
              </div>
                    
                    <div class="amount">
                      <form >
                        <label class="sl">
                          Số lượng:
                          <input class="sl"  type="number"   />
                        </label>
                      </form>
                    </div>
                    
                      <div class="tienthanh">
                        <input class="tt"  type="text" placeholder="Thành tiền"   />
                      </div>
                  
                      <div>
                      <form class="totalmoney">
                        
                        <label class="cay">
                          Tổng giá tiền:
                          <input class="tgt"  type="text" placeholder="Tổng giá tiền"   />
                        </label>
                      </form>
                      </div>
                      
                      <div class="cttt">
                        <button class="chitietthanhtoan" onClick = { () => this.props.edit('Module3') }>Chi tiết thanh toán</button>
                      </div>
            </div>
      
        );
    }
}

export default Module2;