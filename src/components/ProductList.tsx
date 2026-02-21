import { Link as RouterLink } from 'react-router-dom';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';

// Example product data
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  { id: 1, name: 'Producto A', price: 49.99, description: 'Descripción del producto A.' },
  { id: 2, name: 'Producto B', price: 79.99, description: 'Descripción del producto B.' },
  { id: 3, name: 'Producto C', price: 29.99, description: 'Descripción del producto C.' },
];

export default function ProductList() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Catálogo de Productos
      </Typography>
      <Grid container spacing={4}>
        {products.map((p) => (
          <Grid  size={{xs:12, sm:6, md:4} } key={p.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {p.name}
                </Typography>
                <Typography>${p.price.toFixed(2)}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component={RouterLink}
                  to={`/product/${p.id}`}
                >
                  Ver detalles
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
