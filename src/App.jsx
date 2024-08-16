import { Routes, Route } from "react-router";
import { routes } from "./consts/routes";
import { Form } from "./pages/Form";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path={routes.HOME_ROUTE} element={<Home/>}/>
        <Route path={routes.FORM_ROUTE} element={<Form/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
