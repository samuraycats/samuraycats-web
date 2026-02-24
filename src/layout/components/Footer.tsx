import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import SamurayCatsIcon from '../../components/Blog/components/SamurayCatsIcon';

import { Link } from 'react-router-dom';
function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" to="https://mui.com/">
        SamurayCats
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <React.Fragment>
      <Divider />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minWidth: { xs: '100%', sm: '60%' },
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
              <SamurayCatsIcon />

              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontWeight: 600, mt: 2 }}
              >
                Subscribete a nuestro boletín
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Suscríbete para recibir noticias e información de nuestros productos. ¡Nunca enviamos spam!
              </Typography>
              <InputLabel htmlFor="email-newsletter">Correo electrónico</InputLabel>
              <Stack direction="row" spacing={1} useFlexGap>
                <TextField
                  id="email-newsletter"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  fullWidth
                  aria-label="Correo electrónico"
                  placeholder="Ingresa tu correo electrónico"
                  slotProps={{
                    htmlInput: {
                      autoComplete: 'off',
                      'aria-label': 'Ingresa tu correo electrónico',
                    },
                  }}
                  sx={{ width: '250px' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ flexShrink: 0 }}
                >
                  Subscribirme
                </Button>
              </Stack>
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Productos
            </Typography>

            <Link color="text.secondary" to="/app/bots">
              <span className='underline decoration-solid'>
                Robots
              </span>
            </Link>
            <Link color="text.secondary" to="/app/web">
              <span className='underline decoration-solid'>
                Aplicaciones web
              </span>
            </Link>
            <Link color="text.secondary" to="/app/movil">
              <span className='underline decoration-solid'>
                Aplicaciones moviles
              </span>
            </Link>
            <Link color="text.secondary" to="/app/hybrid">
              <span className='underline decoration-solid'>
                Aplicacion híbrida
              </span>
            </Link>
            <Link color="text.secondary" to="/app/custom">
              <span className='underline decoration-solid'>
                Aplicaciones a la media
              </span>
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Compañia
            </Typography>
            <Link color="text.secondary" to="/home/company/about">
              <span className='underline decoration-solid'>
                Acerca de nosotros
              </span>
            </Link>
            <Link color="text.secondary" to="/home/company/policy">
              <span className='underline decoration-solid'>
                Politicas
              </span>
            </Link>
            <Link color="text.secondary" to="/home/company/faq">
              <span className='underline decoration-solid'>
                Preguntas y respuestas
              </span>
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Legal
            </Typography>
            <Link color="text.secondary" to="/home/legal/terms">
              <span className='underline decoration-solid'>
                Terminos
              </span>

            </Link>
            <Link color="text.secondary" to="/home/legal/privacy">
              <span className='underline decoration-solid'>
                Privacidad
              </span>

            </Link>
            <Link color="text.secondary" to="/home/legal/contact">
              <span className='underline decoration-solid'>
                Contacto
              </span>

            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: 4, sm: 8 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Stack direction="row" spacing={2}>
            <Link color="text.secondary" to="/home/legal/privacy" >
              <Typography variant='body2'>
                Política de Privacidad
              </Typography>
            </Link>

            <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>

            <Link color="text.secondary" to="/home/legal/terms">
              <Typography variant='body2'>
                Terminos del servicio
              </Typography>

            </Link>
          </Stack>
          <Copyright />


          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: 'left', color: 'text.secondary' }}
          >
            <IconButton
              color="inherit"
              size="small"
              href="https://github.com/mui"
              aria-label="GitHub"
              sx={{ alignSelf: 'center' }}
            >
              <FacebookIcon />

            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://x.com/MaterialUI"
              aria-label="X"
              sx={{ alignSelf: 'center' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://www.linkedin.com/company/mui/"
              aria-label="LinkedIn"
              sx={{ alignSelf: 'center' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
