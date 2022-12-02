export default function Selected(props) {
    return(
        <div style={div}>
            <p>You selected {props.rate} out of 5</p>
        </div>
    )
    
}
 const div = {
    width: "193px",
    height: "32px",
    borderRadius: "22.5px",
    backgroundColor: "rgba(38, 46, 56, 1)",
    color: "rgba(252, 118, 20, 1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
 }