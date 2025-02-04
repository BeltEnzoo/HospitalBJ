import React from 'react'
import { dataInformacionPublica } from '../../data/dataInformacionPublica'
import { ConteinerTramitesPersonales, DescripcionTramitesPersonales, TitleTramitesPersonales,Image, Title, CardTramitesPersonales, TitleLink } from './styled-informacionPublica'


const InformacionPublica = () => {
  return (
            <ConteinerTramitesPersonales>
                <TitleTramitesPersonales>Informacion publica</TitleTramitesPersonales>
                <DescripcionTramitesPersonales>
    
                    {dataInformacionPublica.map((item) => (
                        <CardTramitesPersonales key={item.id}>
                            <TitleLink href={item.link}><Image src={item.imagen}/></TitleLink>
                            <Title><TitleLink href={item.link}>{item.descripcion}</TitleLink></Title>
                        </CardTramitesPersonales>
                    ))}
    
                </DescripcionTramitesPersonales>
            </ConteinerTramitesPersonales>
        )
    }

export default InformacionPublica
