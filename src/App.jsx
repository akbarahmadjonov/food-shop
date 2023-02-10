import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Body } from "./Components/Body/Body";
import { Checkout } from "./Components/Checkout/Checkout";
import { Homepage } from "./Components/pages/HomePage/Homepage";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Homepage />
      </div>
    </div>
  );
}

export default App;
