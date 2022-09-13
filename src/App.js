import Footer from './components/Footer';
import Menu from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
