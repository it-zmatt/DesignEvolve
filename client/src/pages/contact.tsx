import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useTranslation } from "@/lib/TranslationContext";
import { useDirection } from "@/hooks/useDirection";
import { insertContactSchema } from "@shared/schema";
import type { InsertContact } from "@shared/schema";
import { z } from "zod";

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { t } = useTranslation();
  const { dir } = useDirection();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);



  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t("contact.success"),
        description: t("contact.success.text"),
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: t("contact.error"),
        description: t("contact.error.text"),
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };



  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="heading-primary mb-6">
            {t("page.contact.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("page.contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  {t("contact.form.title")}
                </h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                                                <FormLabel>{t("contact.form.name")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("form.name.placeholder")}
                              className="form-input"
                              {...field}
                            />
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
                                                <FormLabel>{t("contact.form.email")}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t("form.email.placeholder")}
                              className="form-input"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                                                <FormLabel>{t("contact.form.project")}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                        <FormControl>
                          <SelectTrigger className="form-input">
                            <SelectValue placeholder={t("form.project.placeholder")} />
                              </SelectTrigger>
                            </FormControl>
                                                    <SelectContent>
                          <SelectItem value="residential">{t("form.project.residential")}</SelectItem>
                          <SelectItem value="commercial">{t("form.project.commercial")}</SelectItem>
                          <SelectItem value="interior">{t("form.project.interior")}</SelectItem>
                          <SelectItem value="consultation">{t("form.project.consultation")}</SelectItem>
                        </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.message")}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("form.message.placeholder")}
                              className="form-textarea min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="submit"
                      className="w-full btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-6">
                    {t("contact.info")}
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{t("contact.address")}</h4>
                        <p className="text-muted-foreground">
                          {t("contact.address.street")}<br />
                          {t("contact.address.city")}<br />
                          {t("contact.address.country")}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{t("contact.phone")}</h4>
                        <p className="text-muted-foreground">
                          {t("contact.phone.number")}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{t("contact.form.email")}</h4>
                        <p className="text-muted-foreground">
                          {t("contact.email.address")}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{t("contact.hours")}</h4>
                        <p className="text-muted-foreground">
                          {t("contact.hours.weekdays")}<br />
                          {t("contact.hours.saturday")}<br />
                          {t("contact.hours.sunday")}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Google Maps Placeholder */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-6">{t("contact.find.us")}</h3>
                  <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-12 h-12 mx-auto mb-4" />
                      <p className="font-medium">{t("contact.map.location")}</p>
                      <p className="text-sm">{t("contact.map.text")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
