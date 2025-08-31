import { useState } from "react";

const useFormValidation = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("");
  const [location, setLocation] = useState("");
  const [textArea, setTextArea] = useState("");

  const [emailError, setEmailError] = useState<string[]>([]);
  const [phoneNumberError, setPhoneNumberError] = useState<string[]>([]);
  const [nameError, setNameError] = useState<string[]>([]);
  const [locationError, setLocationError] = useState<string[]>([]);
  const [eventTypeError, setEventTypeError] = useState<string[]>([]);
  const [textAreaError, setTextAreaError] = useState<string[]>([]);

  const validateEmail = (value: string): string[] => {
    const errors = [];
    if (!/\S+@\S+\.\S+/.test(value)) {
      errors.push("Email is invalid");
    }
    return errors;
  };

  const validatePhoneNumber = (value: string): string[] => {
    const errors = [];
    if (!/^\d{11}$/.test(value)) {
      errors.push("Phone number must be 11 digits");
    }
    return errors;
  };

  const validateName = (value: string): string[] => {
    const errors = [];
    if (value.trim() === "") {
      errors.push("Name is required");
    }
    return errors;
  };

  const validateLocation = (value: string): string[] => {
    const errors = [];
    if (value.trim() === "") {
      errors.push("Location is required");
    }
    return errors;
  };

  const validateEventType = (value: string): string[] => {
    const errors = [];
    if (value.trim() === "") {
      errors.push("Event type is required");
    }
    return errors;
  };

  const validateTextArea = (value: string): string[] => {
    const errors = [];
    if (value.trim() === "") {
      errors.push("Message is required");
    }
    return errors;
  };

  const validateForm = (): boolean => {
    const nameErrors = validateName(name);
    const locationErrors = validateLocation(location);
    const eventTypeErrors = validateEventType(eventType);
    const textAreaErrors = validateTextArea(textArea);
    const emailErrors = validateEmail(email);
    const phoneErrors = validatePhoneNumber(phoneNumber);

    setNameError(nameErrors);
    setLocationError(locationErrors);
    setEventTypeError(eventTypeErrors);
    setTextAreaError(textAreaErrors);
    setEmailError(emailErrors);
    setPhoneNumberError(phoneErrors);

    const allErrors = [
      ...nameErrors,
      ...locationErrors,
      ...eventTypeErrors,
      ...textAreaErrors,
      ...emailErrors,
      ...phoneErrors,
    ];

    return allErrors.length === 0;
  };

  const validateBookingForm = (): boolean => {
    const nameErrors = validateName(name);
    const locationErrors = validateLocation(location);
    const eventTypeErrors = validateEventType(eventType);
    const emailErrors = validateEmail(email);
    const phoneErrors = validatePhoneNumber(phoneNumber);

    setNameError(nameErrors);
    setLocationError(locationErrors);
    setEventTypeError(eventTypeErrors);
    setEmailError(emailErrors);
    setPhoneNumberError(phoneErrors);

    const allErrors = [
      ...nameErrors,
      ...locationErrors,
      ...eventTypeErrors,
      ...emailErrors,
      ...phoneErrors,
    ];

    return allErrors.length === 0;
  };

  const resetForm = () => {
    setEmail("");
    setPhoneNumber("");
    setName("");
    setLocation("");
    setEventType("");
    setTextArea("");

    setEmailError([]);
    setPhoneNumberError([]);
    setNameError([]);
    setLocationError([]);
    setEventTypeError([]);
    setTextAreaError([]);
  };

  return {
    email,
    setEmail,
    emailError,
    phoneNumber,
    setPhoneNumber,
    phoneNumberError,
    name,
    setName,
    nameError,
    location,
    setLocation,
    locationError,
    eventType,
    setEventType,
    eventTypeError,
    textArea,
    setTextArea,
    textAreaError,
    validateForm,
    validateBookingForm,
    resetForm,
  };
};

export default useFormValidation;
