// src/components/PersonalProcedures.jsx
import React from 'react';
import { ConteinerTramitesPersonales, DescripcionTramitesPersonales, TitleTramitesPersonales, Image, Title, CardTramitesPersonales, TitleLink } from './styled-tramitesPersonales';
import { Link } from 'react-router-dom'; // Importamos Link
import { dataTramitesPersonales } from '../../data/dataTramitesPersonales';

const PersonalProcedures = () => {
    return (
        <ConteinerTramitesPersonales>
            <TitleTramitesPersonales>Tramites personales</TitleTramitesPersonales>
            <DescripcionTramitesPersonales>

                {dataTramitesPersonales.map((item) => (
                    <CardTramitesPersonales key={item.id}>
                        {/* Si el item es de "Calendario Vacunatorio", usamos TitleLink con Link */}
                        {item.descripcion === 'Calendario vacunatorio' ? (
                            <TitleLink as={Link} to="/calendar">
                                <Image src={item.imagen} />
                                <Title>
                                    {item.descripcion}
                                </Title>
                            </TitleLink>
                        ) : (
                            <>
                                <TitleLink href={item.link} target="_blank">
                                    <Image src={item.imagen} />
                                </TitleLink>
                                <Title>
                                    <TitleLink href={item.link} target="_blank">
                                        {item.descripcion}
                                    </TitleLink>
                                </Title>
                            </>
                        )}
                    </CardTramitesPersonales>
                ))}

            </DescripcionTramitesPersonales>
        </ConteinerTramitesPersonales>
    );
};

export default PersonalProcedures;
