import { useLayoutEffect } from 'react';

import useSetStylePropertyCBList from './useSetStylePropertyCBList';

const invokeCallBack = (setStylePropertyCallBacksList) => ([, value], i) => setStylePropertyCallBacksList[i](value);

export default ({ ref, cssVariables }) => {
  const setStylePropertyCallBacksList = useSetStylePropertyCBList(ref, cssVariables);
  const dependency = JSON.stringify(cssVariables);

  useLayoutEffect(() => {
    cssVariables.forEach(invokeCallBack(setStylePropertyCallBacksList));
  }, [dependency]);
};
