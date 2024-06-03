import {React, createRoot} from "./whichReact";
import "./index.css";
import UseCallbackPage from "./custom/UseCallbackPage";

// import jsx from "./pages/ExamplePage";
// import TransitionPage from "./pages/TransitionPage";
// import LifeCyclePage from "./pages/LifeCyclePage";
// import SuspensePage from "./pages/SuspensePage";
// import UseCallbackPage from "./pages/UseCallbackPage";
// import UseMemoPage from "./pages/UseMemoPage";
// import SuspensePage from "./custom/SuspensePage";

// ReactDOM.render(jsx, document.getElementById("root"));

const root = createRoot(document.getElementById("root"));

// root.render(jsx);
// root.render(<UseMemoPage />);
root.render(<UseCallbackPage/>);

console.log("React", React.version); //sy-log
