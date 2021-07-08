import {isImmutable} from "immutable"
const toJs = (immutableData)=>{
    if(immutableData && isImmutable(immutableData)){
        return immutableData.toJS()
    }
    return immutableData;
}
export default toJs