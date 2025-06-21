import { createBrowserClient } from "@supabase/ssr";
import { SupabaseEnv } from "./env";

export function createClient() {
	const env = SupabaseEnv.parse({
		supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
		supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
	});
	return createBrowserClient(env.supabaseUrl, env.supabaseAnonKey);
}
