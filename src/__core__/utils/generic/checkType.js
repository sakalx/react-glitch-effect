export default (checkList = []) => (value) => {
  const typeValue = typeof (value);
  const isValidType = (type) => typeValue === type;

  return checkList?.every(isValidType);
};
