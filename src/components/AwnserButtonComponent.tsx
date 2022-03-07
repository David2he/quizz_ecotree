import { useState, useEffect } from "react";

interface AwnserButtonProps {
    onAwnsering: (awnser: boolean) => void,
}

export const AwnserButton = (props: AwnserButtonProps) => {
  return (
    <div>
      <button onClick={()=> props.onAwnsering(true)}>yes</button>
      <button onClick={()=> props.onAwnsering(false)}>no</button>
    </div>
  );
};
