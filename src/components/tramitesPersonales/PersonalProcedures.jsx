import React from 'react'
import { ConteinerTramitesPersonales, DescripcionTramitesPersonales, TitleTramitesPersonales,Image, Title, CardTramitesPersonales, TitleLink } from './styled-tramitesPersonales'
import { dataTramitesPersonales } from '../../data/dataTramitesPersonales'

const PersonalProcedures = () => {
    return (
        <ConteinerTramitesPersonales>
            <TitleTramitesPersonales>Tramites personales</TitleTramitesPersonales>
            <DescripcionTramitesPersonales>

                {dataTramitesPersonales.map((item) => (
                    <CardTramitesPersonales key={item.id}>
                        <TitleLink href={item.link}><Image src={item.imagen}/></TitleLink>
                        <Title><TitleLink href={item.link}>{item.descripcion}</TitleLink></Title>
                    </CardTramitesPersonales>
                ))}

            </DescripcionTramitesPersonales>
        </ConteinerTramitesPersonales>
    )
}

export default PersonalProcedures
