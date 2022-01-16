import { Client, Entity, Repository, Schema } from 'redis-om'

const client = new Client()

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL)
  }
}

class User extends Entity {
  name!: string
  email!: string
  createdAt!: string
}

let schema = new Schema(
  User,
  {
    name: { type: 'string', textSearch: true },
    email: { type: 'string', textSearch: true },
    createdAt: { type: 'string' }
  },
  { dataStructure: 'JSON' }
)

export async function createUser(data: { name: string; email: string; createdAt: string }) {
  await connect()
  const repository = new Repository(schema, client)

  if (!data.createdAt) data.createdAt = new Date().toISOString()

  const user = repository.createEntity(data)
  const id = await repository.save(user)
  return Object.assign(data, { id })
}

export async function createIndex() {
  await connect()
  const repository = new Repository(schema, client)
  await repository.createIndex()
}

export async function getUsers() {
  await connect()
  const repository = new Repository(schema, client)
  const users = await repository.search().return.all()
  return users.sort((a, b) => a.createdAt.localeCompare(b.createdAt))
}

export async function searchUsers(q: string) {
  await connect()
  const repository = new Repository(schema, client)
  return await repository.search().where('name').matches(q).or('email').matches(q).return.all()
}
