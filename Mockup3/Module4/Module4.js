import React, { Component } from 'react';

class Module3 extends Component {
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
                    <div class="imgBox-r">
                    <form method="post">
                           <img src={process.env.PUBLIC_URL + '/Image/cart-icon.png'} alt="Ảnh món ăn 1"  />
                            <div style={{float: "right"}}>
                            <div><input type="file" name="imgUpload"/></div>
                            <input type="submit" value="Save"/> </div>
                            </form>
                    </div>
                
                <div>
                    <form method="post">
                    <div class="formBlock"><input type="text" name="foodName" value="Tên món ăn"/></div>
                    <div class="formBlock"><input type="text" name="price" value="Giá tiền"/></div>
                    <div class="formBlock"><input type="text" name="descr" value="Mô tả món ăn"/></div>
                    <div class="formBlock"><input type="submit" value="Save"/> </div>
                    </form>
                </div>
                    </div>
                    
                    <div style={{marginTop:"40px"}}> <button onClick= { () => this.addForm() }>Thêm món ăn</button></div>
                </div>
            
            
            
            </div>

        );
    }
    addForm = () => {
     /*   innerHTML={

        <div>
            <form method="post">
            <div class="formBlock"><input type="text" name="foodName" value="Ten mon an"/></div>
            <div class="formBlock"><input type="text" name="price" value="Gia tien"/></div>
            <div class="formBlock"><input type="text" name="descr" value="Mo ta"/></div>
            <div class="formBlock">Them anh: <input typer="file" name="img"/></div>
            <div class="formBlock"><input type="submit" value="Save"/> </div>
            
            </form>
        </div>
        } */

    }

}

export default Module3;                