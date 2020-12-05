import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import MovieList from './components/MovieList'
import AddMovies from './components/AddMovies'
import {MovieProvider} from './components/MovieContext'

function App() {
  return (
    //the movies state will now be available on the components
    <MovieProvider>
        <div className="App">
          <Nav/>
          <MovieList/>
          <AddMovies/>
      </div>
    </MovieProvider>
  );
}

export default App;
