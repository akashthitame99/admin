import React from "react";
import { Tooltip } from "./Tooltip";

interface Props {
  text?: string;
  length: number;
  className?: string;
}

export const ShortTooltip: React.FC<Props> = ({ text, length, className }) => {
  const textLength = text?.length;
  return (
    <Tooltip content={textLength && textLength > length ? text : ""}>
      <div className={className}>
        {textLength && textLength > length
          ? `${text?.slice(0, length)}...`
          : text}
      </div>
    </Tooltip>
  );
};
