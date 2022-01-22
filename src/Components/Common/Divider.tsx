import React from "react";

interface IDividerProps {
  color?: string;
}
const Divider = ({ color }: IDividerProps) => {
  return <hr style={{ backgroundColor: color && "" }} />;
};

export default Divider;
