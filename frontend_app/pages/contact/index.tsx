import { Header } from '../../component/templates/Header';
import { Footer } from '../../component/templates/Footer';
export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact py-5">
        <div className="contact-logo p-5">
          <div className="text-76 px-5">お問い合わせ</div>
          <h4 className="px-5 py-3">サービスについてご質問・ご相談はこちらからお問い合わせください。</h4>
        </div>
        <div className="contact-info w-50 p-5">
          <form action="#" method="post">
            <div className="full-name py-4 d-flex justify-content-between align-items-end">
              <div className="first-name px-3 w-100">
                <label className="py-1">
                  お名前<span>必須</span>
                </label>
                <input type="text" className="form-control" placeholder="姓"></input>
              </div>
              <div className="last-name px-3 w-100">
                <input type="text" className="form-control" placeholder="名"></input>
              </div>
            </div>
            <div className="user-email py-4 d-flex justify-content-between align-items-end">
              <div className="px-3 w-100">
                <label className="py-1">
                  電子メール<span>必須</span>
                </label>
                <input type="text" className="form-control" placeholder="sample@eikatu.co.jp"></input>
              </div>
            </div>
            <div className="phone-number py-4 d-flex justify-content-between align-items-end">
              <div className="px-3 w-100">
                <label className="py-1">電話番号</label>
                <input type="email" className="form-control" placeholder="00-0000-0000"></input>
              </div>
            </div>
            <div className="contents py-4 d-flex justify-content-between align-items-end">
              <div className="px-3 w-100">
                <label className="py-1">
                  お問い合わせ内容<span>必須</span>
                </label>
                <textarea
                  className="contact-contents form-control"
                  name="contents"
                  rows={20}
                  placeholder="ご自由にお書きください"
                ></textarea>
              </div>
            </div>
            <div className="py-3 text-center">
              <button type="submit" className="submit-btn btn bg-3759C1 text-white">
                お問い合わせを送信する
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
