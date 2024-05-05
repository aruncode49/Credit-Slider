import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

interface PROPS {
  sliderValue: number;
  changeSliderValue: (e: Event, newValue: number | number[]) => void;
}

// slider values and labels
const marks = [
  {
    value: 5,
    label: (
      <Box sx={{ position: "absolute" }}>
        <Typography variant="body2">$5</Typography>
        <Typography variant="body1" color="gray">
          500 credits
        </Typography>
      </Box>
    ),
  },
  {
    value: 10,
    label: (
      <Box sx={{ position: "absolute" }}>
        <Typography variant="body2">$10</Typography>
        <Typography variant="body1" color="gray">
          1200 credits
        </Typography>
      </Box>
    ),
  },
  {
    value: 15,
    label: (
      <Box sx={{ position: "absolute" }}>
        <Typography variant="body2">$15</Typography>
        <Typography variant="body1" color="gray">
          1700 credits
        </Typography>
      </Box>
    ),
  },
  {
    value: 20,
    label: (
      <Box sx={{ position: "absolute" }}>
        <Typography variant="body2">$20</Typography>
        <Typography variant="body1" color="gray">
          2500 credits
        </Typography>
      </Box>
    ),
  },
  {
    value: 25,
    label: (
      <Box sx={{ position: "absolute" }}>
        <Typography variant="body2">$25</Typography>
        <Typography variant="body1" color="gray">
          3900 credits
        </Typography>
      </Box>
    ),
  },
  {
    value: 30,
    label: (
      <Box sx={{ position: "absolute" }}>
        <Typography variant="body2">$30</Typography>
        <Typography variant="body1" color="gray">
          5000 credits
        </Typography>
      </Box>
    ),
  },
];

export default function DiscreteSliderValues({
  sliderValue,
  changeSliderValue,
}: PROPS) {
  return (
    <Box mt={"16px"} sx={{ position: "relative" }}>
      <Slider
        aria-label="Restricted values"
        value={sliderValue}
        onChange={changeSliderValue}
        step={null}
        valueLabelDisplay="auto"
        max={33}
        min={5}
        marks={marks}
        sx={{
          height: "8px",
          color: "lightgray",
          "& .MuiSlider-track, .MuiSlider-thumb": {
            backgroundColor: "primary.main",
          },
          "& .MuiSlider-markLabel": {
            marginTop: "13.5px",
          },
        }}
      />
    </Box>
  );
}
