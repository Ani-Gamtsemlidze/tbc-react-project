// SelectField.tsx

import { ErrorMessage, Field } from "formik";

interface SelectFieldProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, options }) => {
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
          as="select"
          id={name}
          name={name}
          className="block w-full rounded-md border-0 py-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option>Choose Category</option>
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
        <ErrorMessage name={name} component="div" className="text-red-500" />
      </div>
    </div>
  );
};

export default SelectField;
