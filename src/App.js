import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./components/homepage";
import PricingPage from "./components/pricingpage";
import ScrollToTop from "./components/scroller";

// Module Bundlers
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/pricing" component={PricingPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
