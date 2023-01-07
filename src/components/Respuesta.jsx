import React from 'react'

export default function Respuesta({ respuesta }) {
    return (
        <div className='respuesta'>
            <p><b>full_name :</b> {respuesta.full_name}</p>
            <p><b>email :</b> {respuesta.email}</p>
            <p><b>birth_date :</b> {respuesta.birth_date}</p>
            <p><b>country_of_origin :</b> {respuesta.country_of_origin}</p>
            <p><b>terms_and_conditions :</b> {respuesta.terms_and_conditions && "Accepted"}</p>
        </div>
    )
}
