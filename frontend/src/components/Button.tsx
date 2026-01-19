import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
interface ButtonProps{
    text:string,
    onClick:React.MouseEventHandler<HTMLElement>

}

export default function ButtonComponents(props:ButtonProps) {
  return (
    <Stack spacing={2} direction="row">
     
      <Button variant="contained" onClick={props.onClick}>{props.text}</Button>
      
    </Stack>
  );
}