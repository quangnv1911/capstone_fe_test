import z from 'zod'

export const Test = z
  .object({
    id: z.number(),
    name: z.string(),
    title: z.string(),
  })
  .strict()

export type TestType = z.TypeOf<typeof Test>

export const UpdateMeBody = z.object({
  name: z.string().trim().min(2).max(256),
})

export type UpdateMeBodyType = z.TypeOf<typeof UpdateMeBody>
