

import './App.css'
import Header from "../components/header"
import Entry from "../components/entry"
// import fuji from "../src/assets/mount-fuji.jpg"
import data from "./data"



function App() {

  const dataElements= data.map(dataElem=> 
  {
    return <Entry key={dataElem.id} 
    {...dataElem} />
  }
  )

  return (
    <>
    <Header/>
    {dataElements}
    
    </>
  )
}

export default App
