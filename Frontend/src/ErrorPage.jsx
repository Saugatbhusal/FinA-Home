import {useLocation} from "react-router-dom"


function ErrorPage() {
    const {state}=useLocation()
    console.log(state)
    return ( <div>

<div className="row">
    <div className="col-6 offset-5 mt-3 mb-3">
        <p>{state?.message ||"Something went wrong"}</p>
    </div>
</div>
    </div> );
}

export default ErrorPage;