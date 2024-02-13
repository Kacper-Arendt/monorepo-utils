"use client";
import { useState } from "react";
import { Input, useForm, Form } from "@karendt/forms";
import { z } from "zod";

const userReposListSchema = z.object({
  search: z.string().min(1),
});

export default function Page() {
  const [search, setSearch] = useState("");

  const form = useForm({
    schema: userReposListSchema,
    defaultValues: { search },
  });

  return (
    <Form
      form={form}
      onSubmit={(item) => {
        setSearch(item.search);
        console.log(item);
      }}
    >
      <Input type="text" name="search" control={form.control} label="Name" />
      <button type="submit">Submit</button>
    </Form>
  );
}
