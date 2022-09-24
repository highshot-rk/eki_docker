import styles from '../styles/Home.module.css';
import { Header } from '../component/templates/Header';
import { Main } from '../component/templates/Main';
import { Footer } from '../component/templates/Footer';
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Main />
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
      <style>
        {`
          .chat {
            top:calc(50% - 200px);
            left: calc(50% - 450px);
            width: 900px;
            height: 400px;
            z-index:1111;
            border-radius: 10px;
            padding: 40px;
            background: #fff;
            box-shadow: 0 0 20px #333;
            animation: chat 1.5s ease;
            opacity:1;
          }
          @keyframes chat {
            0%{
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}
