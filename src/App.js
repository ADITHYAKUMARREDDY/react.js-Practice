import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"

// import { Usestate } from "./func_component/usestate";
// import { Get } from "./func_component/get";
import AddEmployye from "./func_component/AddEmployye";
// import { Deletedata } from "./func_component/Delatedata";

import Apdate from "./components/Apdate";

function App() {
  return (
    <div className="App">
      {/* <ApiTable/> */}
      {/* <Rewite /> */}
      <Apdate/>
<AddEmployye/>
    </div>
  );
}

export default App;
