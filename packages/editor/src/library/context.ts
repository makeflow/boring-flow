import {createContext} from 'react';

import {Editor} from './procedure-editor';

export const EditorContext = createContext<{
  editor: Editor;
}>(undefined!);
