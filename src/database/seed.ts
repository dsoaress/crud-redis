import { date, internet, name } from '@faker-js/faker'

import { createIndex, createUser } from './redis'

async function main() {
  console.log(`Start seeding...`)
  for (let i = 1; i <= 5; i++) {
    const firstName = name.firstName()
    const lastName = name.lastName()

    const data = {
      name: `${firstName} ${lastName}`,
      email: internet.email(firstName, lastName).toLowerCase(),
      createdAt: date.recent().toISOString()
    }

    const user = await createUser(data)
    console.log(`Seeding user ${user.id}: ${user.name} - ${user.email}`)
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    try {
      await createIndex()
      console.log('Index created')
    } catch {
      console.log('Index already exists')
    }
    console.log('Finished seeding')
    process.exit(0)
  })
