import { Input, TextField } from "@material-ui/core";
type IInput = {
  label?: string;
  value: string;
  onChange?: (val: any) => void;
  type?: "text" | "password" | "email";
  required?: boolean;
  error?: string;
};
function FormInpurLabel({
  label,
  value,
  onChange,
  type = "text",
  required,
  error,
}: IInput) {
  return (
    <div className={`${error ? " " : "pb-4 "} flex flex-col  gap-[2px]`}>
      <div className={`${error ? " text-red-600 " : ""} px-[14px]`}>
        {label}
      </div>
      <div
        className={`${
          error ? " border-red-600  " : "border-white  "
        }bg-white px-3 border-[2px] rounded-[12px]`}
      >
        <input
          value={value}
          onChange={onChange}
          placeholder={label}
          type={type}
          className="bg-red"
          style={{
            width: "100%",
            height: "36px",
          }}
          required={required}
        />
      </div>
      <div className="px-[14px] italic text-red-600 text-xs">{error?.[0]}</div>
    </div>
  );
}

export default FormInpurLabel;
