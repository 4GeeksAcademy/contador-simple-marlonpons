import React, {useState,useEffect,useRef} from "react";
import { Logo } from "./Logo";
import { Unit } from "./Unit";

let counterSave =null; //Guardar el ID del setInterval.
//Para que no se cree más de un intervalo si el santo usuario presiona varias veces el botón Start.

export const Home = () => {

	const[count,setCount]=useState(0);
	const [inputValue, setInputValue] = useState("");
	const [alarmValue, setAlarmValue] = useState("");

	    useEffect(() => {
        if (
            alarmValue !== "" && Number(alarmValue) === count) {
            alert("¡Alarma! El contador llegó a " + alarmValue);
        }
    }, [count, alarmValue]);

	const handleStart = () => {
		clearInterval(counterSave); //Limpiar el intervalo anterior si existe.
		if(inputValue !== "") 
			setCount(parseInt(inputValue));
		counterSave = setInterval(() => {
			setCount(prev => prev + 1); //detallitos aprendidos en clase ☺
		}, 500);
			
	};

	const handleReset = () => {
		clearInterval(counterSave);
		setCount(prev=>0);
		counterSave = null;
	};

	const handlePause = () => {
		clearInterval(counterSave);
		counterSave = null;
	}

	const handleRevert = () => {
		clearInterval(counterSave);
		if(inputValue !== "") 
			setCount(parseInt(inputValue));
		counterSave = setInterval(() => {
			setCount(prev => prev === 0 ? 0 : prev - 1); //Si el contador es 0, no se resta nada.
		}, 500);
	}

	let countStr = count.toString();
	let digits =[0,0,0,0,0,0];

	for (let i = 0; i < countStr.length; i++) {
		digits[digits.length-1 - i] = countStr[countStr.length - 1 - i]; //Rellenar con ceros a la izquierda
	};


	return (
		<div className="container mt-5 ">
			<div className=" d-flex justify-content-center align-items-center flex-wrap gap-2 text-center mb-4 bg-dark p-3 rounded ">
				<div><Logo/></div>
				<div><Unit value={digits[0]}/></div>
				<div><Unit value={digits[1]}/></div>
				<div><Unit value={digits[2]}/></div>
				<div><Unit value={digits[3]}/></div>
				<div><Unit value={digits[4]}/></div>
				<div><Unit value={digits[5]}/></div>
			</div>

			<div className="btn-group d-flex justify-content-center" role="group" aria-label="Buttons">
				<button onClick={handleRevert} type="button" className="btn btn-outline-primary">Revert</button>
				<button onClick={handleStart} type="button" className="btn btn-outline-primary">Start</button>
				<button onClick={handlePause} type="button" className="btn btn-outline-primary">Pause</button>
				<button onClick={handleReset} type="button" className="btn btn-outline-primary">Reset</button>
			</div>
			<div className="d-flex justify-content-center mt-4">
				<input onChange={e => setInputValue(e.target.value)} className="form-control w-25 text-center" type="number" min="0" max="999999" value={inputValue} placeholder="Tiempo" />
				<input onChange={e => setAlarmValue(e.target.value)} className="form-control w-25 text-center" type="number" min="0" max="999999" value={alarmValue} placeholder="Alarm" />
			</div>
		</div>
	)
};

