
import { Container,Box,Grid } from "@mui/material"
import ImageField from "./Component/ImageField"
import FilterTabs from "./Component/FilterTabs"
import InstaFilter from "./Component/InstaFilter"
import CustomFilter from "./Component/CustomFilter"
import { createContext, useState } from "react"

export const FilterContext = createContext();
function App() {
  const [tabFilter,setTabFilter] = useState('instaFilter');
  const[filterClass,setFilterClass]= useState("");
  const[customFilter,setCustomFilter] = useState({
    contrast:100,
    brightness:100,
    saturate:100,
    sepia:0,
    gray:0
  });
  
  const value = {
    tabFilter,
    setTabFilter,
    filterClass,
    setFilterClass,
    customFilter,
    setCustomFilter
  }

  return (
    <FilterContext.Provider value={value}>
    <Container sx={{marginTop:'4rem',marginBottom:'4rem'}}>
    <Box sx={{textAlign:'center',marginBottom:'3rem'}}>
    <h1>Image Filter</h1>
    </Box>

    <Grid container spacing={10}>
    <ImageField/>
       <Grid item xs={12} md={5}>
         <FilterTabs/>
         {tabFilter==='instaFilter' ? <InstaFilter/> :<CustomFilter/> }
         
       </Grid>  
    </Grid>
    </Container>
    </FilterContext.Provider>
  )
}

export default App
  

