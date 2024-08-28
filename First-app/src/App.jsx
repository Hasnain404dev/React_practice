
import Card from "./components/card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./App.css"
function App() {
  

  return (
    <>
      <Navbar/>
      <div className="card-section">
        <Card title="This is card one" description="This is the card description using props"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
