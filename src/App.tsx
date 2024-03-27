import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import { OrderProvider } from "./context/context";
import Order from "./pages/order/Order";

function App() {
  return (
    <div>
      <Header />
      <OrderProvider>
        <Order />
      </OrderProvider>
      <Footer />
    </div>
  );
}

export default App;
