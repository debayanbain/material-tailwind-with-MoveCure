import { FormItemContext } from "@/components/customForms";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";

export default function useFormController() {
    const itemContext = useContext(FormItemContext);
    if (!itemContext)
        throw new Error("useFromState must be used within a FormItems");
    const { getFieldState, formState } = useFormContext();

    const fieldState = getFieldState(itemContext.name, formState);
    console.log(fieldState);
    const fieldName = itemContext.fieldName;
    return { ...fieldState, fieldName };
}