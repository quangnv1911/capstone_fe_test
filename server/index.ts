import express, { Request, Response , Express, NextFunction } from 'express'
import { renderPage } from 'vike/server'
import { root } from './root.js'
import cookieParser from 'cookie-parser'
// import { rollupVersion } from 'vite';

const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000

void startServer()

export interface IGetUserAuthInfoRequest extends Request {
  userName?: string
  role?: string
  token?: string
}


async function startServer() {
  const app = express()
  auth(app)
  await assets(app)
  vike(app)
  app.listen(port)
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${port}`)
}

function auth(app: Express) {
  app.use(cookieParser())
  app.use(function (req: IGetUserAuthInfoRequest, _res: Response, next: NextFunction) {
    const { username, role, token } = req.cookies
    req.userName = username || ''
    req.role = role || ''
    req.token = token || ''

    next()
  })

  app.use(express.json()) // Parse & make HTTP request body available at `req.body`

  app.post('/auth/login', async (req: Request, res: Response) => {
    const { userName, password }: { userName: string; password: string } = req.body
    const response = await fetch('http://localhost:8080/authenticate', {
      method: 'POST', // hoặc 'GET', 'PUT', 'DELETE', tùy thuộc vào loại yêu cầu bạn muốn thực hiện
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({
        userName,
        password,
      }), 
    })
    if (!response.ok) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }
    const user = await response.json()
    if (user) {
      res.cookie('username', user.userName, {
        maxAge: 24 * 60 * 60 * 1000, // One day
        httpOnly: true, // Only the server can read the cookie
        secure: true,
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
  app.post('/_auth/logout', (_req: Request, res: Response) => {
    res.clearCookie('username')
    res.end()
  })
}

async function assets(app: Express) {
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

function vike(app: Express) {
  app.get('*', async (req: Request, res: Response, next: NextFunction) => {
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
