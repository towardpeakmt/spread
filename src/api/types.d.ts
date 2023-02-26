export type fetchLoginArgs = {
  email: string;
  password: string;
};
export type loginResponseData = {
  access_token: string;
  refresh_token: string;
};

export type fetchRegisterArgs = {
  email: string;
  password: string;
  password_confirmation: string;
};
export type registerResponseData = {
  uuid: string;
  email: string;
};

// workSpaces
export type workspaceResponseData = {
  uuid: string;
  name: string;
};
export type createWorkspaceArgs = {
  name: string;
};
