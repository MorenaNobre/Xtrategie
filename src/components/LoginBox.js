import { Box, Divider, Grid } from "@material-ui/core";
import SimpleForm from "./SimpleForm";

export default function LoginBox() {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="space-around"
        style={{
          maxWidth: "70%",
          height: "600px",
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "7px 9px 20px -6px rgba(0,0,0,0.4)",
        }}
      >
        <Box>
          <img
            src="/logo-xtrategie.png"
            alt="logo"
            style={{ marginRight: "-80px" }}
          />
        </Box>
        <Divider orientation="vertical" style={{ height: "500px" }} />
        <Box>
          <SimpleForm />
        </Box>
      </Grid>
    </>
  );
}
