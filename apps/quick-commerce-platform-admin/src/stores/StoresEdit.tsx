import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const StoresEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="contactEmail" source="contactEmail" type="email" />
        <TextInput label="contactPhone" source="contactPhone" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="ownerId" source="ownerId" />
      </SimpleForm>
    </Edit>
  );
};
