import { useState } from "react";
import { TwitterPicker } from "react-color";
import Input from "./Input";

function ColorPicker({ typeInput, onChange, field, register }) {
  const [color, setColor] = useState("");

  function handleChange(newColor) {
    setColor(newColor.hex);
    field.onChange(newColor.hex);
  }

  return (
    <>
      <Input
        value={color}
        type="text"
        readOnly
        {...register(typeInput, {
          required: "This field is required",
        })}
      />
      <TwitterPicker
        colors={[
          "#FF6900",
          "#FCB900",
          "#7BDCB5",

          "#8ED1FC",
          "#ABB8C3",
          "#EB144C",
          "#F78DA7",
          "#9900EF",
          "#333333",
          "#EEEEEE",
        ]}
        onChange={handleChange}
      />
    </>
  );
}

export default ColorPicker;
