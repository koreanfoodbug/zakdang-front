import Head from 'next/head'
import IntroduceSection from '../components/IndexPage/IntroduceSection';
import RequestCounselingSection from '../components/IndexPage/RequestCounselingSection';
import LawyersSection from '../components/IndexPage/LawyersSection';
import MakeNewHistorySection from '../components/IndexPage/MakeNewHistorySection';
import Carousel from '../components/IndexPage/Carousel';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="" />
      </Head>
            {
                typeof window !== 'undefined' && (
      <RequestCounselingSection />
                )
            }
      <IntroduceSection />
      <Carousel />
      <LawyersSection />
            {
                typeof window !== 'undefined' && (
      <MakeNewHistorySection />
                )
            }
      <Footer />
    </>
  )
}
