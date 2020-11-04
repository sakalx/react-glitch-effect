import React, {useCallback} from 'react';

import {addAttribute, removeAttribute} from '../utils/HTML_API/toggleAttribute';

const addIdAttribute = addAttribute('id');
const removeIdAttribute = removeAttribute('id');

export default ({ref, id}) => {
    const addAnimation = useCallback(() => {
        addIdAttribute(ref)(id);
    }, []);

    const removeAnimation = useCallback(() => {
        removeIdAttribute(ref)();
    }, []);

    return ({
        addAnimation,
        removeAnimation,
    })
};
