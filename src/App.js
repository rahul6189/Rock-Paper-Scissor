import React, { useEffect, useState } from "react"
import Person from "./component/Person"
import Paper from "./component/subComponent/Paper"
import Rock from "./component/subComponent/Rock"
import Scissor from "./component/subComponent/Scissor"

import "./assets/styles/app.css"

function App() {

	const action = [
		{ key: 0, image: <Paper />, killBy: 2 },
		{ key: 1, image: <Rock />, killBy: 0 },
		{ key: 2, image: <Scissor />, killBy: 1 }
	]

	const [personInformation, setPersonInformation] = useState([
		{ name: "Rahul", score: 0, selected: 1 },
		{ name: "Awadhesh", score: 0, selected: 1 }
	])
	const [round, setRound] = useState(0)
	const [message, setMessage] = useState(undefined)

	useEffect(() => {
		if (round === 3) {
			if (personInformation[0].score > personInformation[1].score) {
				setMessage("Rahul Won")
			} else if (personInformation[0].score < personInformation[1].score) {
				setMessage("Awadhesh Won")
			} else {
				setMessage("Draw")
			}
		}
	}, [round])

	const startGame = () => {

		let p1 = Math.floor(Math.random() * action.length)
		let p2 = Math.floor(Math.random() * action.length)
		let s1 = personInformation[0].score
		let s2 = personInformation[1].score

		if ((p1 === 1 && p2 === 2) || (p1 === 0 && p2 === 1) || (p1 === 2 && p2 === 0)) {
			s1 = s1 + 1
			setMessage("Rahul Won")
		}
		else if ((p1 === 1 && p2 === 0) || (p1 === 0 && p2 === 2) || (p1 === 2 && p2 === 1)) {
			s2 = s2 + 1
			setMessage("Awadhesh Won")
		}
		else if (p1 === p2) {
			setMessage("Draw")
		}

		let newData = [
			{ name: "Rahul", score: s1, selected: p1 },
			{ name: "Awadhesh", score: s2, selected: p2 }
		]
		setRound(round + 1)
		setPersonInformation(newData)
	}

	const reset = () => {
		setPersonInformation([
			{ name: "Rahul", score: 0, selected: 1 },
			{ name: "Awadhesh", score: 0, selected: 1 }
		])
		setRound(0)
		setMessage(undefined)
	}

	return (
		<div className="container">
			<div className="user-info">
				{
					personInformation.map(element => {
						return <Person
							name={element.name}
							score={element.score}
							action={element.selected}
							collection={action}
						/>
					})
				}
			</div>
			<div className="btn-body">
				<span className="message">{message}</span>
				{round < 3 ? <button className="btn" onClick={startGame}>Play</button> :
					<button className="btn">Game End</button>}
				{round === 3 && <button className="btn" onClick={reset}>Play again</button>}
			</div>
		</div>
	)
}

export default App


