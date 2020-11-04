import checkType from '../generic/checkType';

const isValidValue = checkType(['string', 'number']);

export default propertyName => elementRef => propertyValue => {
    if (isValidValue(propertyValue)) elementRef.current?.style.setProperty(propertyName, propertyValue);
    return elementRef;
}
