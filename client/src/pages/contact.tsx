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
import { Skeleton } from "@/components/ui/skeleton";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useTranslation } from "@/lib/TranslationContext";
import { insertContactSchema } from "@shared/schema";
import type { Content, InsertContact } from "@shared/schema";
import { z } from "zod";

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: content, isLoading: contentLoading } = useQuery<Content[]>({
    queryKey: ["/api/content"],
  });

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

  const getContentValue = (key: string, fallback: string = "") => {
    const item = content?.find(c => c.key === key);
    return item?.value || fallback;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="heading-primary mb-6">
            Get In <span className="font-bold">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next architectural project? We'd love to hear about your vision and discuss how we can bring it to life.
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
                  Send us a message
                </h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your full name"
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
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
                          <FormLabel>Project Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="form-input">
                                <SelectValue placeholder="Select a project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="residential">Residential Design</SelectItem>
                              <SelectItem value="commercial">Commercial Design</SelectItem>
                              <SelectItem value="interior">Interior Design</SelectItem>
                              <SelectItem value="consultation">Consultation</SelectItem>
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project..."
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
                      {isSubmitting ? "Sending..." : "Send Message"}
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
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Address</h4>
                        {contentLoading ? (
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-4 w-28" />
                          </div>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">
                            {getContentValue("contact.address", "123 Architecture Plaza\nSan Francisco, CA 94102\nUnited States")}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Phone</h4>
                        {contentLoading ? (
                          <Skeleton className="h-4 w-32" />
                        ) : (
                          <p className="text-muted-foreground">
                            {getContentValue("contact.phone", "(415) 555-0123")}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Email</h4>
                        {contentLoading ? (
                          <Skeleton className="h-4 w-48" />
                        ) : (
                          <p className="text-muted-foreground">
                            {getContentValue("contact.email", "info@axisarchitecture.com")}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Office Hours</h4>
                        {contentLoading ? (
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-40" />
                            <Skeleton className="h-4 w-36" />
                            <Skeleton className="h-4 w-24" />
                          </div>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">
                            {getContentValue("contact.hours", "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed")}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Google Maps Placeholder */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Find Us</h3>
                  <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-12 h-12 mx-auto mb-4" />
                      <p className="font-medium">Interactive Google Maps</p>
                      <p className="text-sm">Location: San Francisco, CA</p>
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
