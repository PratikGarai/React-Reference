import React from 'react'

const F = ()=>{
	const date = new Date()
	const hours = date.getHours()
	return (
		<p> Time is {hours%12}'o clock </p>
	)
}

export default F;
