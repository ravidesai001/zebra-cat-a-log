import Nav from "./components/nav"
import Card from "./components/catCard"
import Add from "./components/add"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';


function App() {
  

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = "/" exact component={Home} />
          <Route path = "/add" component={Add} />
        </Switch>
      </div>
    </Router>

  );
}

function Home(){
  const cards = [];

  for(let i = 0; i < 5; i++){
    cards.push(<li><Card imgsrc=""/></li>)
  }

  return(
    <div className="App">
      <Nav />
      <ul style={{listStyleType: "none"}}>
        {cards}
      </ul>
    </div>
    
  );
}

export default App;
