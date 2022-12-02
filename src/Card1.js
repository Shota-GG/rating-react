import Star from './Star';
import Text from './Text';
import Text2 from './Text2';
import Rate from './Rate';
import Button from './Button';
import './card1.css'




export default function Card1(props) {
    

    let array = [1, 2, 3, 4, 5]
    
    

    return(
        <div className='container'>
            <Star />
            <Text />
            <Text2 />
            <div className="rate">
                {array.map(num=>{
                    return <Rate number={num} click={()=>props.click(num)} id ={props.rate ==num ? "active" : ""} />
                })}
            </div>
            
            <Button change={props.change}/>
            
      </div>
    )
}
