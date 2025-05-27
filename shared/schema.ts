import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  location: text("location").notNull(),
  year: integer("year").notNull(),
  category: text("category").notNull(), // residential, commercial, interior
  images: text("images").array().notNull().default({}),
  featured: boolean("featured").notNull().default(false),
  client: text("client"),
  size: text("size"),
  budget: text("budget"),
  duration: text("duration"),
  features: text("features").array().default({})
});

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  order: integer("order").notNull().default(0)
});

export const content = pgTable("content", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  value: text("value").notNull(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  projectType: text("project_type"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow()
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true
});

export const insertServiceSchema = createInsertSchema(services).omit({
  id: true
});

export const insertContentSchema = createInsertSchema(content).omit({
  id: true,
  updatedAt: true
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true
});

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;
export type Content = typeof content.$inferSelect;
export type InsertContent = z.infer<typeof insertContentSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
