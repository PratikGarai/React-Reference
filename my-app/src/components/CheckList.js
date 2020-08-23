import React from 'react'

function CheckList()
{
	return(
		<maincontent>
			<input type="checkbox" name="Task1" value="t1"/>
			<label for="Task1">This is task 1</label><br/>
			<input type="checkbox" name="Task2" value="t2"/>
			<label for="Task2">This is task 2</label><br/>
			<input type="checkbox" name="Task3" value="t3"/>
			<label for="Task3">This is task 3</label><br/>
			<input type="checkbox" name="Task4" value="t4"/>
			<label for="Task4">This is task 4</label><br/>
		</maincontent>
	);
}

export default CheckList;
