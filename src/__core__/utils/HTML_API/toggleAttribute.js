import checkType from '../generic/checkType';

const isValidValue = checkType(['string']);

export const addAttribute = (qualifiedName) => (elementRef) => (value) => {
  if (isValidValue(value)) elementRef.current?.setAttribute(qualifiedName, value);
  return elementRef;
};

export const removeAttribute = (qualifiedName) => (elementRef) => () => {
  elementRef.current?.removeAttribute(qualifiedName);
  return elementRef;
};
