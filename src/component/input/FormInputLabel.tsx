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
    <div className="flex flex-col gap-[2px]">
      <div className="px-3">{label}</div>
      <div className="bg-white px-3 rounded-[12px]">
        <input
          value={value}
          onChange={onChange}
          placeholder={label}
          type={type}
          className="bg-red"
          style={{
            width: "100%",
            height: "40px",
          }}
          required={required}
        />
      </div>
      {error && (
        <div className="px-3 italic text-red-600 text-xs">Allert Error</div>
      )}
    </div>
  );
}

export default FormInpurLabel;
