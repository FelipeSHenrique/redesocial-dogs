import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UseContext';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  // // Verificar se já existe um token no meu localstorage
  // useEffect(() => {
  //   const token = window.localStorage.getItem('token');
  //   if (token) {
  //     getUser(token);
  //   }
  // }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    // Ele sempre vai ter que validar antes de enviar o fetch
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }

  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}

export default LoginForm;