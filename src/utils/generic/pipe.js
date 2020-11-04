export default (...callbacks) => initValue => callbacks.reduce((value, callback) => callback(value), initValue);
