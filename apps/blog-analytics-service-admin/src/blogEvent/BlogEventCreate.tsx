import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlogEventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="eventType" source="eventType" />
        <TextInput label="postId" source="postId" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <div />
      </SimpleForm>
    </Create>
  );
};
