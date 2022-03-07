import { useState, useEffect } from "react";

interface AwnserButtonProps {
    onAwnsering: (awnser: boolean) => void,
}

export const AwnserButton = (props: AwnserButtonProps) => {
  return (
    <div className="buttonContainer">
      <button onClick={()=> props.onAwnsering(true)}>True</button>
      <button onClick={()=> props.onAwnsering(false)}>False</button>
    </div>
  );
};
