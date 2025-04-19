// components/LoginForm.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useLogin from "@/hooks/query-hooks/useLogin";
import { toast } from "sonner";

const loginSchema = z.object({
  username: z.string(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { mutate, isPending } = useLogin();
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchema) => {
    console.log("Form Data:", data);
    // Handle form submission (e.g., API call)
    mutate(data, {
      onError() {
        toast.error("Incorrect username/email or password");
      },
      onSuccess: () => {
        toast.success("you are logged in successfully");
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  type="username"
                  placeholder="Enter your username"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" loading={isPending}>
          Login
        </Button>
      </form>
    </Form>
  );
}
