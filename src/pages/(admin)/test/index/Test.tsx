import { withFallback } from 'vike-react-query'
import { useSuspenseQuery } from '@tanstack/react-query'
import { navigate } from 'vike/client/router'
import { TestType } from '#src/types/test.js'
import agent from '#utils/axios.js'
import { toast } from 'react-toastify'

async function getTestList(token?: string): Promise<TestType[]> {
  // Simulate slow network
  await new Promise((r) => setTimeout(r, 2000))

  const response = await agent.TestAgent.list(token).catch(() => {
    toast.error('error in test')
    return [] // Trả về một mảng rỗng nếu có lỗi
  })

  return response
}

const ListTest = withFallback(
  ({ token }: { token: string }) => {
    // Định nghĩa đúng kiểu cho prop token
    const result = useSuspenseQuery({
      queryKey: ['listTest'],
      queryFn: () => getTestList(token),
    })

    const testList = result.data
    const onNavigate = (id: string) => {
      void navigate(`/${id}`)
    }

    return (
      <>
        <h1>List Test</h1>
        <ol>
          {testList.map(({ id, name, title }) => (
            <li key={id}>
              <button onClick={() => onNavigate(id)}>{title}</button> ({name})
            </li>
          ))}
        </ol>
      </>
    )
  },
)

export { ListTest }