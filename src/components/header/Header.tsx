import React from 'react'
import  Container  from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
// import react from './react.svg';



const Header = () => {
  return (
    <Container>
        <Image className='rounded-3'  src="http://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/5YhXXuS0hIw6JV3nJr3GgP/682bf2a70a98c3e466f26c2c2a812d65/front-end-web-developer-nanodegree--nd001.jpg" width="400px"/>
        {/* <h1>Language Cards</h1> */}
    </Container>
  )
}

export default Header