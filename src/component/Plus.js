import {useDispatch} from 'react-redux'
const Plus=()=>{
    const dispath=useDispatch();

    const plus=()=>{
        dispath({
            type: 'ARTIR'
        })
    }
return(
    <>
    <button onClick={plus}>+</button>
    </>
)
}
export default Plus;