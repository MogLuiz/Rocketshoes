// Packages
import { BrowserRouter } from "react-router-dom";

// Components
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";

// Hooks
import { CartProvider } from "./hooks/useCart";

// Routes
import Routes from "./routes";

// Styles
import GlobalStyles from "./styles/global";

const App = (): JSX.Element => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
