import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import HomePages from "./pages/HomePages";
import Countries from "./pages/Countries";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
 <Router >
   <Route exact path='/' component={HomePages}/>
   <Route exact path='/countries' component={Countries}/>
   <Route exact path='/countries/:population' component={CountryDetails} />
 </Router>
  );
}

export default App;
