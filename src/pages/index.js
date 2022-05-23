import Head from 'next/head';
import styles from '../styles/Login.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import KeyIcon from '@mui/icons-material/Key';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import loginHook from '../redux/apiCalls/loginHook';

const Home = () => {
	const dispatch = useDispatch();
	const loading = useSelector(state => state.user.loading);
	console.log(loading);

	const handleSubmit = event => {
		event.preventDefault();
		// Seleccionamos los input del documento
		const email = document.querySelector('#email').value;
		const password = document.querySelector('#password').value;
		loginHook(dispatch, { email, password });
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Inicio de Sesion - Admin Dashboard</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<div className={styles.container}>
					<h1>Bienvenido!</h1>
					<form className={styles.formContainer}>
						<div className={styles.inputContainer}>
							<AlternateEmailIcon sx={{ color: 'rgb(53, 139, 219)' }} />
							<input placeholder='email' name='email' id='email' />
						</div>

						<div className={styles.inputContainer}>
							<KeyIcon sx={{ color: 'rgb(53, 139, 219)' }} />
							<input
								placeholder='contraseña'
								type='password'
								name='password'
								id='password'
							/>
						</div>
						<button className={styles.button} onClick={handleSubmit}>
							Iniciar Sesion
						</button>
					</form>
				</div>
			</main>
		</div>
	);
};

export default Home;
