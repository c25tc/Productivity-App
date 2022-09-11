import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Day from '../components/Day';
import Task from '../components/Task';
import NewTask from '../components/NewTask';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name={"tasks"} left={"green"} middle={"blue"} right={"pink"} />

      <Day day={"today"} />
      <Task name={"english reading"} />
      <Task name={"math hw"} />
      <NewTask />
      <Day day="tommorow" />
      <Task name={"english reading"} />
      <Task name={"math hw"} />
      <NewTask />
      <Day day="thursday" />
      <Task name={"english reading"} />
      <Task name={"math hw"} />
      <NewTask />
      <Day day="friday" />
      <Task name={"english reading"} />
      <Task name={"math hw"} />
      <NewTask />
      <Footer left={"green"} middle={"blue"} right={"pink"} />
    </div>
  );
}
