import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} SamurayCats. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
}
