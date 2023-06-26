INSERT INTO "public"."Role"("id", "name") VALUES (1, 'User') ON CONFLICT DO NOTHING;
INSERT INTO "public"."Role"("id", "name") VALUES (2, 'Employee') ON CONFLICT DO NOTHING;
INSERT INTO "public"."Role"("id", "name") VALUES (3, 'Admin') ON CONFLICT DO NOTHING;