import { registerResponseData } from "@/api/types";

export type userSliceState = {
  userData: registerResponseData | null;
  //   userAccessToken: string;
  //   userRefreshToken: string;
};
