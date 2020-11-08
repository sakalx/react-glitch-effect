import { useLayoutEffect } from 'react';

import pipe from '../utils/generic/pipe';
import useSetStylePropertyCBList from './useSetStylePropertyCBList';

const getCallBack = (setStylePropertyCallBacksList) => ([, value], i) => setStylePropertyCallBacksList[i](value);

export default ({ ref, cssVariables }) => {
  const setStylePropertyCallBacksList = useSetStylePropertyCBList(cssVariables);
  const dependency = JSON.stringify(cssVariables);

  useLayoutEffect(() => {
    const callBacks = cssVariables.map(getCallBack(setStylePropertyCallBacksList));
    pipe(...callBacks)(ref);
  }, [dependency]);
};
