import Head from 'next/head';
import App from '../components/App';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Virides</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
      </Head>

      <main>
        <App />
      </main>
    </div>
  )
}
