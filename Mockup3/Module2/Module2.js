import React, { Component } from 'react';

class Module2 extends Component {
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
                   <div class="textBox">
                        Ảnh
                    </div>
                    <div class="imgBox" style={{float:"right"}}>
                        <img src={process.env.PUBLIC_URL + './Image/restuarant1.jpg'} alt="Restaurant1"  />
                        <form method="post">
                            <input type="submit" value="Save"/>
                            </form>
                        </div>
                    <div class="imgBox" style={{MarginLeft:"40px"}}>
                        <img src={process.env.PUBLIC_URL + './Image/restaurant2.jpg'} alt="Restaurant2"   />
                        <form method="post">
                            <input type="submit" value="Save"/>
                            </form>
                        </div>
                    
                    <div class="textBox">
                        Thông tin
                    </div>
                    <div class="editBox">
                    <form method="post" >
                        <textarea name="descr" rows="10" cols="80" value="Thay đổi description của nhà hàng"/>
                        <input type="submit" value="Save"/>
                        </form>
                        </div>
                     <div class="textBox">
                        Liên hệ   </div>
                          <div class="footer">


        <div class="feedback1">
            <img class="icon" src={process.env.PUBLIC_URL + '/Image/fb-icon.jpg'} alt="facebook"/> <form> <input type="text" name="face" value="facebook.com"/> <input type="submit" value="Save"/> </form>
        </div>
        <div class="feedback1"  style={{marginLeft:"40px"}}>
          <img class="icon" src={process.env.PUBLIC_URL + '/Image/ig-icon.jpg'}alt="insta" />   <form> <input type="text" name="insta" value="instagram"/> <input type="submit" value="Save"/> </form>
        </div>
        <div class="feedback1">
          <img class="icon" src={process.env.PUBLIC_URL + '/Image/gm-icon.jpg'} alt="email"/> <form> <input type="text" name="mail" value="nhahan4phuong@gmail.com"/> <input type="submit"  value="Save"/> </form>
        </div>
        <div class="contact1">
          <img class="icon" src={process.env.PUBLIC_URL + '/Image/phone-icon.jpg'} alt="phone"/><form> <input type="text" value="0123456789"/> <input type="submit" value="Save"/> </form>

        </div>
           </div>
      </div>


                </div>

                           
        );
    }
}

export default Module2;