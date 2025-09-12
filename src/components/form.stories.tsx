import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { action } from "storybook/actions";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../src/form";
import { Button } from "../../src";
import { Input } from "../../src";
import { Textarea } from "../../src";
import { Checkbox } from "../../src";
import { Separator } from "../../src";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../src";
import { RadioGroup, RadioGroupItem } from "../../src";
import { Switch } from "../../src";
import { MetaContainer } from "../../src";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A comprehensive form system built on React Hook Form with Zod validation for creating accessible, type-safe forms with excellent developer experience.

## Features
- Type-safe form validation with Zod schema integration
- Automatic error handling and display
- Built-in accessibility with proper ARIA attributes
- Consistent styling across all form elements
- Real-time validation feedback
- Composable form field components
- Integration with all form input components
- Screen reader compatible with error announcements

## Composition
Forms are composed of multiple components:
- **Form**: Root form provider with React Hook Form context
- **FormField**: Individual field wrapper with validation
- **FormItem**: Container for form field elements
- **FormLabel**: Accessible label component
- **FormControl**: Input wrapper for proper form integration
- **FormDescription**: Help text for form fields
- **FormMessage**: Error and validation message display

## Usage
Use forms for:
- User registration and authentication
- Settings and configuration panels
- Data entry and editing interfaces
- Contact forms and feedback collection
- Any structured data input requirements

## Validation
Forms support comprehensive validation with:
- Required field validation
- Type validation (email, URL, etc.)
- Custom validation rules
- Cross-field validation
- Async validation support

## Best Practices
- Always provide clear labels and descriptions
- Use appropriate input types for better UX
- Provide immediate validation feedback
- Group related fields logically
- Include clear success and error states

## Accessibility
Forms provide full accessibility with proper labeling, error announcements, and keyboard navigation support.`,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Form>;

// Basic form schema
const basicFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.email({
    message: "Please enter a valid email address.",
  }),
});

// Career form schema
const careerFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address"),
  bio: z
    .string()
    .min(10, "Bio must be at least 10 characters")
    .max(500, "Bio must not exceed 500 characters"),
  role: z.string().min(1, "Please select a role"),
  experience: z.string().min(1, "Please select your experience level"),
  newsletter: z.boolean(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

function BasicFormExample() {
  const form = useForm<z.infer<typeof basicFormSchema>>({
    resolver: zodResolver(basicFormSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof basicFormSchema>) {
    action("form-submit")(values);
    toast("Form submitted successfully!", {
      description: "Check the Actions tab to see the form data.",
    });
  }

  return (
    <div className="w-sm section-container">
      <MetaContainer title="User Profile">
        Enter your profile information below.
      </MetaContainer>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  We&apos;ll never share your email with anyone else.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Update Profile</Button>
        </form>
      </Form>
    </div>
  );
}

function CareerFormExample() {
  const form = useForm<z.infer<typeof careerFormSchema>>({
    resolver: zodResolver(careerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      bio: "",
      role: "",
      experience: "",
      newsletter: false,
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof careerFormSchema>) {
    action("complex-form-submit")(values);
    toast("Registration completed!", {
      description:
        "Welcome to our platform. Check the Actions tab for submitted data.",
    });
  }

  return (
    <div className="w-sm section-container">
      <MetaContainer title="Join Our Team">
        Fill out this form to apply for a position.
      </MetaContainer>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="list-container grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about yourself..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Brief description of your background and experience.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="analyst">Data Analyst</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience Level</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="junior" id="junior" />
                      <FormLabel htmlFor="junior" className="font-normal">
                        Junior (0-2 years)
                      </FormLabel>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mid" id="mid" />
                      <FormLabel htmlFor="mid" className="font-normal">
                        Mid-level (2-5 years)
                      </FormLabel>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="senior" id="senior" />
                      <FormLabel htmlFor="senior" className="font-normal">
                        Senior (5+ years)
                      </FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newsletter"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="title-container leading-none">
                  <FormLabel>Newsletter Subscription</FormLabel>
                  <FormDescription>
                    Receive updates about new opportunities.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          <Separator />

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="title-container leading-none">
                  <FormLabel>Accept Terms and Conditions</FormLabel>
                  <FormDescription>
                    You agree to our terms of service and privacy policy.
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button type="submit">Submit Application</Button>
        </form>
      </Form>
    </div>
  );
}

export const Default: Story = {
  render: () => <BasicFormExample />,
};

export const ExampleCareers: Story = {
  render: () => <CareerFormExample />,
};
