import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';

import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import './App.css'
import { useTheme } from './hooks/useTheme';
import Update from './pages/update/Update';
// import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/update/:id">
            <Update />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/recipes/:id">
            <Recipe />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
