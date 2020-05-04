import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform'

import { updateProfileRequest } from '../../store/modules/user/action';
import { signOut } from '../../store/modules/auth/actions';
import AvatarInput from './AvatarInput/index';
import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  };

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit} >
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de email" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Sua senha" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input name="confirmpassword" type="password" placeholder="Confirmação de senha" />

        <button type="submit" >Atualizar perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut} >Sair do GoBarber</button>
    </Container>
  );
}
