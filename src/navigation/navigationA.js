import { Route, Switch } from "react-router-dom";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";

const NavigationA = () => {
    return <>
        <Switch>
            <Route exact from="/" render={props => <Home {...props} />}/>
            <Route exact from="/contact-us" render={props => <ContactUs {...props} />}/>
        </Switch>
    </>
}

export default NavigationA;