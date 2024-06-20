import React from "react";
import { ErrorMessage, Field } from "formik";

interface NumberInputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
}

const NumberInputField: React.FC<NumberInputFieldProps> = ({
  label,
  name,
  placeholder,
}) => {
  return (
    <div className="col-span-3">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <Field
          type="number"
          id={name}
          name={name}
          placeholder={placeholder}
          min="1"
          className="block w-full rounded-md border-0 py-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        />
        <ErrorMessage name={name} component="div" className="text-red-500" />
      </div>
    </div>
  );
};

export default NumberInputField;
