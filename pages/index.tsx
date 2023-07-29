import Nav from '@/components/sections/01Nav'
import Header from '@/components/sections/02Header'
import Mission from '@/components/sections/03Mission'
import Tokenomics from '@/components/sections/04Tokenomics'
import Partners from '@/components/sections/05Partners'
import Roadmap from '@/components/sections/06Roadmap'
import Feedback from '@/components/sections/07Feedback'
import Head from 'next/head'

export default function Home() {
  return (
        <>
            <Head>
                <title>SYNDICATE</title>
                <meta httpEquiv="content-language" content="en" />
                <meta name="description" content="Shiba inu had an affair with a wolf and a wolf cub was born. His mission is to unite everyone and become the king of memecoins" />
                <link rel="shortcut icon" href="/images/wolf-ticker.png" />
            </Head>
            
            <Header />
            <Mission />
            <Tokenomics />
            <Partners />
            <Roadmap />
            <Feedback />
        </>
  )
}
