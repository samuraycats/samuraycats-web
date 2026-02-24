import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Stack,
} from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import SecurityIcon from "@mui/icons-material/Security";
import DescriptionIcon from "@mui/icons-material/Description";
import UpdateIcon from "@mui/icons-material/Update";
import BlockIcon from "@mui/icons-material/Block";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { blueGrey, cyan, green, grey, purple, red } from "@mui/material/colors";

const TermsAndServices: React.FC = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        {/* Header */}
        <Box className="text-center mb-16">
          <Typography variant="h3" className="font-bold  mb-4">
            Términos y Servicios
          </Typography>
          <Typography variant="h6" className="text-justify">
            Estos términos regulan el uso de nuestros productos y servicios de
            software. Al utilizar nuestras soluciones, aceptas las siguientes
            condiciones.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Uso del Servicio */}
          <Grid sx={{xs:12, md:6}} >
            <Card className="rounded-2xl shadow-md h-full">
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar sx={{bgcolor: cyan[500]}}>
                    <DescriptionIcon />
                  </Avatar>
                  <Typography variant="h6" className="font-semibold">
                    Uso del Servicio
                  </Typography>
                </Stack>
                <Typography className="text-justify">
                  El usuario se compromete a utilizar el software únicamente
                  para fines legales y conforme a la normativa aplicable. Queda
                  prohibido el uso indebido, la ingeniería inversa o la
                  distribución no autorizada.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Propiedad Intelectual */}
          <Grid sx={{xs:12, md:6}} >
            <Card className="rounded-2xl shadow-md h-full">
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar sx={{bgcolor: blueGrey[500]}}>
                    <CopyrightIcon />
                  </Avatar>
                  <Typography variant="h6" className="font-semibold">
                    Propiedad Intelectual
                  </Typography>
                </Stack>
                <Typography className="text-justify">
                  Todo el código, diseño, marcas y contenido asociado al
                  software son propiedad exclusiva de la empresa, salvo acuerdo
                  contractual distinto.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Protección de Datos */}
          <Grid sx={{xs:12, md:6}} >
            <Card className="rounded-2xl shadow-md h-full">
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar sx={{bgcolor: green[500]}}>
                    <SecurityIcon />
                  </Avatar>
                  <Typography variant="h6" className="font-semibold">
                    Protección de Datos
                  </Typography>
                </Stack>
                <Typography className="text-justify">
                  Nos comprometemos a proteger la información del usuario bajo
                  estrictas medidas de seguridad y conforme a nuestra política
                  de privacidad y la legislación vigente.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Limitación de Responsabilidad */}
          <Grid sx={{xs:12, md:6}} >
            <Card className="rounded-2xl shadow-md h-full">
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar sx={{bgcolor: red[500]}}>
                    <BlockIcon />
                  </Avatar>
                  <Typography variant="h6" className="font-semibold">
                    Limitación de Responsabilidad
                  </Typography>
                </Stack>
                <Typography className="text-justify">
                  La empresa no será responsable por daños indirectos,
                  pérdidas de datos o interrupciones derivadas del uso del
                  software, salvo disposición legal en contrario.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Actualizaciones */}
          <Grid sx={{xs:12, md:6}} >
            <Card className="rounded-2xl shadow-md h-full">
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar sx={{bgcolor: purple[500]}}>
                    <UpdateIcon />
                  </Avatar>
                  <Typography variant="h6" className="font-semibold">
                    Actualizaciones y Soporte
                  </Typography>
                </Stack>
                <Typography className="text-justify">
                  Nos reservamos el derecho de actualizar, modificar o mejorar
                  el software en cualquier momento para optimizar su
                  funcionamiento y seguridad.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Legislación Aplicable */}
          <Grid sx={{xs:12, md:6}} >
            <Card className="rounded-2xl shadow-md h-full">
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar sx={{bgcolor: grey[500]}}>
                    <GavelIcon />
                  </Avatar>
                  <Typography variant="h6" className="font-semibold">
                    Legislación Aplicable
                  </Typography>
                </Stack>
                <Typography className="text-justify">
                  Estos términos se rigen por las leyes vigentes en México.
                  Cualquier controversia será sometida a los tribunales
                  competentes correspondientes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TermsAndServices;