import header, { HeaderModel } from "./Header/header.model";

export interface RootModel {
  header: HeaderModel;
}

const rootModel: RootModel = {
  header,
};

export default rootModel;
