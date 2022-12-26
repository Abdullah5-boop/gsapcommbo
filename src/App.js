import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
import Homepage from './Component/Homepage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState } from 'react';
import Page3 from './Component/Page3';
import Page4 from './Component/Page4';
import Page5 from './Component/Page5';
function App() {
  const [value, setvalue] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CSSTransition
        timeout={3}
        classNames='page'

      >
        <Page1></Page1></CSSTransition>,
    },
    {
      path: "/page2",
      element: <Page2></Page2>
    },
    {
      path: "/page3",
      element: <Page3></Page3>
    },
    {
      path: "/page4",
      element: <Page4></Page4>
    },
    {
      path: "/page5",
      element: <Page5></Page5>
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
