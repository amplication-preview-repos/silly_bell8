import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlogEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="eventType" source="eventType" />
        <TextInput label="postId" source="postId" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
