import Hero from "@/components/hero";
import Infoboxes from "@/components/infoboxes";

export const metadata = {
  title: 'Property Pulse - Homepage',
  description: 'Your go-to platform for real estate insights and listings.',
  keywords: 'real estate, property listings, market insights, home buying, home selling, property management',  

}

const HomePage = () => {
  return (
    
    <>
        <Hero />
        <Infoboxes />
    </> 
  )
}

export default HomePage;