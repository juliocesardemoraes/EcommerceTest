import Header from "../Navbar/navbar";

function Login() {
  return (
    <div class="containe">
      <Header></Header>
      <div class="login">
        <h2 class="h2index">Acesse com seu login ou cadastre-se!</h2>
        <h4 class="h4index">você pode entrar com o seu CPF</h4>

        <form class="form-login-index" action="">
          <div class="input-container">
            <label class="digite-nome" for="">
              Digite seu CPF:
            </label>
            <input class="input" type="number" placeholder="000.000.000-00" />
          </div>

          <div class="input-container">
            <label class="label-senha" for="">
              Senha:
            </label>
            <input
              class="input"
              type="password"
              placeholder="***************"
            />
          </div>

          <button class="button-entrar" type="submit" value="Tecle Enter">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
