import {useDispatch} from 'react-redux'
const Minus=()=>{
    const dispath=useDispatch();

    const minus=()=>{
        dispath({
            type: 'AZALT'
        })
    }
return(
    <>
    <button onClick={minus}>-</button>
    </>
)
}
export default Minus;