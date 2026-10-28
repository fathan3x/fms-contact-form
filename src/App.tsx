import { cn } from "cn";
import "@fontsource-variable/karla";
import { useForm } from "@tanstack/react-form";
import { Checkbox, Field, Fieldset, Radio, RadioGroup } from "@base-ui/react";
import z from "zod";
import { Check, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function App() {
  const style = {
    "bg-green-200": "bg-[hsl(148,38%,91%)]",
    "bg-green-600": "bg-[hsl(169,82%,27%)]",
    "text-grey-900": "text-[hsl(187,24%,22%)]",
    "text-green-600": "text-[hsl(169,82%,27%)]",
  };

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const formSchema = z.object({
    firstName: z.string().min(1, "The field is required!"),
    lastName: z.string().min(1, "This field is required!"),
    email: z.email({ error: "Please enter a valid email address!" }),
    queryType: z.enum(["general-enquiry", "support-request"], {
      error: "Please select a query type!",
    }),
    message: z.string().min(1, "This field is required!"),
    consent: z.literal(true, {
      error: "To submit this form, please consent to being contacted!",
    }),
  });

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: false,
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: () => {
      setShowSuccessAlert((prev) => !prev);
      setTimeout(() => setShowSuccessAlert((prev) => !prev), 2000);
      // toast.add({
      //   title: "Yo mama",
      //   description: "Deez Nuts",
      // });
    },
  });

  return (
    <main
      className={cn(
        style["bg-green-200"],
        style["text-grey-900"],
        "w-screen h-screen flex items-center font-['Karla_Variable'] p-6 relative",
      )}
    >
      <section className="p-8 bg-white rounded-lg space-y-6 w-3xl mx-auto">
        <h1 className="text-2xl" style={{ fontWeight: "700" }}>
          Contact Us
        </h1>
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-6"
        >
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <form.Field
              name="firstName"
              children={(field) => {
                const isError = field.state.meta.errors[0];

                return (
                  <Field.Root
                    name={field.name}
                    invalid={!field.state.meta.isValid}
                    dirty={field.state.meta.isDirty}
                    touched={field.state.meta.isTouched}
                    className="w-full lg:flex-1 shrink-0 flex flex-col gap-2"
                  >
                    <Field.Label>
                      First Name{" "}
                      <span
                        className={cn(style["text-green-600"])}
                        style={{ fontWeight: "700" }}
                      >
                        *
                      </span>
                    </Field.Label>
                    <Field.Control
                      value={field.state.value}
                      onValueChange={field.handleChange}
                      onBlur={field.handleBlur}
                      placeholder="John"
                      className={cn(
                        isError ? "border-red-500" : "border-black/40",
                        "border rounded px-4 py-2 outline-[hsl(169,82%,27%)] hover:border-[hsl(169,82%,27%)]",
                      )}
                    />
                    <Field.Error match={!field.state.meta.isValid}>
                      <p className="text-red-500">{isError?.message}</p>
                    </Field.Error>
                  </Field.Root>
                );
              }}
            />
            <form.Field
              name="lastName"
              children={(field) => {
                const isError = field.state.meta.errors[0];

                return (
                  <Field.Root
                    name={field.name}
                    invalid={!field.state.meta.isValid}
                    dirty={field.state.meta.isDirty}
                    touched={field.state.meta.isTouched}
                    className="w-full lg:flex-1 shrink-0 flex flex-col gap-2"
                  >
                    <Field.Label>
                      Last Name{" "}
                      <span
                        className={cn(style["text-green-600"])}
                        style={{ fontWeight: "700" }}
                      >
                        *
                      </span>
                    </Field.Label>
                    <Field.Control
                      value={field.state.value}
                      onValueChange={field.handleChange}
                      onBlur={field.handleBlur}
                      placeholder="Frontend"
                      className={cn(
                        isError ? "border-red-500" : "border-black/40",
                        "border rounded px-4 py-2 outline-[hsl(169,82%,27%)] hover:border-[hsl(169,82%,27%)]",
                      )}
                    />
                    <Field.Error match={!field.state.meta.isValid}>
                      <p className="text-red-500">{isError?.message}</p>
                    </Field.Error>
                  </Field.Root>
                );
              }}
            />
          </div>
          <form.Field
            name="email"
            children={(field) => {
              const isError = field.state.meta.errors[0];

              return (
                <Field.Root
                  name={field.name}
                  invalid={!field.state.meta.isValid}
                  dirty={field.state.meta.isDirty}
                  touched={field.state.meta.isTouched}
                  className="flex flex-col gap-2"
                >
                  <Field.Label>
                    Email Address{" "}
                    <span
                      className={cn(style["text-green-600"])}
                      style={{ fontWeight: "700" }}
                    >
                      *
                    </span>
                  </Field.Label>
                  <Field.Control
                    value={field.state.value}
                    onValueChange={field.handleChange}
                    onBlur={field.handleBlur}
                    placeholder="john@frontend.com"
                    className={cn(
                      isError ? "border-red-500" : "border-black/40",
                      "border rounded px-4 py-2 outline-[hsl(169,82%,27%)] hover:border-[hsl(169,82%,27%)]",
                    )}
                  />
                  <Field.Error match={!field.state.meta.isValid}>
                    <p className="text-red-500">{isError?.message}</p>
                  </Field.Error>
                </Field.Root>
              );
            }}
          />
          <form.Field
            name="queryType"
            children={(field) => {
              const isError = field.state.meta.errors[0];

              return (
                <Field.Root
                  name={field.name}
                  invalid={!field.state.meta.isValid}
                  dirty={field.state.meta.isDirty}
                  touched={field.state.meta.isTouched}
                  className="flex-1 shrink-0 flex flex-col gap-2"
                >
                  <Field.Label>
                    Query Type{" "}
                    <span
                      className={cn(style["text-green-600"])}
                      style={{ fontWeight: "700" }}
                    >
                      *
                    </span>
                  </Field.Label>
                  <Fieldset.Root
                    render={
                      <RadioGroup
                        value={field.state.value}
                        onValueChange={field.handleChange}
                        className="flex flex-col lg:flex-row items-center gap-4"
                      />
                    }
                  >
                    <Field.Item className="w-full lg:flex-1">
                      <Field.Label
                        className={cn(
                          field.state.value === "general-enquiry"
                            ? "border-[hsl(169,82%,27%)] bg-[hsl(169,82%,27%)]/10"
                            : "border-black/30",
                          "flex items-center gap-2 flex-1 border py-3 px-5 rounded-md cursor-pointer hover:border-[hsl(169,82%,27%)]",
                        )}
                      >
                        <Radio.Root
                          value="general-enquiry"
                          className="size-5 flex items-center justify-center rounded-full border border-black/40"
                        >
                          <Radio.Indicator className="size-3 rounded-full bg-[hsl(169,82%,27%)]" />
                        </Radio.Root>
                        General Enquiry
                      </Field.Label>
                    </Field.Item>
                    <Field.Item className="w-full lg:flex-1">
                      <Field.Label
                        className={cn(
                          field.state.value === "support-request"
                            ? "border-[hsl(169,82%,27%)] bg-[hsl(169,82%,27%)]/10"
                            : "border-black/30",
                          "flex items-center gap-2 flex-1 border py-3 px-5 rounded-md cursor-pointer hover:border-[hsl(169,82%,27%)]",
                        )}
                      >
                        <Radio.Root
                          value="support-request"
                          className="size-5 flex items-center justify-center rounded-full border border-black/40"
                        >
                          <Radio.Indicator className="size-3 rounded-full bg-[hsl(169,82%,27%)]" />
                        </Radio.Root>
                        Support Request
                      </Field.Label>
                    </Field.Item>
                  </Fieldset.Root>
                  <Field.Error match={!field.state.meta.isValid}>
                    <p className="text-red-500">{isError?.message}</p>
                  </Field.Error>
                </Field.Root>
              );
            }}
          />
          <form.Field
            name="message"
            children={(field) => {
              const isError = field.state.meta.errors[0];

              return (
                <Field.Root
                  name={field.name}
                  invalid={!field.state.meta.isValid}
                  dirty={field.state.meta.isDirty}
                  touched={field.state.meta.isTouched}
                  className="flex-1 shrink-0 flex flex-col gap-2"
                >
                  <Field.Label>
                    Message{" "}
                    <span
                      className={cn(style["text-green-600"])}
                      style={{ fontWeight: "700" }}
                    >
                      *
                    </span>
                  </Field.Label>
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={cn(
                      isError ? "border-red-500" : "border-black/40",
                      "field-sizing-content resize-none min-h-30 max-h-100 border rounded px-4 py-2 outline-[hsl(169,82%,27%)] hover:border-[hsl(169,82%,27%)]",
                    )}
                  />
                  <Field.Error match={!field.state.meta.isValid}>
                    <p className="text-red-500">{isError?.message}</p>
                  </Field.Error>
                </Field.Root>
              );
            }}
          />
          <form.Field
            name="consent"
            children={(field) => {
              const isError = field.state.meta.errors[0];

              return (
                <Field.Root
                  name={field.name}
                  invalid={!field.state.meta.isValid}
                  dirty={field.state.meta.isDirty}
                  touched={field.state.meta.isTouched}
                  className="flex flex-col gap-2"
                >
                  <Field.Item>
                    <Field.Label className="flex items-center gap-2 cursor-pointer group">
                      <Checkbox.Root
                        id={field.name}
                        name={field.name}
                        checked={field.state.value}
                        onBlur={field.handleBlur}
                        onCheckedChange={(checked) =>
                          field.handleChange(checked)
                        }
                        className={cn(
                          field.state.value ? style["bg-green-600"] : "",
                          "size-5 border border-black/40 flex items-center justify-center group-hover:border-[hsl(169,82%,27%)]",
                        )}
                      >
                        <Checkbox.Indicator>
                          <Check className="size-4 text-white" />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                      I consent to being contacted by the team
                    </Field.Label>
                  </Field.Item>
                  <Field.Error match={!field.state.meta.isValid}>
                    <p className="text-red-500">{isError?.message}</p>
                  </Field.Error>
                </Field.Root>
              );
            }}
          />
          <form.Subscribe
            children={() => (
              <button
                type="submit"
                className={cn(
                  style["bg-green-600"],
                  "w-full text-white py-4 rounded-md cursor-pointer hover:bg-[hsl(171,83%,14%)]",
                )}
                style={{ fontWeight: "700" }}
              >
                Submit
              </button>
            )}
          />
        </form>
      </section>
      <div
        className={cn(
          showSuccessAlert
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none",
          "absolute top-4 left-1/2 -translate-x-1/2 bg-[hsl(185,24%,22%)] text-white p-6 space-y-2 rounded-md shadow-lg transition-all duration-300 ease-out",
        )}
      >
        <div className="flex items-center gap-2">
          <CheckCircle className="size-6" />
          <p className="text-lg font-medium">Message Sent!</p>
        </div>
        <p className="text-sm text-white/70">
          Thanks for completing the form. We'll be in touch soon!
        </p>
      </div>
    </main>
  );
}
