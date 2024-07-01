'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { INDUSTRIES } from './constants';

const profileFormSchema = z.object({
  'business-name': z.string().min(1).max(50),
  'business-description': z.string().min(1).max(200),
  industry: z.string({
    required_error: "Please select the Business' Industry."
  }),
  style: z.string({
    required_error: "Please select the Business' Style."
  }),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'Please enter a valid URL.' })
      })
    )
    .optional()
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function AccountSettingsPage() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: 'onChange'
  });

  const { fields, append } = useFieldArray({
    name: 'urls',
    control: form.control
  });

  function onSubmit(data: ProfileFormValues) {
    toast('You submitted the following values:', {
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    });
  }

  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Manage your Business</h3>
        <p className='text-sm text-muted-foreground'>
          This is how others will see you on the site.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='business-name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Name of your Business' {...field} />
                </FormControl>
                <FormDescription>DESCRIPTION</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='business-description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Tell others a little bit about your business'
                    className='resize-none'
                    {...field}
                  />
                </FormControl>
                <FormDescription>DESCRIPTION</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='industry'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industry</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your Business' Industry" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {INDUSTRIES.map(({ label, value }, index: number) => (
                      <SelectItem key={index} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>DESCRIPTION</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='style'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Style</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your Business' style" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {INDUSTRIES.map(({ label, value }, index: number) => (
                      <SelectItem key={index} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>{"What's this?"}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            {fields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`urls.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && 'sr-only')}>
                      URLs
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && 'sr-only')}>
                      Add links to your website, blog, or social media profiles.
                    </FormDescription>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type='button'
              variant='outline'
              size='sm'
              className='mt-2'
              onClick={() => append({ value: '' })}
            >
              Add URL
            </Button>
          </div>
          <Button type='submit'>Update profile</Button>
        </form>
      </Form>
    </div>
  );
}
