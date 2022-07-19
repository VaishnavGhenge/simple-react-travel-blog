import './App.css'
import data from "./data"
import Section from './Section'
import Navbar from "./Navbar"

function App() {
  const sections= data.map(
    item => <Section
    key={item.id}
    className="travel-sec"
    img={item.imageUrl}
    loc={item.location}
    map-url={item.googleMapsUrl}
    title={item.title}
    start={item.startDate}
    end={item.endDate}
    des={item.description}
    />
  )

  return (
    <div className="App">
      <Navbar className="navbar"></Navbar>
      <div className="sections">
        {sections}
      </div>
    </div>
  )
}

export default App
