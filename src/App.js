import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import Authentication from "./pages/Authentication";
import ShopPage from "./pages/ShopPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<HomePage />} exact />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default App;
