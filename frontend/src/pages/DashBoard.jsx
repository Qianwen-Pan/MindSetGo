import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Switch,
} from "react-router-dom";

import "../styles.css";

import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "../components/Header";

function DashBoard() {
  const [projects, setProjects] = useState([]);
  useEffect
    (() => {
      fetch("http://localhost:5001/projects", {
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => setProjects(data.projects))
        .catch((e) => console.log(`fetch project error ${e}`));
    },
    []);

  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();
  return (
    <div>
      <Header />

      <div>
        {/* <Outlet/> */}
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <main>
            {/* Hero unit */}
            <Box
              sx={{
                bgcolor: "background.paper",
                pt: 0,
                pb: 2,
                mt: -5,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Your Project
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Start managing your project right now, see what resources you
                  can get!
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  {/* <Button variant="contained">Main call to action</Button> */}
                  <Button
                    // onClick={start}

                    variant="contained"
                    sx={{ backgroundColor: "#9AC5F4" }}
                  >
                    See all my projects
                  </Button>
                  <Button
                    // onClick={start}

                    variant="outlined"
                    sx={{ color: "#9AC5F4", borderColor: "#9AC5F4" }}
                  >
                    See all my resources
                  </Button>
                  {/* <Button variant="outlined">Secondary action</Button> */}
                </Stack>
              </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>
                {projects.map((project) => (
                  <Grid item key={project.id} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          // 16:9
                          pt: "56.25%",
                        }}
                        image="pop1.png"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {project.projectName}
                        </Typography>
                        <Typography>{project.description}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" sx={{ color: "#9AC5F4" }}>
                          View
                        </Button>
                        <Button size="small" sx={{ color: "#9AC5F4" }}>
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
        </ThemeProvider>
      </div>
    </div>
  );
}
export default DashBoard;
