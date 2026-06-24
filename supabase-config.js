/* ============================================================
   S3XY Detailers — Backend configuration
   ------------------------------------------------------------
   This is the ONLY file you edit to connect the real backend.

   Until you fill these in, the login / signup / dashboard pages
   run in DEMO MODE (accounts are saved only in this browser so
   you can preview everything). The moment you paste your real
   Supabase values below, every page switches to the real cloud
   backend automatically — no other changes needed.

   How to get these two values (free, ~3 minutes):
     1. Create a free project at https://supabase.com
     2. Open  Project Settings  ->  API
     3. Copy the "Project URL"      into SUPABASE_URL below
     4. Copy the "anon public" key  into SUPABASE_ANON_KEY below
     5. Run the SQL in  supabase-schema.sql  (Supabase -> SQL Editor)

   See  MEMBER-BACKEND-SETUP.md  for the full step-by-step guide.
   ============================================================ */

window.S3XY_CONFIG = {
  // Paste your Project URL here (looks like https://abcdxyz.supabase.co)
  SUPABASE_URL: "YOUR_SUPABASE_URL",

  // Paste your anon public key here (a long token starting with "eyJ...")
  SUPABASE_ANON_KEY: "YOUR_SUPABASE_ANON_KEY",

  // Business contact shown to members for billing/activation help
  BUSINESS_PHONE: "321-890-4414",
  BUSINESS_EMAIL: "Info@S3xydetailers.com"
};
