const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/;
const phoneRegex = /^\+?[\d\s()-]{8,20}$/;
const skypeRegex = /^[a-zA-Z0-9_.-]{3,}$/;
const timeRegexp = /^([01]\d|2[0-3]):?([0-5]\d)$/;
const dateRegexp = /^\d{4}-\d{2}-\d{2}$/;
const birthdayRegex = dateRegexp;

module.exports = {
  emailRegex,
  passwordRegex,
  skypeRegex,
  timeRegexp,
  dateRegexp,
  phoneRegex,
  birthdayRegex,
};
