import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://us1-working-sawfish-42546.upstash.io',
  token: process.env.REDIS_KEY!,
})
