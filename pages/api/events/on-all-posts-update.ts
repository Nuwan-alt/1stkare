import type { NextApiRequest, NextApiResponse } from 'next'

// POST /api/events/on-posts-update
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    !/^hasura\-graphql-engine\//.test(req.headers['user-agent'] ?? '') ||
    req.headers.secret !== process.env['EVENT_WEBHOOK_SECRET'] ||
    req.body.trigger.name !== 'on_all_posts_update' ||
    req.body.table.name !== 'all_posts' ||
    (req.body.event.op !== 'INSERT' &&
      req.body.event.op !== 'UPDATE' &&
      req.body.event.op !== 'DELETE')
  ) {
    res.status(401).send('Unauthorized')
    return
  }

  const user_alt_id = req.body.event.data.new.user_alt_id
  const alt_city_id = req.body.event.data.new.alt_city_id
  const alt_id = req.body.event.data.new.alt_id
  const title = req.body.event.data.new.title
    .toLowerCase()
    .trim()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')

  const city_name = req.body.event.data.new.city_name.toLowerCase()
  const state_code = req.body.event.data.new.state_code.toLowerCase()
  const longitude = encodeURIComponent(req.body.event.data.new.longitude)
  const latitude = req.body.event.data.new.latitude
  const category_name = req.body.event.data.new.category_name

  if (
    !user_alt_id ||
    !alt_id ||
    !alt_city_id ||
    !city_name ||
    !state_code ||
    !longitude ||
    !latitude ||
    !title
  ) {
    res.status(400).send('Bad Request')
    return
  }

  try {
    await res.revalidate(`/seller/${user_alt_id}`)

    await res.revalidate(`/post/${title}/${alt_id}`)

    await res.revalidate(
      `/posts/${city_name}-${state_code}/${alt_city_id}/${latitude}/${longitude}/${category_name}/1/`
    )

    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}
