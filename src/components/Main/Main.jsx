function Main() {
  return (
    <div className="rounded-4">
      <div className="login">
        <h3>Iniciar sesion</h3>
        <p>Accede con tu datos anteriores</p>
        <form action="">
          <input type="email" name="email" placeholder="Email" id="email" />

          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
          />

          <button type="submit" className="button" onClick="return login()">
            Iniciar sesion
          </button>
        </form>
        <div id="error"></div>
      </div>

      <div className="registro">
        <h3>Registrarse</h3>
        <p>Registrate con tus datos</p>
        <div id="form-register">
          <form className="formulario" id="formulario">
            <div className="formulario_grupo" id="grupo_nombre">
              <label htmlFor="nombre" className="formulario_label"></label>
              <div className="formulario_grupo_input">
                <input
                  type="text"
                  className="formulario_input"
                  name="nombre"
                  id="nombre"
                  placeholder="nombre"
                />
              </div>
              <p className="formulario_input_error">
                el nombre solo debe tener letras y espacios
              </p>
            </div>

            <div className="formulario_grupo" id="grupo_apellido">
              <label htmlFor="apellidp" className="formulario_label"></label>
              <div className="formulario_grupo_input">
                <input
                  type="text"
                  className="formulario_input"
                  name="apellido"
                  id="apellido"
                  placeholder="apellido"
                />
              </div>
              <p className="formulario_input_error">
                el apellido solo debe tener letras y espacios
              </p>
            </div>

            <div className="formulario_grupo" id="grupo_email">
              <label htmlFor="email" className="formulario_label"></label>
              <div className="formulario_grupo_input">
                <input
                  type="email"
                  className="formulario_input"
                  name="email"
                  id="email"
                  placeholder="email"
                />
              </div>
              <p className="formulario_input_error">
                el email solo debe tener letras y espacios
              </p>
            </div>

            <div className="formulario_grupo" id="grupo_password">
              <label htmlFor="password" className="formulario_label"></label>
              <div className="formulario_grupo_input">
                <input
                  type="password"
                  className="formulario_input"
                  name="password"
                  id="password"
                  placeholder="password"
                />
              </div>
              <p className="formulario_input_error">
                la contraseña tiene que ser de 4 a 12 digitos
              </p>
            </div>

            <div className="formulario_grupo" id="grupo_password2">
              <label htmlFor="password2" className="formulario_label"></label>
              <div className="formulario_grupo_input">
                <input
                  type="password"
                  className="formulario_input"
                  name="password2"
                  id="password2"
                  placeholder="repeat password"
                />
              </div>
              <p className="formulario_input_error">
                ambas contraseñas deben ser iguales
              </p>
            </div>
            <div className="formulario_grupo" id="grupo_telefono">
              <label htmlFor="telefono" className="formulario_label"></label>
              <div className="formulario_grupo_input">
                <input
                  type="text"
                  className="formulario_input"
                  name="telefono"
                  id="telefono"
                  placeholder="telefono"
                />
              </div>
              <p className="formulario_input_error">
                el telefono solo debe numeros
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
