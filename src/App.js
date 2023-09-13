import logo from './logo.svg';
import './App.css';
import DailyData from './DailyData';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';



function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/Daily">
          <DailyData />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
