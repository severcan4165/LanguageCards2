import React,{useState} from 'react';
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

interface IList{
    item:cardData;
}

const Language:React.FC<IList> = ({item}) => {
   const [showImage, setShowImage] = useState(true)

  return (

    <Container  onClick={()=>setShowImage(!showImage)} className="p-4 rounded-2 h-100 lang-card" style={{backgroundColor:"peachpuff"}}>
        {showImage ? ( <Container>
            <Image className='lang-image' src={item.img} width="70%" ></Image>
            <h3 className='display-6'>{item.name}</h3>
        </Container>):
        (    <ul className='h-100'>
            {item.options.map(li=>{
                return(
                    <li className='text-start h4'>{li}</li>
                )
            })}
        </ul>)
        }
       

    
    </Container>
  )
}

export default Language