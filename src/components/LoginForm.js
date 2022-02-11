import { Button, FormGroup, Grid, TextField, Typography } from "@material-ui/core";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState();
  let errorsObj = { email: "", password: "" };
  const [errors, setErros] = useState(errorsObj);
  const [password, setPassword] = useState();

  function onLogin(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === "") {
      errorObj.email = "E-mail obrigatório";
      error = true;
    }
    if (password === "") {
      errorObj.password = "Senha obrigatória";
      error = true;
    }

    if (!error) {
      console.log("Login realizado")
    }
  }

  return (
    <Grid container>
      <FormGroup onSubmit={onLogin}>
      <Typography variant="h4">Faça seu Login</Typography>
        <div>
          <TextField
            id="filled-basic"
            label="E-mail"
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <div>
          {/* <TextField
            id="filled-basic"
            label="Senha"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div>{errors.password}</div>} */}
          <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        </div>
        <Button type="submit" variant="outlined" color="primary">
          Entrar
        </Button>
      </FormGroup>
    </Grid>
  );
}
