import styled from "@emotion/styled";
import { Typography } from "@mui/material";

interface TextProps {
  fsize?: number
  margin?: string
  color?: string
}

export const Text = styled(Typography)<TextProps>`
  font-size: ${(props) => props.fsize ?  props.fsize : 14}px;
  margin: ${(props) => props.margin ?  props.margin : 0};
  color: ${(props) => props.color ?  props.color : '#000'};
`