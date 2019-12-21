import React, { Component } from 'react';

class Module3 extends Component {
    render() {
        return (
            <div class="bigdivcontent3">
            <div class="leftct3">
              <p><strong>Chi tiết thanh toán</strong></p>
              <div class="hvtct3" >
                  <label>
                    Họ và tên:
                  </label>
                  
                    <form  >
                      <input class="ct3f" type="text" placeholder="Nguyễn Văn A"></input>
                    </form>
                    <div class="sdtct3">
                  <label>
                    Số điện thoại:
                  </label>
                  <div>
                    <form >
                      <input class="ct3f" type="number" placeholder="xxx-xxx-xxx"></input>
                    </form>
                  </div>
                </div>
                <div class="dcct3">
                  <label>
                  Địa chỉ:
                  </label>
                  <div>
                    <form >
                      <input class="ct3f" type="text" placeholder="..."></input>
                    </form>
                  </div>
                </div>
                  
                </div>
            </div>
            <div class="rightct3">
                <div class="tgtct3" >
                  <label>
                  Tổng giá tiền:
                  </label>
                  <div>
                    <form >
                      <input class="ct3f2" type="text" ></input>
                    </form>
                  </div>
                </div>
                <div class="psct3">
                 <div class="psct3">
                  <label>
                  Phí ship:
                  </label>
                  <div>
                    <form >
                      <input class="ct3f2" type="text" ></input>
                    </form>
                  </div>
                  </div>
                </div>
                <div class="cnnhs1">
                  Chi nhánh nhà hàng số 1
                </div>
                <div class="tttct3">
                  <label>
                  Tổng thanh toán:
                  </label>
                  <div>
                    <form >
                      <input class="ct3f2" type="text" ></input>
                    </form>
                  </div>
                </div>
                <div class="ttct3">
                  <form>
                    <input class="sizett" type ="submit" value="THANH TOÁN"></input>
                  </form>
                </div>
                
  
            </div>
            
        </div>
        );
    }
}

export default Module3;