import {TPost} from '@/components/Post/data'

export const posts: TPost[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        'https://raw.githubusercontent.com/jhonbergmann/feed/main/src/assets/users/jane-cooper.png?token=GHSAT0AAAAAACTG2WD4JWXKDZ45B7KQP3XQZT7KFAQ',
      name: 'Jane Cooper',
      role: 'Dev Front-End',
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz em um evento. O nome do projeto é DoctorCare 🚀',
      },
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        'https://raw.githubusercontent.com/jhonbergmann/feed/main/src/assets/users/devon-lane.png?token=GHSAT0AAAAAACTG2WD4USUXHI27WCHUTCHUZT7KDYA',
      name: 'Devon Lane',
      role: 'Dev Front-End',
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
