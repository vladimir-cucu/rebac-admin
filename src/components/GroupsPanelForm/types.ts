import type { Group } from "api/api.schemas";

export type Props = {
  addGroups?: Group[];
  existingGroups?: Group[];
  removeGroups?: Group[];
  setAddGroups: (addGroups: Group[]) => void;
  setRemoveGroups: (removeGroups: Group[]) => void;
};

export enum Label {
  SELECT = "Select groups",
  REMOVE = "Remove group",
}