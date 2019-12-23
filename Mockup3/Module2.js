import React, { Component } from 'react';

class Module2 extends Component {
    render() {
        return (
            <div>
                <div class="module2header">
                    <p>aaaaa</p>
                </div>
                <div class="module2left">
                    <div >
                    <div class="list"><a href="https://google.com">Gioi thieu chung</a></div>
                    <div class="list"><a href="https://apple.com">Chi nhanh</a></div>
                    <div class="list"><a href="https://google.com">Khai vi</a></div>
                    <div class="list"><a href="https://google.com">Mon chinh</a></div>
                    <div class="list"><a href="https://google.com">Trang mieng</a></div>
                    <div class="list"><a href="https://google.com">Khuyen mai</a></div>
                    <div class="list"><a href="https://google.com">Quan li sub-admin</a></div>
                    <div class="list"><a href="https://google.com">don dat hang</a></div>
                    
                    </div>
                </div>
                <div class="module2right">
                   <div class="textBox">
                        Anh
                    </div>
                    <div class="imgBox">
                        <img src={process.env.PUBLIC_URL + '/Image/cart-icon.png'} alt="Shrimp image" style={{float:"left"}} />
                        <form method="post">
                            <input type="file" name="imgUpload"/>
                            <input type="submit" value="Save"/>
                            </form>
                        </div>
                    <div class="imgBox">
                        <img src={process.env.PUBLIC_URL + '/Image/cart-icon.png'} alt="ollooo"   />
                        <form method="post">
                            <input type="file" name="imgUpload"/>
                            <input type="submit" value="Save"/>
                            </form>
                        </div>
                    
                    <div class="textBox">
                        Thong tin
                    </div>
                    <div class="editBox">
                    <form method="post" >
                        <textarea name="descr" rows="10" cols="80" value="asdasdawds"/>
                        <input type="submit" value="Save"/>
                        </form>
                        </div>
                     <div class="textBox">
                        Lien he   </div>
                          <div class="footer">


        <div class="feedback">
          <p><strong>Follow us</strong></p>
            <img class="icon" src={process.env.PUBLIC_URL + '/Image/fb-icon.jpg'}/> <form> <input type="text" name="face" value="facebook.com"/> <input type="submit" value="Save"/> </form>
        </div>
        <div class="feedback">
          <img class="icon" src={process.env.PUBLIC_URL + '/Image/ig-icon.jpg'}/>   <form> <input type="text" name="insta" value="instagram"/> <input type="submit" value="Save"/> </form>
        </div>
        <div class="feedback">
          <p>For feedback</p>
          <img class="icon" src={process.env.PUBLIC_URL + '/Image/gm-icon.jpg'}/> <form> <input type="text" name="mail" value="nhahan4phuong@gmail.com"/> <input type="submit"  value="Save"/> </form>
        </div>
        <div class="contact">
          <p><strong>For contact</strong></p>
          <img class="icon" src={process.env.PUBLIC_URL + '/Image/phone-icon.jpg'}/><form> <input type="text" value="facebook.com"/> <input type="submit" value="Save"/> </form>

        </div>
           </div>
      </div>


                </div>

                           
        );
    }
}

export default Module2;