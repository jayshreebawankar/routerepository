import BranchesList from './List/BranchesList'
import Nagpur from './List/Nagpur.js'
import Delhi from './List/Delhi.js'
import Mumbai from './List/Mumbai.js'
import Banglore from './List/Banglore.js'
import {Routes, Route} from 'react-router-dom'

const Container =()=>{
    return(
        <div>
            <h1>Our Branches in INDIA</h1>
            <BranchesList/>
            <Routes>
                <Route path='/container/nagpur' element={<Nagpur/>}></Route>
                <Route path='/container/delhi' element={<Delhi/>}> </Route>
                <Route path='/container/mumbai' element={<Mumbai/>}> </Route>
                <Route path='/container/banglore' element={<Banglore/>}> </Route>
            </Routes>
       </div>
    )
}
export default Container;



