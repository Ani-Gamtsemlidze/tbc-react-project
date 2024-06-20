// FormField.tsx

import { ErrorMessage, Field } from "formik";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
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
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <ErrorMessage name={name} component="div" className="text-red-500" />
      </div>
    </div>
  );
};

export default FormField;
