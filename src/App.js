import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="btn-group" role="group" aria-label="Nav Bar">
            <button type="button" className="btn btn-dark"><Link to='/'>Landing</Link></button>
            <button type="button" className="btn btn-dark"><Link to='/library'>Library</Link></button>
            <button type="button" className="btn btn-dark"><Link to="/album">Album</Link></button>
          </nav>
          <h1 className='site-title'>Bloc Jams</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
