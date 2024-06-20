// TextareaField.tsx

import { ErrorMessage, Field } from "formik";

interface TextareaFieldProps {
  label: string;
  name: string;
  rows?: number;
  placeholder: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  name,
  placeholder,
  rows,
}) => {
  return (
    <div className="col-span-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <Field
          as="textarea"
          name={name}
          rows={rows}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 pl-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <ErrorMessage name={name} component="div" className="text-red-500" />
      </div>
    </div>
  );
};

export default TextareaField;
