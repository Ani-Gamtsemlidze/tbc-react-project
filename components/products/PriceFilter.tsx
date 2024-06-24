import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useAdmin } from "../../app/context/AdminContext";

export default function PriceFilter() {
  const [open, setOpen] = React.useState(false);

  const { price, handleChange } = useAdmin();

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
            <em>All Products</em>
          </MenuItem>
          <MenuItem value={1}>Between $ 5 to $ 20</MenuItem>
          <MenuItem value={2}>Between $ 20 to $ 50</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
