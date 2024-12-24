import { Input } from "@/components/ui/input";

export function BoxInput({ label, className, error, ...rest }) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor="last_name"
          className="block text-xl  text-hcl-secondary pl-1"
        >
          {label}
        </label>
      )}
      <Input
        {...rest}
        className={`focus-visible:ring-0 placeholder:text-gray-400 bg-white h-[3.125rem] input-text ${className}`}
      />
      {error && <p className="text-hcl-purple text-sm mt-2 ml-1">{error}</p>}
    </div>
  );
}
export function TextInput({ label, className, ...rest }) {
  return (
    <div>
      {label && (
        <label
          htmlFor="last_name"
          className="block text-lg font-medium text-[#A39A9A] mb-1.5"
        >
          {label}
        </label>
      )}

      <Input
        {...rest}
        className={`focus-visible:ring-0 border-t-transparent border-l-transparent border-r-transparent border-b  placeholder:text-lite rounded-none px-0 shadow-none input-text text-hcl-secondary ${className}`}
      />
    </div>
  );
}
