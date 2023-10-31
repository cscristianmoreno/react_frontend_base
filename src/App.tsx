import ListComponent from "./components/list/list.component";
import RegisterComponent from "./components/register/register.component";
import { RequestInterceptor } from "./interceptors/request.interceptor";

const App = () => {
    new RequestInterceptor();

    return (
        <>
            <RegisterComponent/>
            <br/>
            <br/>
            <br/>
            <ListComponent/>
        </>
    );
}

export default App;