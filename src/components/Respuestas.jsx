import React, { useEffect, useState } from 'react'
import { getAnswers } from '../services/respuestaService';
import Respuesta from './Respuesta';

import "../styles/respuesta.css"
import { Link } from 'react-router-dom';

export default function Respuestas() {

    const [respuestas, setRespuestas] = useState([])
    const [indexRespuesta, setIndexRespuesta] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAnswers().then(data => {
            setRespuestas(data)
        })
        setLoading(false)
    }, [])

    function showPreviousAnswer() {
        setIndexRespuesta(indexRespuesta - 1)
    }
    function showNextAnswer() {
        setIndexRespuesta(indexRespuesta + 1)
    }

    return (
        <div className='respuestas'>
            <Link to={"/"} className="go-to-form-link">Go to form</Link>
            {loading ? <span>Loading...</span>
                :
                <>
                    <section>
                        {respuestas.length > 0 && <Respuesta respuesta={respuestas[indexRespuesta]} />}
                    </section>
                    <section className='buttons'>
                        <button className={indexRespuesta > 0 ? '' : 'hidden'} onClick={showPreviousAnswer}>Anterior</button>
                        <button className={indexRespuesta < respuestas.length - 1 ? '' : 'hidden'} onClick={showNextAnswer}>Siguiente</button>
                    </section>
                </>
            }
        </div>
    )
}
