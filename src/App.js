import './App.css';
import configureStore from './store/store'
import { Provider } from "react-redux";
import Splashscreen from "./components/SplashScreen/Splashscreen";

const store = configureStore()

function App() {
  return (
        <div className="App">
          <Provider store={store}>
              <h1>Test</h1>
                <Splashscreen />
          </Provider>
        </div>
  );
}

export default App;
