import { Container, Typography,Button, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ProductList from './ProductList';

export default function HomePage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ py: 6, mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Bienvenido a SamurayCats
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Descubre nuestro catálogo de productos de software exclusivos.
        </Typography>
        <Button variant="contained" component={RouterLink} to="/catalog">
          Explorar catálogo
        </Button>
      </Paper>
      {/* Show product list on homepage as preview */}
      <ProductList />
    </Container>
  );
}
