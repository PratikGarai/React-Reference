import React, {useState} from 'react';

function FormEvent1()
{
	const [text, setText] = useState("???");

	function handler(event){
		setText(event.target.value==""?"???":event.target.value);
	}

	return(
		<div>
			<input type="text" placeholder="Your Name" onChange={handler} />
			<p>{text}</p>
		</div>
	);
}

export default FormEvent1;
