import { useMemo } from 'react';

import setStyleProperty from '../utils/HTML_API/setStyleProperty';

const createSetStylePropertyCallBack = (ref) => ([cssVarName]) => setStyleProperty(cssVarName)(ref);

export default (ref, cssVariables) => useMemo(() => cssVariables.map(createSetStylePropertyCallBack(ref)), []);
