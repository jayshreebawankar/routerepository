import { Link } from "react-router-dom";

const BranchesList=()=>{
    return(
        <div>
            <ul>
            <nav>
                <Link to='/container/nagpur'><li>Nagpur</li> </Link>
                <Link to='/container/delhi'><li>Delhi</li></Link>
                <Link to = '/container/mumbai'><li>Mumbai</li></Link> 
                <Link to = '/container/banglore'><li>Banglore</li></Link>
            </nav>
            </ul>
        </div>
    )
}
export default BranchesList;