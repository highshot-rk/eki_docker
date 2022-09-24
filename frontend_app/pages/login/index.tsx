import React from 'react';
import { Header } from '../../component/templates/Header';
import { LoginFooter } from './loginFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  return (
    <>
      <div className="login-page">
        <Header />
        <div className="login d-flex vw-100">
          <div className="login-back col-6"></div>
          <div className="user-info col-6 p-5 align-self-center">
            <div>
              <div className="login-info p-4">
                <h1 className="text-center">Welcome</h1>
                <form action="#" method="post">
                  <div className="py-2">
                    <FontAwesomeIcon icon={faUser} style={{ fontSize: 20, color: '#000' }} className="user-icon" />
                    <input type="text" className="user_id form-control px-5" placeholder="ログインID" />
                  </div>
                  <div className="py-2">
                    <FontAwesomeIcon icon={faLock} style={{ fontSize: 20, color: '#000' }} className="password-icon" />
                    <input type="password" className="user_pwd form-control px-5" placeholder="パスワード" />
                  </div>
                  <div className="py-2">
                    <input type="checkbox" name="save-info" id="formcheck"></input>
                    <label htmlFor="formcheck" className="px-3">
                      ログイン情報を保存
                    </label>
                  </div>
                  <div className="py-2 forget-pass">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      style={{ fontSize: 20, color: '#fff', aspectRatio: '1/1' }}
                      className="right-icon bg-3759C1 rounded-circle"
                    />
                    <span className="px-2">パスワードをお忘れの方はこちら</span>
                  </div>
                  <div className="py-2 login-help">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      style={{ fontSize: 20, color: '#fff', aspectRatio: '1/1' }}
                      className="right-icon bg-3759C1 rounded-circle"
                    />
                    <span className="px-2">ログイン方法がわからない方はこちら</span>
                  </div>
                  <div className="py-4">
                    <button type="submit" className="submit-btn btn bg-3759C1 text-white">
                      ログイン
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <LoginFooter />
      </div>
    </>
  );
}
