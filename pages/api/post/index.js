// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if(req.method !== "GET"){
      res.status("400").json({"message": "Invalid request type!"})
      return
  }

  res.status(200).json({ name: 'John Doe' })
}