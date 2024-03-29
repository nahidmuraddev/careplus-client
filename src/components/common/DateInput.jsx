/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import { useLocation } from "react-router-dom";

const DateInput = ({ value, setValue, error, className, required = false }) => {
  const dateRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (error || !value) {
      dateRef.current.focus();
    }
  }, [error, !value]);

  return (
    <div ref={dateRef} tabIndex={0} className="relative">
      <DatePicker
        selected={value ? new Date(value) : null}
        onChange={(date) => setValue(date)}
        isClearable
        showTimeSelect={false}
        dateFormat="MM/dd/yyyy"
        className={`bg-gray-100 border-b outline-none focus:outline-none h-9 py-0 border-gray-900 w-full ${
          className && className
        } ${error && "border-b border-red-600"}`}
        disabled={pathname?.includes("/dashboard") ? true : false}
      />
      <input
        type="number"
        required={required && !value}
        className="opacity-0 absolute left-0 w-full h-full -z-10"
      />
    </div>
  );
};

export default DateInput;
