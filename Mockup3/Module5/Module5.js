import React, { Component } from 'react';

class Module5 extends Component {
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
                <div class="textBox" style={{width:"150px"}}>Ảnh quảng cáo</div>
                <div class="imgBox">
                        <img src={process.env.PUBLIC_URL + '/Image/cart-icon.png'} alt="placeholder" style={{float:"left"},{margin:"10px"}} />
                        <form method="post">
                            <input type="file" name="imgUpload"/>
                            <input type="submit" value="Save"/>
                            </form>
                        </div>  
                <div class="imgBox">
                        <img src={process.env.PUBLIC_URL + '/Image/cart-icon.png'} alt="placeholder" style={{float:"left"},{margin:"10px"}} />
                        <form method="post">
                            <input type="file" name="imgUpload"/>
                            <input type="submit" value="Save"/>
                            </form>
                        </div> 
                <div class="imgBox">
                        <img src={process.env.PUBLIC_URL + '/Image/cart-icon.png'} alt="placeholder" style={{float:"left"},{margin:"10px"}} />
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

export default Module5;      