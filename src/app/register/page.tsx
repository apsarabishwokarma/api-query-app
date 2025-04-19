// components/RegisterForm.tsx
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
import useRegister from "@/hooks/query-hooks/useRegister";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const RegisterSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
  name: z.string().min(1, { message: "Name is required." }),
});
type RegisterFormData = z.infer<typeof RegisterSchema>;

export default function RegisterForm() {
  const { mutate, isPending } = useRegister();
  const router = useRouter();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Form Data:", data);
    mutate(data, {
      onError(error) {
        toast.error(error.message);
      },
      onSuccess() {
        toast.success("Account it created. Please login.");
        router.push("/login");
      },
    });
  };

  return (
    <div className="container pt-10 px-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
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

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">{isPending ? "Loading" : "Register"}</Button>
        </form>
      </Form>
    </div>
  );
}
