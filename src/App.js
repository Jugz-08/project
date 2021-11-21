
import CardList from "./components/CardList";
import { Navbar } from "./components/Navbar";
import {Router,Route} from 'react-router-dom'
import AddForm from "./components/AddForm";
import history from './history'
import BookDetailPage from "./components/BookDetailPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <Router history={history}>
      <Route path="/"  exact component={CardList}/>
      <Route path="/book/:id"  exact component={BookDetailPage}/>
      <Route path="/createBook" exact component={AddForm}/>
                    
                    
                   
              
                
      </Router>
      

      </header>
    </div>
  );
}

export default App;
