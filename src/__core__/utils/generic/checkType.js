export default (checkList = []) => (value) => {
  const valueType = typeof (value);
  const isValidType = (type) => valueType === type;

  return checkList?.some(isValidType);
};
