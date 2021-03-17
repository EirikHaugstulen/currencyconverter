import logo from './logo.svg';
import './App.css';
import { configureStore } from './store/store'
import {Provider} from "react-redux";

const store = configureStore()

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <h1>Test</h1>
        </div>
      </Provider>
  );
}

export default App;
