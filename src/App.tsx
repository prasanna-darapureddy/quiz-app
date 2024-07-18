import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import Home from './components/home/Home';
import Theme from './Theme';
import { requestForToken } from './firebaseConfig';

function App() {
   requestForToken();
  return (
    <>
    <ThemeProvider theme={Theme}>
      <CssBaseline/>
      <Home />
    </ThemeProvider>
    </>
  );
}

export default App;
