import Head from "next/head";
import Navbar from "@/components/Navbar";
import AddBook from "@/components/AddBook";
import HomePage from "@/components/HomePage";


export default function Home() {
  return (
    <div>
      <Head>
        <title> Book Review App</title>
      </Head>
      <Navbar />
      <main>
       <HomePage />
      </main>
    </div>
  );
}
