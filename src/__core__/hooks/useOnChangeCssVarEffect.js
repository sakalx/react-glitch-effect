import {useLayoutEffect} from 'react';

import pipe from '../utils/generic/pipe';
import useSetStylePropertyCallBacks from './useSetStylePropertyCallBacks';

const getCallBack = setStylePropertyCallBacks => ([_, value], i) => setStylePropertyCallBacks[i](value);

export default (ref, cssVariables) => {
    const setStylePropertyCallBacks = useSetStylePropertyCallBacks(cssVariables);

    useLayoutEffect(() => {
        const callBacks = cssVariables.map(getCallBack(setStylePropertyCallBacks));
        pipe(...callBacks)(ref);
    }, [JSON.stringify(cssVariables)]);
};
