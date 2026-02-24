import NavBar from './components/NavBar'
import AppTheme from '../components/Blog/theme/AppTheme'
import { CssBaseline } from '@mui/material'
import Container from '@mui/material/Container';
import Footer from './components/Footer';

const PublicLayout = (props: { children?: any }) => {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <NavBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        {props.children}

      </Container>
      <Footer />
    </AppTheme>

  )
}
export default PublicLayout
