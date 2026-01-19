import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
interface InputBoxProps{
    text:string,
    onChange:React.ChangeEventHandler<HTMLInputElement>,
    type:string,
    value:string


}
export default function InputBox(props:InputBoxProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 } }}>
       <TextField
        helperText=""
        id="demo-helper-text-aligned-no-helper"
        label={props.text}
        onChange={props.onChange}
        type={props.type}
        value={props.value}
      />
    </Box>
  );
}