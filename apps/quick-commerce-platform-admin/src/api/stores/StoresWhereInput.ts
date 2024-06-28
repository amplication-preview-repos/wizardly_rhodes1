import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StoresWhereInput = {
  address?: StringNullableFilter;
  contactEmail?: StringNullableFilter;
  contactPhone?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  ownerId?: StringNullableFilter;
};
