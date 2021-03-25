export interface StandardReactProps {
  className?: string;
  children?: any;
  onClick?: Function;
  active?: boolean;
  style?: any;
}

export interface ReactSelectProps {
  label: string;
  value: string;
}

export interface registerPayload {
  fullname: string;
  email: string;
  username: string;
  password: string;
  re_type_password: string;
  birthday: Date;
  sponsor: string;
  presetSponsor: boolean;
  phone: string;
  is_master_account: string | Blob;
}

export interface loginPayload {
  user_name: string;
  user_pass: string;
}
export interface TableProps {
  header?: any;
  body?: any;
}
export enum NotifyStatus {
  success,
  error,
}
