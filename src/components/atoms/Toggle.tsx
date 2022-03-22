import { ChangeEventHandler, useState } from "react";
import { ThemeUICSSObject } from "theme-ui";

type ToggleProps = {
  id: string;
  label: string;
  isChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export default function Toggle({ id, label, isChecked, onChange }: ToggleProps) {
  const [inputChecked, setInputChecked] = useState(isChecked);

  // const inputStyle: ThemeUICSSObject = {
  //   display: "none",
  // };

  const handleChange = (e: any) => {
    setInputChecked(!isChecked);
    onChange && onChange(e);
  };

  return (
    <>
      <input type="checkbox" id={id} checked={inputChecked} onChange={handleChange} />
      <label htmlFor={id}>{label}</label>
    </>
  );
}
