import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const reducer = (state = 0, action) => {
    return state;
}

const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
    dispatch({ type: "FOO" });
    // do something async
    dispatch({ type: "BAR" });
});
