import { useWatch, Control } from "react-hook-form";
import { Check, X } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface PasswordFieldProps {
  control: Control<any>;
  name: string;
}

export function PasswordField({ control, name }: PasswordFieldProps) {
  const passwordValue = useWatch({ control, name });

  const passwordRules = [
    {
      label: "Minimum 8 characters",
      isValid: passwordValue?.length >= 8,
    },
    {
      label: "Maximum 20 characters",
      isValid: passwordValue?.length <= 20,
    },
    {
      label: "At least one uppercase letter",
      isValid: /[A-Z]/.test(passwordValue || ""),
    },
    {
      label: "At least one lowercase letter",
      isValid: /[a-z]/.test(passwordValue || ""),
    },
    {
      label: "At least one number",
      isValid: /[0-9]/.test(passwordValue || ""),
    },
    {
      label: "At least one special character (!@#$%^&*)",
      isValid: /[!@#$%^&*]/.test(passwordValue || ""),
    },
  ];

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input type="password" placeholder="Enter password" {...field} />
          </FormControl>

          {/* Password Validation Rules */}
          <div className="columns-3 mt-2">
            {passwordRules.map((rule, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 text-sm ${
                  rule.isValid ? "text-green-500" : "text-red-500"
                }`}
              >
                {rule.isValid ? <Check /> : <X />}
                <span>{rule.label}</span>
              </div>
            ))}
          </div>
        </FormItem>
      )}
    />
  );
}
