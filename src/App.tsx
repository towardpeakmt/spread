import { Provider } from "react-redux";
import ApppRouting from "@/routes";
import { store } from "./store";

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <ApppRouting />
    </Provider>
  );
}

export default App;
