import Paymentimg from "./Paymentimg"
import Selected from "./Selected"
import Text3 from "./Text3"
import Text4 from "./Text4"


export default function Card2(props) {
    return(
        <div className='container2' style={div}>
            <Paymentimg />
            <Selected rate={props.rate}/>
            <Text3 />
            <Text4 />
      </div>
    )
}
const div = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "32px",
    
}
