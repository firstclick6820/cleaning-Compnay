import { Box } from "@mui/system"


// import General Componnets
import {Navbar, Footer} from './components'




// import Pages
import Pages from "./contents"


function App() {
  return (
    <Box>
        <Navbar />
        <Pages />
        <Footer />
    </Box>
  )
}

export default App
