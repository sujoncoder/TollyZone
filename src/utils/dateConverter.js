const dateConverter = (getMe) => {
  const myDate = new Date(getMe);
  const date = myDate.toDateString();
  return date;
};
export default dateConverter;
