import Hero from '../components/Hero'
import NewLetter from '../components/NewLetter'
import Testimonial from '../components/Testimonial'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'

const Home = () => {
  return (
    <div>   
        <Hero />
        <FeaturedDestination />
        <ExclusiveOffers />
        <Testimonial />
        <NewLetter />
    </div>
  )
}

export default Home