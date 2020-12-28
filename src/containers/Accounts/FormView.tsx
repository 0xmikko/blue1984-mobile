/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import * as yup from 'yup';
import {
  FormikForm,
  FormikFormViewProps,
  LoadingView,
} from 'rn-mobile-components';
import {AccountCreateDTO} from '../../core/accounts';

const formSchema = yup.object({
  id: yup.string().required().min(3),
});

interface FormViewProfileProps extends FormikFormViewProps<AccountCreateDTO> {}

export function FormView({
  data,
  onSubmit,
  isSubmitted,
}: FormViewProfileProps): React.ReactElement {
  if (!data) return <LoadingView />;

  const fields = {
    id: {},
  };

  const onSubmitH = (data: Record<string, string>) => {
    onSubmit((data as unknown) as AccountCreateDTO);
  };
  return (
    <FormikForm
      formSchema={formSchema}
      fields={fields}
      initialValues={(data as unknown) as Record<string, string>}
      onSubmit={onSubmitH}
      isSubmitted={isSubmitted}
    />
  );
}
