import { Box ,Slider} from "@mui/material"
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../App";


const SliderField = ({slide}) => {
    const {label,defaultValue,field} = slide;
    const [value,setValue] = useState(defaultValue);
    const handleSliderValue = e =>setValue(e.target.value);
    const {customFilter,setCustomFilter} = useContext(FilterContext);

    useEffect(()=>{
        setCustomFilter({...customFilter,[field]:value})
    },[value]);  

  return (
    <Box sx={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1rem'}}>
        <Box>{label}</Box>
        <Slider
        size="small"
        valueLabelDisplay="auto"
        value={value}
        onChange={handleSliderValue}
        max={200}
      />
        
    </Box>
  )
}

export default SliderField