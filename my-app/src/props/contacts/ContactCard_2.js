import React from "react";

const ContactCard = (props)=>{
	return (
		<p>
			<div class="contact-card">
				<h3> {props.contact.name} </h3>
				<p> Phone : {props.contact.phone} </p>
				<p> Email : {props.contact.email} </p>
			</div>
		<hr />
		</p>
	);
}

export default ContactCard;
