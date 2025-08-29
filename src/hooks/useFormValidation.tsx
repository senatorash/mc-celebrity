import { useEffect, useState } from "react";

const useFormValidation = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("");
  const [emailError, setEmailError] = useState<string[]>([]);
  const [phoneNumberError, setPhoneNumberError] = useState<string[]>([]);
  const validateEmail = (value: string) => {
    let errors = [];
    setEmail(value);
    if (!/\S+@\S+\.\S+/.test(value)) {
      errors.push("Email is invalid");
    }

    return setEmailError([...errors]);
  };

  const validatePhoneNumber = (value: string) => {
    let errors = [];
    setPhoneNumber(value);
    if (!/^\d{11}$/.test(value)) {
      errors.push("Phone number must be 11 digits");
    }
    return setPhoneNumberError([...errors]);
  };

  const validateName = (value: string) => {
    let errors = [];
    setName(value);
    if (value.trim() === "") {
      errors.push("Name is required");
    }
    return errors;
  };

  const validateEventType = (value: string) => {
    let errors = [];
    setEventType(value);
    if (value.trim() === "") {
      errors.push("Event type is required");
    }
    return errors;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (phoneNumber !== "") {
        validatePhoneNumber(phoneNumber);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [phoneNumber]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (email !== "") {
        validateEmail(email);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [email]);

  return {
    email,
    setEmail: validateEmail,
    emailError,
    phoneNumber,
    setPhoneNumber: validatePhoneNumber,
    phoneNumberError,
    name,
    setName: validateName,
    eventType,
    setEventType: validateEventType,
  };
};
export default useFormValidation;
