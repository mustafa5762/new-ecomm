import React from "react";
import {Select, SelectItem} from "@nextui-org/react";

export default function SelectSize() {
  return (
    <div className="">
      <Select
        label="Select Size"
        className="w-full"
      >
          <SelectItem value="hello">
            hello
          </SelectItem>
      </Select>
    </div>
  );
}
