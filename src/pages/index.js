import {
  Autocomplete,
  Box,
  Button,
  Container,
  Fab,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Slider,
  Stack,
  Switch,
  TextField,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Box component="h1">h1タイトル</Box>
      <Button variant="outlined">Outlined</Button>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Slider />
      </Stack>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
      <br />
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel required control={<Switch />} label="Required" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
      </FormGroup>
    </Container>
  );
}
