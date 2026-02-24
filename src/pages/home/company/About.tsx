import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Stack,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import CodeIcon from "@mui/icons-material/Code";
import { deepOrange, deepPurple, cyan, green, pink  } from '@mui/material/colors';

const AboutUs: React.FC = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        {/* Header */}
        <Box className="my-6">
          <Typography variant="h3" className=" text-center font-bold pb-3">
            Acerca de Nosotros
          </Typography>

          <Typography variant="h6" className=" mx-auto text-justify">
            Somos una empresa de software 100% mexicana enfocada en crear
            productos digitales de alta calidad que impulsan la transformación
            tecnológica de las empresas.
          </Typography>
        </Box>

        {/* Imagen principal */}
        <Card className="rounded-2xl shadow-lg mb-16">
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="Equipo de desarrollo"
            sx={{height:250}}
          />
        </Card>

        {/* Misión y Visión */}
        <Grid container spacing={6} className="mb-16">
          <Grid size={{ xs: 12, md: 6 }}>
            <Card className="h-full rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar  sx={{ bgcolor: pink[500] }}>
                    <RocketLaunchIcon />
                  </Avatar>
                  <Typography variant="h5" className="font-semibold">
                    Misión
                  </Typography>
                </Stack>
                <Typography variant="body2" className="text-justify">
                  Desarrollar soluciones tecnológicas innovadoras que optimicen
                  procesos, mejoren la productividad y generen valor real para
                  nuestros clientes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid  size={{ xs: 12, md: 6 }}>
            <Card className="h-full rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar  sx={{ bgcolor: green[500] }}>
                    <VisibilityIcon />
                  </Avatar>
                  <Typography variant="h5" className="font-semibold">
                    Visión
                  </Typography>
                </Stack>
                <Typography variant="body2" className="text-justify">
                  Ser una empresa líder en desarrollo de software en México y
                  Latinoamérica, reconocida por la calidad, innovación y
                  excelencia en cada uno de nuestros proyectos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Valores */}
        <Box className="text-center mb-10">
          <Typography variant="h4" className="font-bold mb-8">
            Nuestros Valores
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full">
              <CardContent className="text-center">
                <Avatar className="mx-auto mb-4" sx={{ bgcolor: deepOrange[500] }} >
                  <WorkspacePremiumIcon />
                </Avatar>
                <Typography variant="h6" className="font-semibold mb-2">
                  Calidad
                </Typography>
                <Typography className="text-justify" variant="body2" >
                  Nos comprometemos con estándares altos en cada línea de
                  código y cada solución implementada.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid  size={{ xs: 12, md: 4 }}>
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full">
              <CardContent className="text-center">
                <Avatar className="mx-auto mb-4" sx={{ bgcolor: deepPurple[500] }}>
                  <CodeIcon />
                </Avatar>
                <Typography variant="h6" className="font-semibold mb-2">
                  Innovación
                </Typography>
                <Typography className="text-justify" variant="body2">
                  Adoptamos nuevas tecnologías y metodologías para mantenernos
                  siempre a la vanguardia.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full">
              <CardContent className="text-center">
                <Avatar className="mx-auto mb-4" sx={{bgcolor:cyan[500]}}>
                  <VolunteerActivismIcon />
                </Avatar>
                <Typography variant="h6" className="font-semibold mb-2">
                  Compromiso
                </Typography>
                <Typography className="text-justify" variant="body2">
                  Construimos relaciones a largo plazo basadas en confianza,
                  responsabilidad y resultados.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;