import Hero from '@/Components/Hero'
import { Syncopate } from 'next/font/google'



const scp = Syncopate({ subsets: ['latin'], weight:['700'] })



export default function Home() {
  return (
   <>
    <Hero/>  
   </>

  )
}
