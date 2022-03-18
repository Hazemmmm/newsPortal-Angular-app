import { IArticle } from "../core/models/nyt.response.model";


export const mockNYTResponse: IArticle[] = [
  {
    section: 'magazine',
    subsection: '',
    title: 'Citizens of Kyiv',
    abstract:
      'Portraits of fortitude, desperation and resolve in a city under attack.',
    url: 'https://www.nytimes.com/interactive/2022/03/18/magazine/ukraine-war-kyiv.html',
    uri: 'nyt://interactive/185443c6-e1ad-5ba3-87b8-25bcdab0be2c',
    byline: 'Photographs by Alexander Chekmenev',
    item_type: 'Interactive',
    updated_date: '2022-03-18T15:29:36-04:00',
    created_date: '2022-03-18T04:59:35-04:00',
    published_date: '2022-03-18T04:59:35-04:00',
    material_type_facet: '',
    kicker: '',
    des_facet: [
      'War and Armed Conflicts',
      'Photography',
      'Russian Invasion of Ukraine (2022)',
      'Defense and Military Forces',
      'Volunteers and Community Service',
      'Evacuations and Evacuees',
    ],
    org_facet: [],
    per_facet: [],
    geo_facet: ['Ukraine', 'Kyiv (Ukraine)'],
    multimedia: [
      {
        url: 'https://static01.nyt.com/images/2022/03/27/magazine/27mag-Ukraine-16/27mag-Ukraine-16-superJumbo.jpg',
        format: 'Super Jumbo',
        height: 2048,
        width: 1536,
        type: 'image',
        subtype: 'photo',
        caption: '',
        copyright: 'Alexander Chekmenev for The New York Times',
      },
      {
        url: 'https://static01.nyt.com/images/2022/03/27/magazine/27mag-Ukraine-16/27mag-Ukraine-16-threeByTwoSmallAt2X-v3.jpg',
        format: 'threeByTwoSmallAt2X',
        height: 400,
        width: 600,
        type: 'image',
        subtype: 'photo',
        caption: '',
        copyright: 'Alexander Chekmenev for The New York Times',
      },
      {
        url: 'https://static01.nyt.com/images/2022/03/27/magazine/27mag-Ukraine-16/27mag-Ukraine-16-thumbLarge-v3.jpg',
        format: 'Large Thumbnail',
        height: 150,
        width: 150,
        type: 'image',
        subtype: 'photo',
        caption: '',
        copyright: 'Alexander Chekmenev for The New York Times',
      },
    ],
    short_url: 'https://nyti.ms/36tBPFX',
  }
];


