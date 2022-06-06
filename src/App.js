import Intro from "./COMPONENT/Intro"
import './App.css';
import NavigationBar from "./COMPONENT/NavigationBar"
import "./style/landingpage.css"
import Tranding from "./COMPONENT/Tranding"
import Superhero from "./COMPONENT/Superhero."
function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
      <NavigationBar />
    <Intro/>
      </div>
      {/*end of intro */}
      
      {/*tranding section*/}
      <div className="tranding">
        <Tranding/>
      </div>
      {/* end of tranding section*/}
      <div className="super">
        <Superhero/>
      </div>
    </div>
  );
}

export default App;
