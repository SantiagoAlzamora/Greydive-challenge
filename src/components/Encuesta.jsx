import { items } from '../data/db.json'
import Input from './Input'
import "../styles/encuesta.css"
import { useState } from 'react'
import { saveAnswer } from '../services/respuestaService'
import { Link } from 'react-router-dom'

export default function Encuesta() {

	const [currentIndex, setCurrentIndex] = useState(0)
	const [respuesta, setRespuesta] = useState({})

	function changeInput(propName, propValue) {
		const auxRespuesta = { ...respuesta }
		// Object.defineProperty(auxRespuesta, propName, { value: propValue, })
		auxRespuesta[propName] = propValue

		setRespuesta(auxRespuesta)
		setCurrentIndex(currentIndex + 1)
	}

	async function sendAnswer() {
		respuesta.created_at = new Date()
		await saveAnswer(respuesta)
		setCurrentIndex(currentIndex + 1)
	}

	return (
		<div className='container'>
			<h1>Greydive</h1>
			{
				currentIndex < items.length ?
					<form className='encuesta'>
						{
							<Input item={items[currentIndex]} changeInput={changeInput} sendAnswer={sendAnswer} />
						}
					</form>
					:
					<>
						<span>Respuesta enviada!</span>
						<Link to={"/respuestas"} className="go-to-answers-link">Ver respuestas</Link>
					</>
			}

		</div>
	)
}
