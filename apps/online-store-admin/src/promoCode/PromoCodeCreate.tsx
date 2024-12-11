import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PromoCodeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <NumberInput label="discount" source="discount" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
      </SimpleForm>
    </Create>
  );
};
