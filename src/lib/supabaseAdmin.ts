import "server-only";

import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/lib/supabaseTypes";

const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.SUPABASE_SERVICE_ROLE ??
  process.env.SUPABASE_SERVICE_KEY;

let cachedClient: ReturnType<typeof createClient<Database>> | null = null;

export function getSupabaseAdmin() {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error("Missing Supabase server env. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
    return null;
  }

  if (!cachedClient) {
    cachedClient = createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }

  return cachedClient;
}
