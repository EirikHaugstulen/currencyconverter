import {applyMiddleware, createStore} from "redux";
import {rootEpic, rootReducer} from "../redux/modules/root";
import {createEpicMiddleware} from "redux-observable";
import { composeWithDevTools } from 'redux-devtools-extension';

const epicMiddleware = createEpicMiddleware()


const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(epicMiddleware)
        ),
    )
    epicMiddleware.run(rootEpic);
    return store;
}
export default configureStore;
