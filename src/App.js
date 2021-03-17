import './App.css';
import configureStore from './store/store'
import { Provider } from "react-redux";
import Splashscreen from "./components/SplashScreen/Splashscreen";

const store = configureStore()

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <h1>Test</h1>
            <Splashscreen />
        </div>
      </Provider>
  );
}

export default App;
