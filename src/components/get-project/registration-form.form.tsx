import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '../ui/form';
import {
  RegistrationFormSchema,
  type RegistrationFormType
} from './registration-form.validation';
import { useState } from 'react';
export default function RegistrationForm() {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const form = useForm<RegistrationFormType>({
    resolver: zodResolver(RegistrationFormSchema),
    defaultValues: {
      name: '',
      email: ''
    }
  });
  form.watch((data) => {
    let allFilled = true;
    for (const key in data as RegistrationFormType) {
      const value = data[key as keyof RegistrationFormType];
      if (!value || value.trim().length === 0) allFilled = false;
    }
    setIsDisabled(!allFilled);
  });
  const onSubmit = () => {
    navigate('/success');
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-[47px] w-[418px] h-auto"
      >
        <div className="space-y-[24px]">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter you email" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={isDisabled}
          variant={'filled'}
          size={'lg'}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
