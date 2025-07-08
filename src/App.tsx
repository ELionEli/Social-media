import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { AuthenticationPage } from "./pages/AuthenticationPage";
import { NotFoundPage } from "./pages/page-not-found/NotFoundPage";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signin"
            element={<AuthenticationPage mode="signin" />}
          />
          <Route
            path="/signup"
            element={<AuthenticationPage mode="signup" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
