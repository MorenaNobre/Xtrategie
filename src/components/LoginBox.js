// import LoginForm from "./LoginForm";
import { Divider, Grid } from "@material-ui/core";
// import SignIn from "./FormTeste";
import LoginForm from "./LoginForm";

export default function LoginBox() {
  return (
    <>
      <Grid
        container
        spacing={8}
        alignItems="center"
        justifyContent="center"
        style={{ maxWidth: "70%", height: "600px", background: "red" }}
      >
        <Grid item>
          <img src="/logo-xtrategie.png" alt="logo" />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item>
          <LoginForm />
          {/* <SignIn /> */}
        </Grid>
      </Grid>
    </>
  );
}
