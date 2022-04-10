import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<HomePage />} exact />
      </Route>
    </Routes>
  );
};

export default App;
