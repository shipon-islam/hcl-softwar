import { Input } from "@/components/ui/input";

export function BoxInput({ label, className, error, ...rest }) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor="last_name"
          className="block text-sm font-medium  dark:text-white text-gray-500 pl-1"
        >
          {label}
        </label>
      )}
      <Input
        {...rest}
        className={`focus-visible:ring-0 placeholder:text-gray-400  text-4xl ${className}`}
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
          className="block text-sm font-medium text-gray-500 mb-1.5"
        >
          {label}
        </label>
      )}

      <Input
        {...rest}
        className={`focus-visible:ring-0 border-t-transparent border-l-transparent border-r-transparent border-b  placeholder:text-gray-400 rounded-none px-0 shadow-none ${className}`}
      />
    </div>
  );
}
