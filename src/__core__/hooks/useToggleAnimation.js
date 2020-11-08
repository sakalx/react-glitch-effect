import { useCallback } from 'react';

import { addAttribute, removeAttribute } from '../utils/HTML_API/toggleAttribute';

const addIdAttribute = addAttribute('id');
const removeIdAttribute = removeAttribute('id');

export default ({ ref, id }) => {
  const add = useCallback(() => addIdAttribute(ref)(id), []);

  const remove = useCallback(() => removeIdAttribute(ref)(), []);

  return ({ add, remove });
};
