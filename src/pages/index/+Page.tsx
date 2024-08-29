import { Counter } from './Counter'

export { Page }

function Page() {
  return (
    <>
      <h1 className='text-slate-100'>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
