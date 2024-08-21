export { Page }

function Page() {
  function reloadPage() {
    window.location.reload()
  }
  return (
    <>
      <h1>About</h1>
      <p>Example of using Vike.</p>
      <p>Đây là ở client</p>
      <button onClick={() => {}} onKeyDown={reloadPage}>
        Click
      </button>
    </>
  )
}
