import * as React from "react";
import { Typography } from "@mui/material";

export function EditableText(props) {
  return (
    <Typography
      suppressContentEditableWarning={true}
      contentEditable={true}
      style={{ outline: "0 solid transparent" }}
      variant="h6"
      fontSize={props.size}
      fontWeight={props.fontWeight}
      textAlign={props.textAlign}
      border={1}
      align="justify"
    >
      {props.text}
    </Typography>
  );
}

export function TextHeading2(props) {
  return <Typography style={{ fontWeight: 600 }}>{props.text}</Typography>;
}
