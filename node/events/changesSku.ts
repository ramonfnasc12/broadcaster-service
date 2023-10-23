export async function changesSku(ctx: EventCtx) {
  console.log('RECEIVED EVENT', ctx.body)

  await ctx.clients.notification.postNotification(
    'https://ad49e2d24d.to.intercept.rest',
    ctx.body
  )

  return true
}
