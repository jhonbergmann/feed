import {TPost} from '@/components/Post/data'

export const posts: TPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/alijalloul',
      name: 'Ali Jalloul',
      role: 'alijalloul',
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz em um evento. O nome do projeto é DoctorCare 🚀',
      },
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/Nafanya-dev',
      name: 'Viacheslav Gaevskii',
      role: 'Backend Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {
        type: 'paragraph',
        content:
          'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻',
      },
      {type: 'link', content: 'devonlane.design'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
]
