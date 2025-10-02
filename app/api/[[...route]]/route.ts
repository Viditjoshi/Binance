import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.Js',
  })
})
  .get(
    "hello/:test",
    (c) => {
      return c.json({
        message: "Hellow Wrold",
      })
    })
  .post(
    '/create/:postId',
    zValidator("json", z.object({
      postId: z.number(),
    })),
    (c) => {
      const { postId } = c.req.valid("json"); 
      return c.json({
        message: "this is post req",
        postId,
     })
    })

export const GET = handle(app);
export const POST = handle(app);