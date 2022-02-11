import { Grid } from "@material-ui/core";
import LoginBox from "./LoginBox";

export default function MainContainer() {
  return (
    <>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          spacing: 0,
          justify: "space-around",
          background: "#a4bbdd",
        }}
      >
        <LoginBox />
      </Grid>
    </>
  );
}
