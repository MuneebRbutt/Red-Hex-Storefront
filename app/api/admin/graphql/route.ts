export async function POST(request: Request) {
  const body = await request.json()
  
  // Get token from cookie
  const cookieHeader = request.headers.get('cookie') || ''
  const token = cookieHeader
    .split('; ')
    .find(c => c.startsWith('vendure-auth-token='))
    ?.split('=')[1] || ''
  
  console.log('Proxy - token found:', !!token)
  console.log('Proxy - query:', body.query?.substring(0, 100))
  
  const response = await fetch(
    'https://red-hex-backend.onrender.com/admin-api',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'vendure-auth-token': token,
        'cookie': `vendure-auth-token=${token}`
      },
      body: JSON.stringify(body)
    }
  )
  
  const data = await response.json()
  console.log('Proxy - response errors:', data.errors)
  
  return Response.json(data)
}
