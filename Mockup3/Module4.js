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
                    <div class="imgBox-r">
                        <img src={process.env.PUBLIC_URL + '/Image/cart-icon.png'} alt="Shrimp image" style={{float:"right"}} />
                        <form method="post">
                            <input type="file" name="imgUpload"/>
                            <input type="submit" value="Save"/>
                            </form>
                    </div>
                
                <div>
                    <form method="post">
                    <div class="formBlock"><input type="text" name="foodName" value="Ten mon an"/></div>
                    <div class="formBlock"><input type="text" name="price" value="Gia tien"/></div>
                    <div class="formBlock"><input type="text" name="descr" value="Mo ta"/></div>
                    <div class="formBlock"><input type="submit" value="Save"/> </div>
                    </form>
                </div>
            
                </div>
            
            
            
            </div>

        );
    }
}

export default Module3;                