import React from 'react';
import Navbar from './components/Navbar';
import Newscards from './components/Newscards';
import { Switch, Route } from 'react-router-dom';


const App = () => {

  return (
    <>
      <Navbar />
     
      <div >
        <Switch>
          <Route exact path="/"><Newscards category="world" key="world" /></Route>
          <Route exact path="/business"><Newscards category="business" key="business" /></Route>
          <Route exact path="/entertainment"><Newscards category="entertainment" key="entertainment" /></Route>
          <Route exact path="/health"><Newscards category="health" key="health" /></Route>
          <Route exact path="/science"><Newscards category="science" key="science" /></Route>
          <Route exact path="/sports"><Newscards category="sports" key="sports" /></Route>
          <Route exact path="/technology"><Newscards category="technology" key="technology" /></Route>

        </Switch>
      </div>


    </>
  )
}

export default App
