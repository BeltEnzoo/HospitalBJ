import React from 'react'
import { ListContainer, ListItem, Image, Info, Title, PhoneNumber } from './styled-comunication'
import {data} from '../../data/data'
const Comunication = () => {
  return (
    <ListContainer>
      {data.map((item)=>(
        <ListItem key = {item.id}>
          <Image src = {item.imagen}/>
          <Info>
            <Title>{item.descripcion}</Title>
            <PhoneNumber>{item.cel}</PhoneNumber>
          </Info> 
        </ListItem>
      ))}
      <hr />
    </ListContainer>
    
  )
}

export default Comunication
