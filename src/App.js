import './App.css';
import Navbar from'./components/nav'
import Hero from './components/hero'
import Card from './components/card'
import data from './data'

function App() {

  const cardsArray = data.map(item => {
    return (
      <Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='cards-list'>
        {cardsArray}
      </div>

      {/*<Card />*/}
    </div>
  );
}

export default App;
