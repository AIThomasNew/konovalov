import { USERS } from './users';

export const POSTS = [
  {
    imageUrl:
      'https://million-wallpapers.ru/wallpapers/6/6/342751562195980.jpg',
    user: USERS[0].user,
    likes: 100,
    caption: 'Текст текст текст',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'Lotar',
        comment: 'You Best!',
      },
      {
        user: 'XAOC',
        comment: 'Thank you!',
      },
    ],
  },
  {
    imageUrl:
      'https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg',
    user: USERS[1].user,
    likes: 100,
    caption: 'Текст текст текст',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'Magistr',
        comment: 'Wow it is perfect!!!!',
      },
      {
        user: 'gik',
        comment: 'the best!!',
      },
    ],
  },
  {
    imageUrl: 'https://namfun.ru/wp-content/uploads/2018/01/4-8.jpg',
    user: USERS[2].user,
    likes: 100,
    caption: 'Текст текст текст',
    profile_picture: USERS[2].image,
    comments: [
      {
        user: 'Magistr',
        comment: 'Wow it is perfect!!!!',
      },
      {
        user: 'gik',
        comment: 'the best!!',
      },
    ],
  },
];
