import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const Main = () => (
  <>
    <div>
      <section className="section-1 position-relative vw-100">
        <div className="p-section-1 d-flex justify-content-between position-relative">
          <div className="p-wrap w-100 text-left position-relative">
            <div className="px-5">
              <p>良質な情報を</p>
              <p>最効率で得る</p>
              <div className="text-white sp-header-title">
                エイカツは営業リスト作成ツールです。データ収集と、メールやFAXサポートで営業の現場を、飛躍的に効率化します。
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="text-white text-center d-flex justify-content-center">
                <span></span>
                <span>業界最安値</span>
                <span></span>
              </div>
              <div className="py-2 mt-5">
                <div className="pc-btn bg-3759C1 m-auto">初月は500円でお試し</div>
              </div>
              <div className="py-2">
                <div className="pc-btn bg-302F42 m-auto">資料をダウンロードする</div>
              </div>
            </div>
          </div>
          <div className="p-wrap-com-1 col-md-7 col-sm-5">
            <Image src="/asset/img/com-1.png" alt="comp1" width={1053} height={553} />
          </div>
        </div>
        <div className="p-section-2 bg-3759C1 position-relative pt-5">
          <div className="text-center text-white mb-5">
            <h5 className="fw-bold py-2">その情報、古く重複してませんか？</h5>
            <h1 className="fw-bolder py-2">エイカツなら</h1>
            <h1 className="fw-bolder py-2">高品質の情報を低価格で取得できる</h1>
            <h6 className="fw-normal py-4">
              エイカツは営業リスト作成ツールです。<br></br>
              データ収集と、メールやFAXサポートで営業の現場を、飛躍的に効率化します。
            </h6>
          </div>
          <div className="carousel d-flex justify-content-center">
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={1000}
              centerMode={false}
              className="card-carousel d-flex justify-content-center"
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 3,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 640,
                    min: 0,
                  },
                  items: 1.5,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={true}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <div className="card pc-card text-center">
                <Image
                  src="/asset/img/card-img-1.svg"
                  className="card-img-top pc-card-img m-auto py-5"
                  alt="card-img-1.svg"
                  width={200}
                  height={200}
                />
                <div className="card-body">
                  <h5 className="card-title py-1 fw-bold text-black">
                    営業データの取得と<br></br>
                    <span className="text-3759C1">フィルター機能</span>で見やすい
                  </h5>
                  <p className="card-text fs-15 py-3 text-black">
                    週に1回のペースで最新データを更新。<br></br>
                    最新の営業データをフィルター機能で様々な視点から活用できる。
                  </p>
                  <Link href="#">
                    <div className="card-btn m-auto mt-4 text-black">詳しくみる</div>
                  </Link>
                </div>
              </div>
              <div className="card pc-card text-center">
                <Image
                  src="/asset/img/card-img-2.svg"
                  className="card-img-top pc-card-img m-auto py-5"
                  alt="card-img-1.svg"
                  width={200}
                  height={200}
                />
                <div className="card-body">
                  <h5 className="card-title py-1 fw-bold text-black">
                    メール・FAXでの<br></br>
                    <span className="text-3759C1">営業代行機能</span>
                  </h5>
                  <p className="card-text fs-15 py-3 text-black">
                    取得したデータの企業に対して<br></br>テンプレートを用いた、メール・FAXでの営業により効率化できる。
                  </p>
                  <Link href="#">
                    <div className="card-btn m-auto mt-4 text-black">詳しくみる</div>
                  </Link>
                </div>
              </div>
              <div className="card pc-card text-center">
                <Image
                  src="/asset/img/card-img-3.svg"
                  className="card-img-top pc-card-img m-auto py-5"
                  alt="card-img-1.svg"
                  width={200}
                  height={200}
                />
                <div className="card-body">
                  <h5 className="card-title py-1 fw-bold text-black">
                    <span className="text-3759C1">業界最安値</span>で<br></br>継続しやすい
                  </h5>
                  <p className="card-text fs-15 py-3 text-black">
                    初月は500円翌月以降は2,980円と業界最安値まずは、お試し下さい。
                  </p>
                  <Link href="#">
                    <div className="card-btn m-auto mt-4 text-black">詳しくみる</div>
                  </Link>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <section className="section-2 position-relative vw-100">
        <div className="p-section-1">
          <div className="header-title text-center mb-5">
            <p className="fs-5 fw-bolder text-3759C1">FEATURES</p>
            <p>
              エイカツ<span>の特徴</span>
            </p>
          </div>
          <div className="pc-com-2 m-auto text-center py-5 position-relative eikatsu w-100">
            <Image src="/asset/img/section-2-com.png" className="w-75" width={1000} height={500} alt="com2" />
          </div>
          {/* for sp */}
          <div className="sp-com-2">
            <div className="text-center">
              <Image src="/asset/img/com-2.png" alt="com-2.png" className="w-75 m-auto" width={400} height={200} />
            </div>
            <div className="d-flex align-items-center justify-content-center px-3 py-4">
              <div className="com-2-circle align-items-center row py-1 mx-2">
                <span>Point</span>
                <h3 className="bolder p-0">01</h3>
                <p className="bold p-0 text-center">
                  最新データ<br></br>取得機能
                </p>
              </div>
              <div className="com-2-circle align-items-center row  py-1 mx-2">
                <span>Point</span>
                <h3 className="bolder p-0">02</h3>
                <p className="bold p-0 text-center">
                  フィルター<br></br>機能
                </p>
              </div>
              <div className="com-2-circle align-items-center row  py-1 mx-2">
                <span>Point</span>
                <h3 className="bolder p-0">03</h3>
                <p className="bold p-0 text-center">
                  メール・FAX<br></br>営業代行
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-section-2 d-flex justify-content-between py-5">
          <div>
            <Image src="/asset/img/section-2-avatar-1.svg" alt="avatar1" width={500} height={500} />
          </div>
          <div className="part-01">
            <p>Point 01</p>
            <h2 className="py-4">
              週1回更新の最新データの取得<br></br>さらに情報元の開示で安心できる
            </h2>
            <p>
              データは週に1回更新されるので、最新情報を取得することができます。取得内容は、企業情報、住所・電話番号・FAX・メールアドレス・創業年数・従業年数などを取得可能。取得元と取得日時がわかるので、情報の信頼性が高いものとなってます。
            </p>
            <div className="py-4">
              <button className="pc-btn-2 bg-3759C1">500円でお試し</button>
            </div>
          </div>
        </div>
        <div className="p-section-3 d-flex justify-content-between py-5">
          <div className="part-02">
            <p>Point 02</p>
            <h2 className="py-4">
              フィルター機能で大量の情報の中から<br></br>必要な情報だけを選定できる
            </h2>
            <p>
              フィルター機能を用いることで、大量のデータから必要なものだけを選定することができます。都道府県・市などでのエリアで絞り込むことや、建築・生産・サービスといった業種などでもフィルターをかける事ができるので効率よく情報を選定できます。
            </p>
            <div className="py-4">
              <button className="pc-btn-2 bg-3759C1">資料ダウンロード</button>
            </div>
          </div>
          <div>
            <Image src="/asset/img/section-2-avatar-2.svg" width={500} height={500} alt="avatar2" />
          </div>
        </div>
        <div className="p-section-4 d-flex justify-content-between py-5">
          <div>
            <Image src="/asset/img/section-2-avatar-3.svg" width={500} height={500} alt="avatar3" />
          </div>
          <div className="part-03">
            <p>Point 03</p>
            <h2 className="py-4">
              メール・FAX送信をサポート、デジタル営業から<br></br>開封率の確認まで、営業の手間を削減
            </h2>
            <p>
              取得した企業に対して、メール・FAXでのデジタル営業が可能。テンプレート文章を選んで、送るだけなので、手間を削減できる。また、メールの開封率を確認することができるので、興味を持ってくれている企業を知る事ができ後の営業に繋げやすいです。
            </p>
            <div className="py-4">
              <button className="pc-btn-2 bg-3759C1">資料ダウンロード</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-3 position-relative">
        <div className="p-section-1 d-flex">
          <div className="row header-title text-center mb-5 w-100">
            <p className="fs-5 text-3759C1">PRICE</p>
            <p className="fs-4">料金プラン</p>
          </div>
          <div className="d-flex pc-card-group-2 justify-content-center px-3">
            <div className="pc-card-2 mx-3 col-6">
              <div className="back-mark fw-bold d-flex align-items-center justify-content-center">
                業界<br></br>最安値
              </div>
              <div className="card-header">
                <div className="card-contents px-5">
                  <p className="fw-bold">初月お試しプラン</p>
                  <div className="py-4">
                    <span className="fs-5">¥</span>
                    <span className="fw-bolder text-3759C1 fs-1">500</span>
                    <span className="fs-5">/月</span>
                  </div>
                  <div>
                    <p>企業データ取得</p>
                  </div>
                </div>
                <div className="card-btn-2">フィルタリング機能あり</div>
                <div className="mt-4 py-2">
                  <button className="btn bg-3759C1 text-white w-75">今すぐ相談する！</button>
                </div>
              </div>
              <div className="card-footer fw-bold">
                <div className="py-2">
                  <FontAwesomeIcon icon={faCheck} style={{ fontSize: 20, color: '#3759C1' }} />
                  <span className="px-3">データ取得機能</span>
                </div>
                <div className="py-2">
                  <FontAwesomeIcon icon={faCheck} style={{ fontSize: 20, color: '#b2b2b2' }} />
                  <span className="px-3 text-gray">メール／FAXの代行営業</span>
                </div>
                <div className="py-2">
                  <FontAwesomeIcon icon={faCheck} style={{ fontSize: 20, color: '#b2b2b2' }} />
                  <span className="px-3 text-gray">自動データ更新</span>
                </div>
              </div>
            </div>
            <div className="pc-card-2 mx-3 col-6">
              <div className="card-header">
                <div className="card-contents px-5">
                  <p className="fw-bold">スタンダードプラン</p>
                  <div className="py-4">
                    <span className="fs-5">¥</span>
                    <span className="fw-bolder text-3759C1 fs-1">2,980</span>
                    <span className="fs-5">/月</span>
                  </div>
                  <div>
                    <p>企業データ取得メール・FAXでの代行営業開封率の確認</p>
                  </div>
                </div>
                <div className="card-btn-2">フィルタリング機能あり</div>
              </div>
              <div className="card-footer fw-bold">
                <div className="py-2">
                  <FontAwesomeIcon icon={faCheck} style={{ fontSize: 20, color: '#3759C1' }} />
                  <span className="px-3">データ取得機能</span>
                </div>
                <div className="py-2">
                  <FontAwesomeIcon icon={faCheck} style={{ fontSize: 20, color: '#3759C1' }} />
                  <span className="px-3">メール／FAXの代行営業</span>
                </div>
                <div className="py-2">
                  <FontAwesomeIcon icon={faCheck} style={{ fontSize: 20, color: '#3759C1' }} />
                  <span className="px-3">自動データ更新</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-section-2 bg-3759C1 d-flex position-relative">
          <div className="text-white industry-field d-flex row w-100">
            <div className="d-flex w-100 mb-4">
              <div className="industry-img col-xl-7 col-lg-5 col-md-5">
                <Image src="/asset/img/com-2.png" alt="com-2.png" width={1000} height={500} />
              </div>
              <div className="industry-info col-xl-5 col-lg-7 col-md-7 d-flex align-items-center row">
                <div className="d-flex align-items-center justify-content-start">
                  <div className="px-3">
                    <span className="industry-title">業界分野</span>
                  </div>
                  <div className="px-3">
                    <span className="text-76">560</span>
                    <span>業界</span>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex industry-field-btn-group py-5 justify-content-center">
                    <div className="price d-flex row align-items-center">
                      <div>
                        <div className="industry-btn">業界レポート</div>
                      </div>
                      <div>
                        <span className="fs-4 price-yen">3,000</span>
                        <span>本以上</span>
                      </div>
                    </div>
                    <div className="price d-flex row align-items-center">
                      <div>
                        <div className="industry-btn">ビジネスレポート</div>
                      </div>
                      <div>
                        <span className="fs-4 price-yen">2,000</span>
                        <span>本以上</span>
                      </div>
                    </div>
                    <div className="price d-flex row align-items-center">
                      <div>
                        <div className="industry-btn">ダミー</div>
                      </div>
                      <div>
                        <span>約</span>
                        <span className="fs-4 price-yen">2,000</span>
                        <span>万社</span>
                      </div>
                    </div>
                    <div className="price d-flex row align-items-center">
                      <div>
                        <div className="industry-btn">ダミー</div>
                      </div>
                      <div>
                        <span>約</span>
                        <span className="fs-4 price-yen">200</span>
                        <span>万件</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex industry-field-btn-group py-1 justify-content-center">
                    <div className="price d-flex row align-items-center">
                      <div>
                        <div className="industry-btn">業界レポート</div>
                      </div>
                      <div>
                        <span className="fs-4 price-yen">3,000</span>
                        <span>本以上</span>
                      </div>
                    </div>
                    <div className="price d-flex row align-items-center">
                      <div>
                        <div className="industry-btn">ビジネスレポート</div>
                      </div>
                      <div>
                        <span className="fs-4 price-yen">2,000</span>
                        <span>本以上</span>
                      </div>
                    </div>
                    <div className="price d-flex row align-items-center">
                      <div>
                        <div className="industry-btn">ダミー</div>
                      </div>
                      <div>
                        <span>約</span>
                        <span className="fs-4 price-yen">2,000</span>
                        <span>万社</span>
                      </div>
                    </div>
                    <div className="price d-flex row align-items-center">
                      <div>
                        <div className="industry-btn">ダミー</div>
                      </div>
                      <div>
                        <span>約</span>
                        <span className="fs-4 price-yen">200</span>
                        <span>万件</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex p-4 fw-normal mt-5">
              <div className="col-4 text-center p-4">
                <h1 className="text-45">100万件</h1>
                <span>データの取得本数</span>
              </div>
              <div className="col-4 text-center p-4">
                <h1 className="text-45">50</h1>
                <span>
                  ダミーダミーダミーダミーダミーダミーダミーダミー<br></br>ダミーダミーダミーダミーダミーダミーダミー
                </span>
              </div>
              <div className="col-4 text-center p-4">
                <h1 className="text-45">360</h1>
                <span>
                  ダミーダミーダミーダミーダミーダミーダミーダミー<br></br>ダミーダミーダミーダミーダミーダミーダミー
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-section-3 text-center">
          <div className="back position-relative">
            <div className="position-relative py-5">
              <div className="text-white fw-bold py-5 fs-4">
                <span>有益な情報は、</span>
                <span>営業の質を変える。</span>
              </div>
            </div>
            <div className="btn-group d-flex align-items-center justify-content-center">
              <div className="pc-btn bg-3759C1 px-2">
                <span>資料ダウンロードはこちら</span>
                <Image src="/asset/img/download-icon.svg" alt="downlaod-icon" width={20} height={20} />
              </div>
              <div className="pc-btn bg-191919 px-2">
                <span>初月500円で試してみる</span>
                <Image src="/asset/img/display-icon.svg" alt="display-icon" width={20} height={20} />
              </div>
            </div>
            <div className="btn-group d-flex align-items-center justify-content-center mt-4">
              <div className="d-flex">
                <div className="pc-btn ">
                  <span>料金ダウンロード</span>
                  <Image src="/asset/img/download-icon.svg" width={20} height={20} alt="download-icon" />
                </div>
                <div className="pc-btn">
                  <span>デモリクエストする</span>
                  <Image src="/asset/img/triangle-icon.svg" width={20} height={20} alt="triangle-icon" />
                </div>
              </div>
              <div className="pc-btn">
                <span>お問い合わせ</span>
                <Image src="/asset/img/message-icon.svg" width={20} height={20} alt="message-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);
export { Main };
