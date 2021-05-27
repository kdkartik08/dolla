import React from 'react'
import { Container, FormButton, FormContent, FormInput, FormLabel, FormWrap, FormH1, Form, Icon, Text } from './SignInElements';

const SignIn = () => {
    return (
       <Container>
           <FormWrap>
               <Icon to='/'>Dolla</Icon>
               <FormContent>
                   <Form action='#'>
                       <FormH1>Sign in to your account</FormH1>
                       <FormLabel htmlFor='for'>Emai</FormLabel>
                       <FormInput type='email' required />
                       <FormLabel htmlFor='for'>Password</FormLabel>
                       <FormInput type='password' required />
                       <FormButton type='submit'>Continue</FormButton>
                       <Text>Forgot Password?</Text>
                   </Form>
               </FormContent>
           </FormWrap>
       </Container>
    )
}

export default SignIn;
