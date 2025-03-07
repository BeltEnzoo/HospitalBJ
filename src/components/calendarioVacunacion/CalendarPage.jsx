// src/components/CalendarPage.jsx
import React from 'react';
import { CalendarContainer } from '../tramitesPersonales/styled-tramitesPersonales';
import { dataTramitesPersonales } from '../../data/dataTramitesPersonales';
import { H1Title } from './styled-calendarPage';

const CalendarPage = () => {
    // Encuentra el trámite relacionado con el calendario vacunatorio
    const vaccinationProcedure = dataTramitesPersonales.find(item => item.descripcion === 'Calendario vacunatorio');

    return (
        <div>
            <H1Title>Calendario Vacunatorio</H1Title>
            <CalendarContainer>
                {vaccinationProcedure?.calendarImages?.map((img, index) => (
                    <a key={index} href={img} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt={`Calendario Vacunación ${index + 1}`} />
                    </a>
                ))}
            </CalendarContainer>
        </div>
    );
}

export default CalendarPage;
