"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { useTranslation } from "react-i18next";

const FormSchema = z.object({
  nome: z.string().min(3, {
    message: "O nome deve ter pelo menos 3 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  whatsapp: z.string().min(10, {
    message: "Por favor, insira um número de WhatsApp válido.",
  }),
  tipoProjeto: z.string({
    required_error: "Por favor, selecione o tipo do projeto.",
  }),
  descricao: z.string().min(10, {
    message: "A descrição deve ter pelo menos 10 caracteres.",
  }),
});

export function ContactForm() {
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nome: "",
      email: "",
      whatsapp: "",
      tipoProjeto: "",
      descricao: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const templateParams = {
      nome: data.nome,
      email: data.email,
      whatsapp: data.whatsapp,
      tipoProjeto: data.tipoProjeto,
      descricao: data.descricao,
    };

    emailjs
      .send(
        "service_15v6xpo", // service id
        "template_iasyiun", // template id
        templateParams,
        "M_G7gMW9saPlFVxSE", // public key
      )
      .then((result) => {
        console.log("Email enviado com sucesso!", result.text);
        form.reset(); // Limpa o formulário após o envio
      })
      .catch((error) => {
        console.error("Erro ao enviar email:", error.text);
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto mt-10 w-full px-4 md:mt-20 md:px-6"
      >
        <div className="flex flex-col gap-6 md:flex-row md:gap-10">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{t("contact.form.name_label")}</FormLabel>
                <FormControl>
                  <Input placeholder={`${t("contact.form.name_placeholder")}`} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{t("contact.form.email_label")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={`${t("contact.form.email_placeholder")}`}
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-6 flex flex-col gap-6 md:mt-10 md:flex-row md:gap-10">
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{t("contact.form.whatsapp_label")}</FormLabel>
                <FormControl>
                  <Input placeholder={`${t("contact.form.whatsapp_placeholder")}`} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tipoProjeto"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{t("contact.form.project_type_label")}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="!h-12 px-6">
                      <SelectValue placeholder={`${t("contact.form.project_type_placeholder")}`} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="landing">
                      {t("contact.form.project_type_landing")}
                    </SelectItem>
                    <SelectItem value="saas">
                      {t("contact.form.project_type_saas")}
                    </SelectItem>
                    <SelectItem value="aplicativo">{t("contact.form.project_type_bot")}</SelectItem>
                    <SelectItem value="outro">{t("contact.form.project_type_other")}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="descricao"
          render={({ field }) => (
            <FormItem className="mt-6 md:mt-10">
              <FormLabel>{t("contact.form.message_label")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={`${t("contact.form.message_placeholder")}`}
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="mt-6 w-full rounded-md px-6 py-4 text-base md:mt-10 md:w-auto md:self-end md:px-8 md:py-6 md:text-lg"
        >
          {t("contact.form.submit")}
        </Button>
      </form>
    </Form>
  );
}
