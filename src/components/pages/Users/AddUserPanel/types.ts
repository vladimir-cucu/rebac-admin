import type { UserPanelProps } from "../UserPanel";

export type Props = {
  close: UserPanelProps["close"];
  setPanelWidth: UserPanelProps["setPanelWidth"];
};

export enum Label {
  IDENTITY_ID_ERROR = "The identity was not created correctly",
  ROLES_ERROR = "Some roles couldn't be added",
  ENTITLEMENTS_ERROR = "Some entitlements couldn't be added",
}
