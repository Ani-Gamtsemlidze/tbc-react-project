import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function PriceFilter() {
  const [price, setPrice] = React.useState<string | number>("");
  const [open, setOpen] = React.useState(false);
  console.log(price);

  const handleChange = (event: SelectChangeEvent<typeof price>) => {
    setPrice(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="">
      <FormControl className="price_input" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel className="" id="demo-controlled-open-select-label">
          Price
        </InputLabel>
        <Select
          className=""
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={price}
          label="Price"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Between 5 to 20</MenuItem>
          <MenuItem value={2}>Between 20 to 50</MenuItem>
          <MenuItem value={3}>Between 50 to 150</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
