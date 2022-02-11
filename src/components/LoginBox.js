import { Divider, Grid } from "@material-ui/core";
import SimpleForm from "./SimpleForm";

export default function LoginBox() {
  return (
    <>
      <Grid
        container
        spacing={8}
        alignItems="center"
        justifyContent="space-around"
        style={{ maxWidth: "70%", height: "600px", background: "#ffffff" }}
      >
        <Grid item>
          <img src="/logo-xtrategie.png" alt="logo" />
        </Grid>
        <Divider orientation="vertical"/>
        <Grid item>
          <SimpleForm />
        </Grid>
      </Grid>
    </>
  );
}
