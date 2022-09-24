import Link from 'next/link';
import Image from 'next/image';
import { ScrollToTop } from '../../component/Button/ScrollToTop';

const Footer = () => {
  return (
    <>
      <div className="bg-191919 footer text-white vw-100 pb-4">
        <div className="other d-flex justify-content-start">
          <div className="text-start px-4">
            <Link href="#">Top</Link>
            <Link href="#">エイカツとは</Link>
            <Link href="#">機能</Link>
            <Link href="#">料金</Link>
            <Link href="#">資料ダウンロード</Link>
          </div>
          <div className="text-start px-4">
            <Link href="#">Top</Link>
            <Link href="#">エイカツとは</Link>
            <Link href="#">機能</Link>
            <Link href="#">料金</Link>
            <Link href="#">資料ダウンロード</Link>
          </div>
        </div>
        <div className="footer-title d-flex justify-content-between">
          <div>
            <Link href="/">
              <Image src="/asset/svg/logo.svg" width="300" height="50" alt="logo" />
            </Link>
          </div>
          <div>
            <p className="mb-0">お電話でのご相談も承ります</p>
            <h3 className="mb-3">00-0000-0000</h3>
            <p>
              <span className="copyright">&copy;</span>EIKATU ダミーダミーダミーダミー
            </p>
          </div>
        </div>
        <ScrollToTop />
      </div>
    </>
  );
};
export { Footer };
