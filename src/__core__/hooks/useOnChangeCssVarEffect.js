import { useLayoutEffect } from 'react';

export default (ref, restCssVarList) => {
  useLayoutEffect(() => {
    JSON.parse(restCssVarList).forEach(([name, value]) => {
      ref.current?.style.setProperty(name, value);
    });
  }, [restCssVarList]);
};
