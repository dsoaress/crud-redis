import { useFetchUsers } from '../hooks/useFetchUsers'

export default function Home() {
  const { users, loading, error } = useFetchUsers()

  if (error) return <div>{error}</div>

  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {loading ? (
          <p>Loading</p>
        ) : (
          users?.map(user => (
            <li key={user.entityId}>
              {user.name} - {user.email}
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
