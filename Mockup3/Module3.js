import React, { Component } from 'react';

class Module3 extends Component {
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
                   <div class="formBlock">
                        <div class="textBox">Chi nhanh 1</div>
                        <form method="post">
                            <div class="sText">Dia chi:</div>
                            <input type="text" name="address" value=""/>
                            <div class="sText">So dien thoai:</div>
                            <input type="text" name="phoneNumber" value=""/>   
                            <div class="sText">Gio lam viec</div>
                            <input type="text" name="workHour" value=""/>
                            <div><input type="submit" value="Save"/> </div>
                        </form>
                    </div>
                     <div class="imgBox">
                        <img src={process.env.PUBLIC_URL + '/Image/cart-icon.png'} alt="Shrimp image" style={{float:"right"}} />
                        <form method="post">
                            <input type="file" name="imgUpload"/>
                            <input type="submit" value="Save"/>
                            </form>
                        </div>          
                </div>
                </div>
        );
    }
}

export default Module3;                