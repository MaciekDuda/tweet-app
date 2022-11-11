import React, { useState, SetState, useEffect } 
from "react";
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";
import "./style.css";

const Form = () => {
	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === "firstName") {
			setFirstName(value);
		}
		if (id === "lastName") {
			setLastName(value);
		}
		if (id === "email") {
			setEmail(value);
		}
		if (id === "password") {
			setPassword(value);
		}
		if (id === "confirmPassword") {
			setConfirmPassword(value);
		}
	};

    const handleSubmit = () =>{
        let obj = {
                firstName : firstName,
                lastName:lastName,
                email:email,
                password:password,
                confirmPassword:confirmPassword,
            }       
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);
    }

	return (
		<div className="reTweet__signup-form">
			<div className="reTweet__signup-form_body">
				<div className="username">
					<label className="form__label" for="firstName">
						Imię{" "}
					</label>
					<input
						className="form__input"
						type="text"
						value={firstName}
						onChange={(e) => handleInputChange(e)}
						id="firstName"
						placeholder="Podaj imię"
					/>
				</div>
				<div className="lastname">
					<label className="form__label" for="lastName">
						Nazwisko
					</label>
					<input
						type="text"
						value={lastName}
						name=""
						id="lastName"
						className="form__input"
						onChange={(e) => handleInputChange(e)}
						placeholder="Podaj nazwisko"
					/>
				</div>
				<div className="email">
					<label className="form__label" for="email">
						Email
					</label>
					<input
						type="email"
						id="email"
						className="form__input"
						value={email}
						onChange={(e) => handleInputChange(e)}
						placeholder="Podaj Email"
					/>
				</div>
				<div className="password">
					<label className="form__label" for="password">
						Hasło
					</label>
					<input
						className="form__input"
						type="password"
						id="password"
						value={password}
						onChange={(e) => handleInputChange(e)}
						placeholder="Podaj hasło"
					/>
				</div>
				<div className="confirm-password">
					<label className="form__label" for="confirmPassword">
						Potwierdź hasło
					</label>
					<input
						className="form__input"
						type="password"
						id="confirmPassword"
						value={confirmPassword}
						onChange={(e) => handleInputChange(e)}
						placeholder="Potwierdź hasło"
					/>
				</div>
			</div>
			<div className="reTweet__signup-form_footer">
				<button onClick={()=>handleSubmit()} type="submit" class="btn">
					Zarejestruj
				</button>
				<button type="button" class="btn">
					Powrót
				</button>
			</div>
		</div>
	);
};

export default Form;
