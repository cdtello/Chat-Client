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
import { useState, useEffect } from 'react';

function Team() {
  // Crea un estado que almacenará los datos recibidos de la API
  const [data, setData] = useState(null);

  // Realiza la solicitud GET a la API cuando se monta el componente
  useEffect(() => {
    // Realiza una solicitud GET a la API
    fetch('https://sejgle3754.execute-api.us-east-1.amazonaws.com/dev/testdb', {
      //method: 'GET', // *GET, POST, PUT, DELETE, etc.
      //mode: 'no-cors', // no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      // Convierte la respuesta en formato JSON
      .then(res => {
        console.log(res);
        return res.json()
      })
      // Guarda los datos en el estado del componente
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <p>Cargando...</p>;
  }


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
        
          {data.map(item => (
            <>
              <Grid item xs={12} lg={6}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                  image={item.image}
                  name={item.nombrePrograma}
                  position={{ color: "info", label: "Pregrado" }}
                  description={item.nombreFacultad} />
              </MKBox>
              </Grid>
            </>
          ))}
        
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
