import { action, Action, persist } from 'easy-peasy';

export interface HeaderModel {
  // menu dropdown
  menuDrop: boolean;
  menuDropdown: Action<HeaderModel, boolean>;

  // nav title
  title: string;
  setTitle: Action<HeaderModel, string>;

  // search option
  option: string;
  setOption: Action<HeaderModel, string>;

  // notification
  noteCount: number;
  clearNotification: Action<HeaderModel, number>;
  noteDrop: boolean;
  noteDropdown: Action<HeaderModel, boolean>;

  // scroll

  element: any;
  addElement: Action<HeaderModel, any>;
}

const header: HeaderModel = persist(
  {
    element: null,
    addElement: action((state, payload) => {
      state.element = payload;
    }),

    menuDrop: false,
    menuDropdown: action((state, payload) => {
      state.menuDrop = payload;
    }),

    title: ``,
    setTitle: action((state, payload) => {
      state.title = payload;
    }),

    option: `Assets`,
    setOption: action((state, payload) => {
      state.option = payload;
    }),

    noteCount: 1,
    clearNotification: action((state, payload) => {
      state.noteCount = payload;
    }),

    noteDrop: false,
    noteDropdown: action((state, payload) => {
      state.noteDrop = payload;
    }),
  },
  { storage: `localStorage` }
);

export default header;
