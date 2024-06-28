import { SortOrder } from "../../util/SortOrder";

export type StoresOrderByInput = {
  address?: SortOrder;
  contactEmail?: SortOrder;
  contactPhone?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  ownerId?: SortOrder;
  updatedAt?: SortOrder;
};
