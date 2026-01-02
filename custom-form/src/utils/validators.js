export const required = (value) => (value ? "" : "This field is required");

export const minimumLength = (length) => (value) =>
  value.length >= length || `Minimum ${length} characters required`;

export const email = (value) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
    ? ""
    : "Invalid email address";
