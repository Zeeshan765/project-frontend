import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing Page/Landing";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import TopMenu from "./components/TopMenu/TopMenu";
import SelectionPage from "./components/Selection Page/SelectionPage";
import BudgetPage from "./components/Budget/BudgetPage";
import LowBudgetPage from "./components/Budget/Low Budget/LowBudgetPage";
import MidBudgetPage from "./components/Budget/Mid Budget/MidBudgetPage";
import HighBudgetPage from "./components/Budget/High Budget/HighBudgetPage";
import PeripheralPage from "./components/Peripherals/PeripheralPage";
import AboutUs from "./components/About Us/AboutUs";
import ComponentsPage from "./components/components page/ComponentsPage";
import PCBuild from "./components/cart Page/PCBuildCart";
import CustomOrder from "./components/order page/CustomOrder";
//import cart from './components/cart Page/cart';
import RequirementPC from "./components/RequirementPC/RequirementPC";
import Footer from "./components/Footer/Footer";
import CustomScreen from "./components/CustomPC/CustomPCScreen/CustomScreen";
import CustomCart from "./components/CustomPC/CustomPCScreen/CustomCart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Register/Register";
import Forget from "./components/forget/Forget";
import Reset from "./components/Reset/Reset";
import ProductDetail from "./components/Product Detail/ProductDetail";
import ComponentDetail from "./components/component Detail/ComponentDetail";
import Cart from "./components/cart Page/Cart";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import Order from "./components/order page/Order";
import Success from "./components/order success/Success";
import UserOrder from "./components/my orders/UserOrder";
import SimpleSuccess from "./components/order success/SimpleSuccess";
import Thankyou from "./components/CustomPC/CustomPCScreen/Thankyou";
import Vieworder from "./components/my orders/Vieworder";
const App = () => {
  const [clicked, setClicked] = React.useState(null);
  const getClicked = () => {
    setClicked(new Date());
  };
  return (
    <>
      <Router>
        <ToastContainer />
        <TopMenu clicked={clicked} />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/forgetpassword" exact component={Forget} />
          <Route path="/passwordreset/:resetToken" exact component={Reset} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/selection" exact component={SelectionPage} />
          <Route path="/budget" exact component={BudgetPage} />
          <Route path="/requirement" exact component={RequirementPC} />
          <Route path="/budget/lowbudget" exact component={LowBudgetPage} />
          <Route path="/budget/midbudget" exact component={MidBudgetPage} />
          <Route path="/budget/highbudget" exact component={HighBudgetPage} />
          <Route path="/peripherals/:page?" exact component={PeripheralPage} />
          <Route
            path="/productdetail/:id"
            exact
            render={(props) => (
              <ProductDetail clicked={getClicked} {...props} />
            )}
          />
          <Route path="/update/password" exact component={ChangePassword} />
          <Route path="/CustomBuildCart" exact component={PCBuild} />
          <Route path="/CustomOrder" exact component={CustomOrder} />
          <Route
            path="/componentdetail/:id"
            exact
            render={(props) => (
              <ComponentDetail clicked={getClicked} {...props} />
            )}
          />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/components/:page?" exact component={ComponentsPage} />
          <Route path="/shop-cart" exact component={Cart} />
          <Route path="/Custom-Screen" exact component={CustomScreen} />
          <Route path="/order" exact component={Order} />
          <Route path="/myorders" exact component={UserOrder} />

          <Route path="/Success" exact component={Success} />
          <Route path="/SimpleSuccess" exact component={SimpleSuccess} />
          <Route path="/thankyou-custom" exact component={Thankyou} />
          <Route path="/view-myorder/:id" exact component={Vieworder} />
          <Route path="/Custom-cart" exact component={CustomCart} />
        </Switch>
      </Router>
    </>
  );
};
<Footer />;

export default App;
