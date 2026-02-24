import { CssBaseline } from "@mui/material";
import AppTheme from "../components/Blog/theme/AppTheme";
import AppAppBar from "./components/NavBar";

interface CleanLayoutProps {
  children?: any
}
const CleanLayout = (props: CleanLayoutProps) => {
  const { children } = props;

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar/>
      <main >
        {children}
      </main>
    </AppTheme>
  )
}
export default CleanLayout
