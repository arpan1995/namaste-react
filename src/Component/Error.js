import { useRouteError } from "react-router-dom";

const Error = ()=> {
    const err = useRouteError();
    return(
    <div>
        <h1>Opps... page not found</h1>
        <h2>Find the Reason Below</h2>
        <h3>{err.status}</h3>
        <h3>{err.statusText}</h3>
    </div>
    )
}

export default Error;