
import Minus from "./Minus"
import Plus from "./Plus";
import {useSelector} from 'react-redux'

const Say=()=>{
    const counter=useSelector(store=>store.counter)
    return(
        <>
        <Minus/>
        <h1>{counter}</h1>
        <Plus/>
        </>
    )
}
export default Say;