import { useMemo } from 'react';

import setStyleProperty from '../utils/HTML_API/setStyleProperty';

const createSetStylePropertyCallBack = ([cssVarName]) => setStyleProperty(cssVarName);

export default (cssVariables) => useMemo(() => cssVariables.map(createSetStylePropertyCallBack), []);
