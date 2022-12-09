/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Programas Academicos
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              En esta seccion encontraras los programas academicos que ofrece nuestra prestigiosa Universidad.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={"https://www.emagister.com.co/blog/wp-content/uploads/2020/02/ingenieros-de-software-kraken.jpg"}
                name="Ingenieria de Software"
                position={{ color: "info", label: "Pregrado" }}
                description="Este programa academico ha formado a los mejores desarrolladores de Google."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={"https://www.emagister.com.co/blog/wp-content/uploads/2020/02/ingenieros-de-software-kraken.jpg"}
                name="Ingenieria de Software"
                position={{ color: "info", label: "Pregrado" }}
                description="Este programa academico ha formado a los mejores desarrolladores de Google."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={"https://www.emagister.com.co/blog/wp-content/uploads/2020/02/ingenieros-de-software-kraken.jpg"}
                name="Ingenieria de Software"
                position={{ color: "info", label: "Pregrado" }}
                description="Este programa academico ha formado a los mejores desarrolladores de Google."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={"https://www.emagister.com.co/blog/wp-content/uploads/2020/02/ingenieros-de-software-kraken.jpg"}
                name="Ingenieria de Software"
                position={{ color: "info", label: "Pregrado" }}
                description="Este programa academico ha formado a los mejores desarrolladores de Google."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
