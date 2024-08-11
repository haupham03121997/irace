import { z } from 'zod';


 const configSchema = z.object({
  NEXT_PUBLIC_PUBLIC_URL: z.string(),
  NEXT_PUBLIC_API_END_POINT: z.string(),
  NEXT_PUBLIC_API_VERSION: z.string(),
});

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_PUBLIC_URL: process.env.NEXT_PUBLIC_PUBLIC_URL,
  NEXT_PUBLIC_API_END_POINT: process.env.NEXT_PUBLIC_API_END_POINT,
  NEXT_PUBLIC_API_VERSION: process.env.NEXT_PUBLIC_API_VERSION,
});

if (!configProject.success) {
  console.error(configProject.error.errors);
  throw new Error("Config validation error");
}

export const envConfig = configProject.data;