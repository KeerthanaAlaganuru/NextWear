
import Hero from "../Components/Hero/Hero"
import NewCollections from "../Components/NewCollections/NewCollections"
import NewsLetter from "../Components/NewsLetter/NewsLetter"
import Offers from "../Components/Offers/Offers"
import Popular from "../Components/Popular/Popular"

function Shop() {
  return (
    <>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter/>
        
    </>
  )
}

export default Shop