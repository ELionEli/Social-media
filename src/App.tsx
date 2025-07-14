import { use } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { AuthenticationPage } from "./pages/AuthenticationPage";
import { NotFoundPage } from "./pages/page-not-found/NotFoundPage";
import { Footer } from "./components/footer/Footer";
import { AuthenticationContext } from "./store/AuthenticationContext";
import { AUTHENTICATION_CONTEXT_DEFAULT_VALUE } from "./constants";

function App() {
  const store = use(AuthenticationContext);

  return (
    <AuthenticationContext value={AUTHENTICATION_CONTEXT_DEFAULT_VALUE}>
      <BrowserRouter>
        <div className="app-container">
          {store.isLoggedIn ? <Header /> : null}
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
        </div>
      </BrowserRouter>
    </AuthenticationContext>
  );
}

export default App;
