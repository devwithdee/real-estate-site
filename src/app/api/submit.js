export default async function handler(req, res) {
  const data = req.body
  const id = await addPost()
  res.redirect(307, `/`)
}