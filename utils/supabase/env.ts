import { z } from "zod/v4-mini";

export const SupabaseEnv = z.object({
	supabaseUrl: z.string(),
	supabaseAnonKey: z.string(),
});
