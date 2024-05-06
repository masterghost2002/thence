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
export default function RegistrationForm() {
  const navigate = useNavigate();
  const form = useForm<RegistrationFormType>({
    resolver: zodResolver(RegistrationFormSchema),
    defaultValues: {
      name: '',
      email: ''
    }
  });
  const formState = form.formState;
  const onSubmit = () => {
    navigate('/success');
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full h-auto"
      >
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
        <Button
          type="submit"
          className="w-full"
          disabled={!formState.isValid}
          variant={'filled'}
          size={'lg'}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
