import React, { Component } from 'react';
import './Module1.css'
class Module1 extends Component {
    render() {
        return (
            <div class ="bigdiv">
              
              <div class="signinbox">
                
                <div class="signintext">
                  <p><strong>Sign in</strong></p>
                </div>
                  <form>                  
                    
                    <div class="usndiv">
                      <label class="lb">
                        User Name:
                        <input class="usn" type="text"  />
                      </label>
                    </div>
                    
                    <div class="pw">  
                      <label >
                      Password:
                      <input class="usn" type="text" placeholder="Enter password" />
                      </label>
                    </div>                      
                     
                      <button class="si" type="submit" onClick = { () => this.props.edit('Module5') }>SIGN IN</button>                    
                    </form>
              </div>
            
        <div class="signupbox">
        <p><strong>Sign up</strong></p>
              <form>
                <label class="lb">
                    User Name:
                    <input class="usn1" type="text" name="User name" />
                </label>
                <label class="lb">
                      Password:
                      <input class="pw1"  type="password" placeholder="Enter Password" name="psw"  />
                </label>
                <label class="lb">
                      Check Password:
                      <input class="pw2"  type="password" placeholder="Check Password" name="psw"  />
                </label>
                <label class="lb">
                      Họ và tên:
                      <input class="hvt"  type="text"   />
                </label>
                <label class="lb">
                      Số điện thoại:
                      <input class="sdt"  type="text"   />
                </label>
                <label class="lb">
                      Địa chỉ:
                      <input class="dc"  type="number"   />
                </label>
                <label class="lb">
                      Email:
                      <input class="em"  type="text"   />
                </label>
                    <p>New user</p>
                    <button class="su" type="submit">SIGN UP</button>
              </form>
        </div>
      </div>
        );
    }
}

export default Module1;