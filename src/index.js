import {React, createRoot} from "./whichReact";
// import UseContextPage from "./pages/UseContextPage";
import UseEffectPage from "./pages/UseEffectPage";
// import UseCallbackPage from "./custom/UseCallbackPage";
// import jsx from "./pages/ExamplePage";
// import TransitionPage from "./pages/TransitionPage";
// import LifeCyclePage from "./pages/LifeCyclePage";
// import SuspensePage from "./pages/SuspensePage";
// import UseCallbackPage from "./pages/UseCallbackPage";
// import UseMemoPage from "./pages/UseMemoPage";
// import SuspensePage from "./custom/SuspensePage";

// import "./UseContextPage.css";
import "./index.css";

// ReactDOM.render(jsx, document.getElementById("root"));

const root = createRoot(document.getElementById("root"));

// root.render(jsx);
// root.render(<UseMemoPage />);
// root.render(<UseCallbackPage/>);
root.render(<UseEffectPage />);

console.log("React", React.version); //sy-log
