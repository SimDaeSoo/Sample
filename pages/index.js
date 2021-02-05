import Head from 'next/head';
import { Row } from 'antd';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Row>Hello World?</Row>
      </main>
    </div>
  )
}
