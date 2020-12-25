/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from "react";
import * as yup from "yup";
import {
  FormikForm,
  FormikFormViewProps,
} from "../../components/Forms/FormikForm";
import { AccountCreateDTO} from "../../core/accounts";
import { Loading } from "../../components/Loading";


const formSchema = yup.object({
  id: yup.string().required().min(3),
});

interface FormViewProfileProps extends FormikFormViewProps<AccountCreateDTO> {}

export const FormView: React.FC<FormViewProfileProps> = ({
  data,
  onSubmit,
  isSubmitted,
}) => {


  const fields = {
    id: {
    },
  };

  if (!data) return <LoadingView />;

  return (
    <FormikForm
      formSchema={formSchema}
      fields={fields}
      initialValues={data}
      onSubmit={onSubmit}
      isSubmitted={isSubmitted}
    />
  );
};
