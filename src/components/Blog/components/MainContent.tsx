import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import Button from '@mui/material/Button';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Link } from 'react-router-dom';
const cardData = [

  {
    img: '/bots.png',
    tag: 'Robots de validación',
    title: 'Automatización inteligente para procesos de identidad',
    description:
      'Optimiza tus flujos con nuestros bots especializados en validación masiva de RFC, CURP y cuentas bancarias. Seguridad y precisión en tiempo real para tu infraestructura.',
    link: "/app/bots",
  },
  {
    img: '/web_app.png',
    tag: 'Sistemas empresariales',
    title: 'Gestión integral: Facturación, Invoice y Flujos de trabajo',
    description:
      'Controla tu empresa desde la web. Nuestras soluciones administrativas permiten gestionar facturación y flujos operativos con una interfaz intuitiva y escalable.',
    link: "/app/web",
  },
  {
    img: '/movil_app.png',
    tag: 'Soluciones móviles',
    title: 'Tu administración en la palma de tu mano',
    description:
      'Llevamos la potencia de nuestras herramientas de gestión a dispositivos móviles. Accesibilidad total para consultar estados financieros y aprobar flujos desde cualquier lugar.',
    link: "/app/movil",
  },

];

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  textAlign: "justify"
});

function Author({ link }: { link: string }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '16px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }} >
        <Link to={link}>
          <Button variant="contained" color="primary" endIcon={<DoubleArrowIcon />}>
            Más información
          </Button>
        </Link>
      </Box>

    </Box>
  );
}

export function Search() {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null,
  );

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info('You clicked the filter chip.');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography>
          Mantente al tanto de lo último sobre nuestros productos.
        </Typography>
      </div>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          gap: 1,
          width: { xs: '100%', md: 'fit-content' },
          overflow: 'auto',
        }}
      >
        <Search />
        {/*        
         <IconButton size="small" aria-label="RSS feed">
          <RssFeedRoundedIcon />
        </IconButton>*/
        }

      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          alignItems: { xs: 'start', md: 'center' },
          gap: 4,
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'row',
            gap: 3,
            overflow: 'auto',
          }}
        >
          <Chip
            onClick={handleClick}
            size="medium"
            label="Todas las categorias"
          />
          <Chip
            onClick={handleClick}
            size="medium"
            label="Robots"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
          <Chip
            onClick={handleClick}
            size="medium"
            label="Aplicaciones web"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />
          <Chip
            onClick={handleClick}
            size="medium"
            label="Aplicaciones moviles"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          />

        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            gap: 1,
            width: { xs: '100%', md: 'fit-content' },
            overflow: 'auto',
          }}
        >
          <Search />
          <IconButton size="small" aria-label="RSS feed">
            <RssFeedRoundedIcon />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={2} columns={12}>
        {cardData.map((item, index) => {

          return (<Grid key={index} size={{ xs: 12, md: 4 }}>
            <StyledCard
              variant="outlined"
              onFocus={() => handleFocus(2)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 2 ? 'Mui-focused' : ''}
              sx={{ height: '100%' }}
            >
              <CardMedia component="img" alt="green iguana" image={item.img}
                sx={{
                  height: { sm: 'auto', md: '50%' },
                  aspectRatio: { sm: '16 / 9', md: '' },
                }}
              />
              <StyledCardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.tag}
                </Typography>
                <Typography gutterBottom variant="caption" component="div">
                  {item.title}
                </Typography>

                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                  {item.description}
                </StyledTypography>

              </StyledCardContent>
              <Author link={item.link} />
            </StyledCard>
          </Grid>)
        })}



      </Grid>
    </Box>
  );
}
