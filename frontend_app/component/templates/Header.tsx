import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuIcon } from '../../component/Icon/MenuIcon';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const router = useRouter();
  const [isShow, setShow] = useState(false);
  const [arrowDown, setUp] = useState(true);
  const toggle = () => {
    setShow(!isShow);
  };
  const toggleArrow = () => {
    setUp(!arrowDown);
  };
  return (
    <>
      <div className="nav-head">
        <div className="header d-flex align-items-center">
          <div className="logo col-5 col-md-4 float-left">
            <Link href="/">
              <div></div>
            </Link>
          </div>
          <div className="col-7 col-md-8 d-flex justify-content-end align-items-center p-0 menu">
            <div className="menu-title p-0">
              <ul className="list-unstyled d-flex m-0">
                <li style={router.pathname === '/login' || router.pathname === '/contact' ? { display: 'none' } : {}}>
                  <Link href="/contact">お問い合わせ</Link>
                </li>
                <li style={router.pathname === '/login' ? { display: 'none' } : {}}>
                  <Link href="/">詳細など</Link>
                </li>
                <li style={router.pathname === '/login' ? { display: 'none' } : {}}>
                  <Link href="/login">ログイン</Link>
                </li>
                <li className="lang-sel" style={router.pathname === '/login' ? { display: 'block' } : {}}>
                  <div className="lang fw-normal" id="lang-arrow" onClick={toggleArrow}>
                    <div>日本語</div>
                    <label htmlFor="lang-arrow">
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        style={{
                          fontSize: 20,
                          color: '#fff',
                          paddingLeft: '5px',
                        }}
                        className={`lang-up-down ${arrowDown ? 'active' : ''}`}
                      />
                    </label>
                  </div>
                  <div className="lang-list" style={arrowDown ? { display: 'none' } : { display: 'block' }}>
                    <ul className="list-unstyled">
                      <li>日本語</li>
                      <li>English</li>
                      <li>France</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="trial-btn text-center text-white fw-bold align-items-center"
              style={router.pathname === '/login' ? { visibility: 'hidden' } : {}}
            >
              <span>500円でお試し</span>
            </div>
            <div className="sp-menu" onClick={toggle}>
              <MenuIcon />
            </div>
          </div>
        </div>
        <div className="menu-dropdown" style={isShow ? { display: 'block' } : { display: 'none' }}>
          <div className="trial-btn-div">
            <div className="trial-btn text-center text-white fw-bold d-grid align-items-center">
              <span>500円でお試し</span>
            </div>
          </div>
          <div className="menu-title p-0">
            <ul className="list-unstyled m-0">
              <li>
                <Link href="contact">お問い合わせ</Link>
              </li>
              <li>
                <Link href="">詳細など</Link>
              </li>
              <li>
                <Link href="login">ログイン</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style>
        {`
					.lang-sel {
						position: relative;
						cursor: pointer;
					}
					.lang-up-down {
						transition: .3s ease-in-out;
					}
					.lang-up-down.active {
						transform: rotate(180deg);
						transition: .3s ease-in-out;
					}
					 .lang {
						width: auto;
						height: auto;
						background: #191919;
					}
					.lang div {
						padding-top: 5px;
					}
					.lang-sel label {
						position: absolute;
						top: calc(50% - 9px);
						right: -10px;
					}
					label svg {
						padding: 0 !important;
					}
					.lang-list {
						position: absolute;
						background: #191919;
						top: 100%;
						left: -10px;
						width: auto;
						height: auto;	
						border: 1px solid #d5d5d5;
						border-radius: 4px;
						animation: heightA .4s ease;
						opacity:1;
					}
					@keyframes heightA {
						0% {
							opacity: 0;
							top: 80%;
						}
						100% {
							opacity: 1;
							top: 100%;

						}
					}
					.lang-list ul li {
						padding: 5px 30px !important;
					}
					.lang-list ul li:hover {
						background: #3759c1;
						transition: .2s linear;
					}
					.lang-list ul li:not(:last-child) {
						border-bottom: 1px solid #d5d5d5;
					}
				`}
      </style>
    </>
  );
};
export { Header };
