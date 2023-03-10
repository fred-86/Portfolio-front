import { faker } from '@faker-js/faker/locale/fr'
import { collection, addDoc } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { Database } from '../__services__/DataBase'

const fakeDate = () => {
    const randomCreatedAt = faker.datatype.datetime(new Date())
    const randomUpdatedAt = faker.datatype.datetime(new Date())

    return [randomCreatedAt, randomUpdatedAt]
}

export function getFakeUsers() {
    let data = []

    for (let i = 0; i < 5; i++) {
        // const id = i + 1
        const randomFirstName = faker.name.firstName({ sex: 'female' | 'male' })
        const randomLastName = faker.name.lastName()
        const randomAvatar = faker.internet.avatar()
        const randomPassword = faker.internet.password(
            1,
            true,
            /[A-Z]/,
            'Hello '
        )
        const randomEmail = faker.internet.email()
        const [randomCreatedAt, randomUpdatedAt] = fakeDate()

        data.push({
            firstName: randomFirstName,
            lastName: randomLastName,
            email: randomEmail,
            password: randomPassword,
            avatar: randomAvatar,
            createdAT: randomCreatedAt.toLocaleDateString('fr'),
            updatedAt: randomUpdatedAt.toLocaleDateString('fr'),
        })
    }
    // console.log('fakerUsers', data)
    return data
}

export function getFakePerson() {
    let data = []

    for (let i = 0; i < 5; i++) {
        // const id = i + 1
        const randomFirstName = faker.name.firstName({ sex: 'female' | 'male' })
        const randomLastName = faker.name.lastName()
        const randomAvatar = faker.internet.avatar()
        const randomEmail = faker.internet.email()
        const randomPhone = faker.phone.number('+33 0# ### ## ##')
        const randomStatus = faker.datatype.boolean()
        const randomLink = faker.internet.url()
        const [randomCreatedAt, randomUpdatedAt] = fakeDate()

        data.push({
            firstName: randomFirstName,
            lastName: randomLastName,
            email: randomEmail,
            phone: randomPhone,
            avatar: randomAvatar,
            status: randomStatus,
            links: [
                { name: 'git', link: randomLink },
                { name: 'tweeter', link: randomLink },
            ],
            createdAT: randomCreatedAt.toLocaleDateString('fr'),
            updatedAt: randomUpdatedAt.toLocaleDateString('fr'),
        })
    }
    console.log('fakerPersons', data)
    return data
}

export function getFakeCareer() {
    let data = []

    for (let i = 0; i < 5; i++) {
        // const id = i + 1
        const randomName = faker.name.jobTitle()
        const randomType = faker.name.jobType()

        const randomStartDate = faker.date.between(
            '2010-01-24T00:00:00.000Z',
            '2022-01-24T00:00:00.000Z'
        )
        const randomEndDate = faker.date.betweens(
            randomStartDate,
            '2022-01-01T00:00:00.000Z'
        )
        const randomDescription = faker.lorem.paragraph()
        const [randomCreatedAt, randomUpdatedAt] = fakeDate()

        data.push({
            name: randomName,
            type: randomType,
            startDate: randomStartDate,
            endDate: randomEndDate,
            description: randomDescription,
            createdAT: randomCreatedAt.toLocaleDateString('fr'),
            updatedAt: randomUpdatedAt.toLocaleDateString('fr'),
        })
    }
    console.log('fakerPersons', data)
    return data
}

export function getFakeDegree() {
    let data = []

    for (let i = 0; i < 5; i++) {
        // const id = i + 1
        const randomName = faker.name.jobTitle()
        const randomSchool = faker.company.name()
        const randomStartDate = faker.date.between(
            '2010-01-24T00:00:00.000Z',
            '2022-01-24T00:00:00.000Z'
        )
        const randomEndDate = faker.date.betweens(
            randomStartDate,
            '2022-01-01T00:00:00.000Z'
        )
        const randomDescription = faker.lorem.paragraph()
        const [randomCreatedAt, randomUpdatedAt] = fakeDate()

        data.push({
            name: randomName,
            school: randomSchool,
            startDate: randomStartDate,
            endDate: randomEndDate,
            description: randomDescription,
            createdAT: randomCreatedAt.toLocaleDateString('fr'),
            updatedAt: randomUpdatedAt.toLocaleDateString('fr'),
        })
    }
    console.log('fakerPersons', data)
    return data
}

export function getFakeProject() {
    let data = []

    for (let i = 0; i < 5; i++) {
        // const id = i + 1
        const randomName = faker.company.name()
        const randomDescription = faker.lorem.paragraph()
        const ranomPicture = faker.image.business(500, 500, true)
        const randomStatus = faker.datatype.boolean()
        const randomLink = faker.internet.url()
        const [randomCreatedAt, randomUpdatedAt] = fakeDate()

        data.push({
            name: randomName,
            pictures: ranomPicture,
            description: randomDescription,
            status: randomStatus,
            links: randomLink,
            createdAT: randomCreatedAt.toLocaleDateString('fr'),
            updatedAt: randomUpdatedAt.toLocaleDateString('fr'),
        })
    }
    console.log('fakerProject', data)
    return data
}

const skillsTab = ['Skill', 'Framework/System']
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
export function getFakeSkills() {
    let data = []

    for (let i = 0; i < 5; i++) {
        // const id = i + 1
        const randomName = faker.hacker.noun()
        const randomPicture = faker.image.business(500, 500, true)
        const randomStatus = faker.datatype.boolean()
        const randomCategory = skillsTab[random(0, skillsTab.length - 1)]
        const [randomCreatedAt, randomUpdatedAt] = fakeDate()

        data.push({
            name: randomName,
            pictures: randomPicture,
            status: randomStatus,
            category: randomCategory,
            createdAT: randomCreatedAt.toLocaleDateString('fr'),
            updatedAt: randomUpdatedAt.toLocaleDateString('fr'),
        })
    }
    console.log('fakerSkills', data)
    return data
}
const db = getFirestore(Database)
export async function createSkills(db) {
    const skillsCollection = collection(db, 'Skills')
    const data = getFakeSkills()
    let skillsRef = {}
    for (let i = 0; i < data.length; i++) {
        skillsRef = await addDoc(skillsCollection, data[i])
    }

    return skillsRef
}
