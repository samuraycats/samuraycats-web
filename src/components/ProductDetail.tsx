import { useParams, Link as RouterLink } from 'react-router-dom';

import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import type { Product } from './ProductList';

// duplicate the example array (could be shared in a real app)
const products: Product[] = [
  { id: 1, name: 'Producto A', price: 49.99, description: 'Descripción del producto A.' },
  { id: 2, name: 'Producto B', price: 79.99, description: 'Descripción del producto B.' },
  { id: 3, name: 'Producto C', price: 29.99, description: 'Descripción del producto C.' },
];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Producto no encontrado
        </Typography>
        <Typography>Es posible que el producto no exista.</Typography>
        <Button component={RouterLink} to="/" sx={{ mt: 2 }}>
          Volver al catálogo
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 600, width: '100%' }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            {product.name}
          </Typography>
          <Typography paragraph>{product.description}</Typography>
          <Typography variant="h6">Precio: ${product.price.toFixed(2)}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button variant="contained" component={RouterLink} to="/">
            Volver al catálogo
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
