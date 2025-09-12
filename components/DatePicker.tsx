import calculateAge from "@/lib/utils/helper/DobToAge";
import { DatepickerProps } from "@/Types/componentsTypes";
import React from "react";
import DatePicker from "react-datepicker";

const DatePickerCustom = ({
  fields,
  placeholder,
  onChangeChipValues,
}: DatepickerProps) => {
  const handleDates = (date: Date | null) => {
    fields.onChange(date);
    if (date && onChangeChipValues) {
      const age = calculateAge(date);
      onChangeChipValues(age.toString());
    }
  };

  return (
    <>
      <DatePicker
        {...fields}
        selected={fields.value}
        onChange={handleDates}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        dateFormat={"dd/MM/yyyy"}
        showTimeSelect={false}
        timeInputLabel="Time:"
        wrapperClassName="date-picker"
        placeholderText={placeholder || "DD/MM/YYYY"}
      />
    </>
  );
};

export default DatePickerCustom;
