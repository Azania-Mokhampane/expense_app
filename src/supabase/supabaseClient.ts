import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
const supabaseAnoyKey = process.env.SUPABASE_ENON_KEY


export const supabase = createClient(supabaseUrl, supabaseAnoyKey)