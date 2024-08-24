import express from 'express'
import { renderPage } from 'vike/server'
import { root } from './root.js'
import cookieParser from 'cookie-parser'
import { rollupVersion } from 'vite'

const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000

startServer()

async function startServer() {
  const app = express()
  auth(app)
  await assets(app)
  vike(app)
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}

function auth(app) {
  app.use(cookieParser())
  app.use(function (req, _res, next) {
    const { username, role, token } = req.cookies
    req.userName = username || ''
    req.role = role || ''
    req.token = token || ''

    next()
  })

  app.use(express.json()) // Parse & make HTTP request body available at `req.body`

  app.post('/auth/login', async (req: any, res: any) => {
    const { userName, password } = req.body
    const response = await fetch('http://localhost:8080/authenticate', {
      method: 'POST', // hoặc 'GET', 'PUT', 'DELETE', tùy thuộc vào loại yêu cầu bạn muốn thực hiện
      headers: {
        'Content-Type': 'application/json',
      }, // Đặt loại nội dung mà bạn muốn gửi, ví dụ như JSON},
      body: JSON.stringify({
        userName: userName,
        password: password,
      }), // Gửi dữ liệu tới server. Chỉ sử dụng body với các phương thức như POST, PUT, DELETE
    })
    if (!response.ok) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }
    const user = await response.json()
    if (user) {
      res.cookie('username', user.userName, {
        maxAge: 24 * 60 * 60 * 1000, // One day
        httpOnly: true, // Only the server can read the cookie
        secure: true
      })
      res.cookie('role', user.role, {
        maxAge: 24 * 60 * 60 * 1000, // One day
        httpOnly: true, // Only the server can read the cookie
      })

      res.cookie('token', user.token, {
        maxAge: 24 * 60 * 60 * 1000, // One day
        httpOnly: true, // Only the server can read the cookie
      })
    }
    const success = !!user
    res.end(JSON.stringify({ success }))
  })
  app.post('/_auth/logout', (_req, res) => {
    res.clearCookie('username')
    res.end()
  })
}

async function assets(app) {
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`))
  } else {
    const vite = await import('vite')
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares
    app.use(viteDevMiddleware)
  }
}

function vike(app) {
  app.get('*', async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl,
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    if (!httpResponse) {
      return next()
    } else {
      const { statusCode, headers, earlyHints } = httpResponse
      if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) })
      headers.forEach(([name, value]) => res.setHeader(name, value))
      res.status(statusCode)
      httpResponse.pipe(res)
    }
  })
}
