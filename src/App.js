import ArrayComponent from "./hooks/useArray/ArrayComponent.js";
import DarkModeComponent from "./hooks/useDarkMode/DarkModeComponent.js";

function App() {
  return (
    <div style={{ paddingLeft: 100 }}>
      <h3>1. useArray</h3>
      <ArrayComponent />
      <h3>2. useDarkMode</h3>
      <DarkModeComponent />
    </div>
  );
}

export default App;
