import React from "react";

const ContactCard = (props)=>{
	return (
		<p>
			<div class="contact-card">
				<h3> {props.name} </h3>
				<p> Phone : {props.phone} </p>
				<p> Email : {props.email} </p>
			</div>
		<hr />
		</p>
	);
}

export default ContactCard;
