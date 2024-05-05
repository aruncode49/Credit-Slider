import { useState } from "react";
import { Typography, Stack, Button, Box } from "@mui/material";
import DiscreteSliderValues from "./Slider";
import { SwitchToggle } from "./SwitchToggle";

const CreditSlider = () => {
  const [checked, setChecked] = useState(true);
  const [sliderValue, setSliderValue] = useState<number>(10);

  // function to change the switch value (true or false)
  const changeSwitchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  // function to change the slider values
  const changeSliderValue = (e: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  // function to print the slider value to console on click of confirm purchase button
  const handleConfirmPurchase = () => {
    console.log(`Credit Amount : $${sliderValue}`);
  };

  return (
    <div className="credit_slider">
      <Stack direction={"row"} alignItems={"center"}>
        {/* Heading With Toggle Switch */}
        <Typography variant="h1">Setup Auto Top-up</Typography>

        {/* toggle switch */}
        <SwitchToggle
          checked={checked}
          onChange={changeSwitchValue}
          color={"secondary"}
          inputProps={{ "aria-label": "switch toggle" }}
          sx={{ marginLeft: "16px" }}
        />
      </Stack>

      {/* Sub Heading */}
      <Typography variant="body1" color={"grey"} mt="4px">
        Once the credit goes below a minimum threshold{" "}
        <Typography variant="body2" component={"span"} color={"primary"}>
          50
        </Typography>
        , we will auto-purchase{" "}
        <Typography variant="body2" component={"span"} color={"primary"}>
          1200
        </Typography>{" "}
        credits and add them to your account.{" "}
        <Typography
          variant="body2"
          component={"span"}
          sx={{ textDecoration: "underline" }}
        >
          Learn more
        </Typography>
      </Typography>

      {/* Slider -> Hide the slider based on swtich checked or not */}
      {checked && (
        <Box>
          <DiscreteSliderValues
            sliderValue={sliderValue}
            changeSliderValue={changeSliderValue}
          />
          <Button
            onClick={handleConfirmPurchase}
            sx={{
              marginTop: "50px",
              padding: "12px 16px",
              borderRadius: "8px",
              boxShadow: "none",
              fontSize: "16px",
              fontWeight: "600",
              textTransform: "none",
            }}
            variant="contained"
            color="primary"
          >
            Confirm auto-purchase
          </Button>
        </Box>
      )}
    </div>
  );
};

export default CreditSlider;
