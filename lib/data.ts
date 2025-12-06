export interface Room {
  id: number
  slug: string
  name: string
  description: string
  longDescription: string
  price: string
  guests: number
  size: string
  beds: string
  baths: string
  image: string
  gallery: string[]
  features: string[]
}

const BOOKING_IMAGE_BASE = 'https://cf.bstatic.com'

const ROOM_IMAGES = [
  `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/239900537.jpg?k=fd3e1be8492590ccc665f9550682e2fa6d2b0e97ef87df04f35fbb02fef0e510&o=`,
  `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/240581666.jpg?k=f0bf182952105ec53e0380fd38ee0869b444768f51a2bb4dabbc0bebaebd1783&o=`,
  `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/239904779.jpg?k=b92e108675c0077cb4bb58081ae7405a3909571642284029e2513aa14691f2eb&o=`,
  `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/327413111.jpg?k=65a4b7eb4081dda3f678132efade8948bdd2c5289becc818c8a2fe4ea696502c&o=`,
  `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/239902704.jpg?k=efdb287370399b27ad790db4bd13e1eec3a1caba278ac119895e7c34d91cb562&o=`,
  `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/411800300.jpg?k=ce7d0814b9b2da33a3783a3ae74f095f9e8119f0bb2dc3c2222054d19f0ca9e5&o=`,
]

// Room-specific gallery images from Booking.com
const ROOM_GALLERIES = {
  doubleBalcony: [
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/239900537.jpg?k=fd3e1be8492590ccc665f9550682e2fa6d2b0e97ef87df04f35fbb02fef0e510&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/239900899.jpg?k=d21932f025f7098e9946a2686d58901da3f774e71f7906115b0012f94cb2659d&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/239900895.jpg?k=5f0513fa2f3d2c113c24f22b98f03ec39561a69cc4b9314e95b99d6fc34ece1d&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/246637702.jpg?k=5b8171e71ab1a49066997fcb17f6689d0ef31951a1da9744d7bff959d35a86d8&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/327196888.jpg?k=c44aa052357f293f0e254b7a7121b993c334fa40f987a6d4463be82434d0e528&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/327194047.jpg?k=fedb1217e823fa8bc7b7013422cfb9458d5cb9fc6ea7596d8eacb3048702d5f7&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/346597642.jpg?k=4a227ba3d9e1c08875132a54caffeffaefe64bbaadd1921529eae6e523f0f001&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/588604328.jpg?k=64a2ef2ea25cf3f2596f2d5b39af3debf94d4c9f5c44c7f9cf6a7c047e89828f&o=`,
  ],
  standardDouble: [
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/240581666.jpg?k=f0bf182952105ec53e0380fd38ee0869b444768f51a2bb4dabbc0bebaebd1783&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/241844386.jpg?k=7a075b795391962854dd1a7354080496354fae4d751680f4f628398106ae10fc&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/411810301.jpg?k=63db12f2562ae50193d859df17f4d6818a4a960987998a069d71f124e2403f43&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/248794087.jpg?k=3f934d265eeb7ec351dac5ead0478d08b09e568b5c34fda75b1e440e66c0197c&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/240582455.jpg?k=f2fee540f1a9cb898d76d54b912c660da037441629fef1154964519947012b4d&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/327154769.jpg?k=afaf6fda81117a7bb13d5d2e5973374ce4f7b1f30a2329b427ecd147bcad7504&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/327161678.jpg?k=aaa9ee20ff2b29ece1cb015836dadf170eb6daf48c6cb16f5e6f1be8fe9173a0&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/327170027.jpg?k=f55b01ead4be74f112843bc437a8853e088de1f0978f078199dc16e1d0164f5f&o=`,
  ],
  standardTriple: [
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/239904779.jpg?k=b92e108675c0077cb4bb58081ae7405a3909571642284029e2513aa14691f2eb&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/248954456.jpg?k=65f13c1c7b6565cd743c7440aece4591677420a047f6f4b8cc648f6d004f229f&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/248953910.jpg?k=57d77565690ba2fec0be1fe6c7f6e124bd9fa8e129267eed96ecc64439e499d7&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/242516144.jpg?k=8769bcec37353de15edb1d66447898dfb3a52bf33a3ac1bcb42195dcde379fb1&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/242289663.jpg?k=6c49439589eeae77d5092f3fe7e2d48e809a7373c408b4a9f2affba222065ee8&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/327160607.jpg?k=6ab2d75f08256dfdb56a151269d0f2ecb2523d8e40352010ffa2a88fa450caa7&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/327196358.jpg?k=7a05f381f0b40db50524d7b209b77d58e81526026a90578daf829a43351f85bf&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/624012927.jpg?k=86c051875794fbc843cc511b1a7aea5fd03d92156943c784732f56fbc71ab483&o=`,
  ],
  standardTwin: [
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/327413111.jpg?k=65a4b7eb4081dda3f678132efade8948bdd2c5289becc818c8a2fe4ea696502c&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/249305924.jpg?k=9719dc00bc5cb763900aca29bd2780370dc90e5e15170fbe36563a9073eefa36&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/327413065.jpg?k=1b338985686863a2497f1a8de0b0f41144aff341c22258941fb763b3cc5375dc&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/249305001.jpg?k=ca00a8596cce1352b08eabe50c011355b50cd9ebfc711c7198c6e035744a8ff0&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/327413104.jpg?k=a1a66daf289621bf93e0697ff26d1401d554eeba5042176a6b21be4220e7cc7a&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/240504283.jpg?k=bd7a9aa9469e172ef93969efa926424009e406cbfde8abc6193fc7cd5851cffc&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/327197135.jpg?k=77c5fb2bcb6f595bb0b1aa914ed197c56a3bca336247a3a90885e5e956fa93c7&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/327159293.jpg?k=ca2c639cd5ab65857c0dadd61526d6d931d7c90ef13057754d7b6d0b51b06171&o=`,
  ],
  luxuryTriple: [
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/239902704.jpg?k=efdb287370399b27ad790db4bd13e1eec3a1caba278ac119895e7c34d91cb562&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/239902714.jpg?k=e90f3813c2ca0647b90410fc13868029eaff69528d690e96e52ba2c016c6f36c&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/239902719.jpg?k=be7ce121ae14b21e098371594f81e268d454d2cd7a58d31669bbb271d63e857b&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/240365967.jpg?k=ec1e83388c0a9d802de7cf299aecadcf1ac6b0866c9dd1abb9e260506a17fa26&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/327172898.jpg?k=d92137f9dbb1f9c2556fda906ac7a726ed01cbb31d94319823e2ac5fef97d31d&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/588603549.jpg?k=35d4364eebddc0864588388ff8399a92d8fb8ca3b0db5e164847040acc0c3ecf&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/588603734.jpg?k=2e7fbceb272c84174fd70e69df5b100dd19b2dc397ac55ed52853521cb126ccd&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/588604223.jpg?k=81c8fb8b044feb8b4757c919a63d05e85154b3ab4448b237058b9a0c04bbdfc2&o=`,
  ],
  chalet: [
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/411800300.jpg?k=ce7d0814b9b2da33a3783a3ae74f095f9e8119f0bb2dc3c2222054d19f0ca9e5&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/327413286.jpg?k=cbe7960074cdaa182a3326196e0cb228e41d20860541abe8229737e274307660&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/411800040.jpg?k=776722e5eadc8e10f16cd9c7c630766716025fb609b6fe7509e6be0dc93a55e5&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/624012927.jpg?k=86c051875794fbc843cc511b1a7aea5fd03d92156943c784732f56fbc71ab483&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/624012931.jpg?k=7debe6ebf51ef7da64ea1442f545af6b92a87282fcd0f8105399f7371fbb37b3&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/536410641.jpg?k=782657f8d81d75a9f8e01c587523a17362f910237ef14f1ca68c36d3a6bbca42&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/242494828.jpg?k=efa0ca675cb31ff456a6a9184a8f39b93c28abc4819d6262e61c1a448f4c1d8c&o=`,
    `${BOOKING_IMAGE_BASE}/xdata/images/hotel/max1024x768/147524845.jpg?k=00c5b0683df7e851ebce6efd36194e03a83ae4f782cdbac4eb26e1c5c79a3adf&o=`,
  ],
}

// Experience images from Unsplash
export const EXPERIENCE_IMAGES = {
  spiceTour:
    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
  stoneTown:
    'https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=800&q=80',
  jozaniForest:
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
  snorkeling:
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
  sunsetCruise:
    'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
  theRock:
    'https://images.unsplash.com/photo-1559599238-308793637427?w=800&q=80',
}

export const rooms: Room[] = [
  {
    id: 114062909,
    slug: 'double-room-balcony',
    name: 'Double Room with Balcony',
    description:
      'Guests will have a special experience as the double room features a fireplace. The spacious double room provides air conditioning, a private entrance, a terrace with garden views as well as a private bathroom featuring a bath.',
    longDescription:
      'Guests will have a special experience as the double room features a fireplace. The spacious double room provides air conditioning, a private entrance, a terrace with garden views as well as a private bathroom featuring a bath. The unit offers 1 bed. Perfect for couples looking to enjoy the tranquility of Zanzibar with modern comforts.',
    price: '80',
    guests: 2,
    size: '35',
    beds: '1 Extra-Large Double (Super-King)',
    baths: '1',
    image: ROOM_IMAGES[0],
    gallery: ROOM_GALLERIES.doubleBalcony,
    features: [
      'Garden View',
      'Balcony',
      'Air Conditioning',
      'Terrace',
      'Bath',
      'Private Bathroom',
      'Private Entrance',
      'Fireplace',
      'Free WiFi',
    ],
  },
  {
    id: 114062919,
    slug: 'standard-double-room',
    name: 'Standard Double Room',
    description:
      'Guests will have a special experience as this double room provides a fireplace. The spacious double room offers air conditioning, a private entrance, a terrace with garden views as well as a private bathroom boasting a bath.',
    longDescription:
      'Guests will have a special experience as this double room provides a fireplace. The spacious double room offers air conditioning, a private entrance, a terrace with garden views as well as a private bathroom boasting a bath. The unit has 1 bed. Ideal for travelers seeking comfort with authentic Zanzibari charm.',
    price: '70',
    guests: 2,
    size: '35',
    beds: '1 Extra-Large Double (Super-King)',
    baths: '1',
    image: ROOM_IMAGES[1],
    gallery: ROOM_GALLERIES.standardDouble,
    features: [
      'Garden View',
      'Air Conditioning',
      'Terrace',
      'Bath',
      'Private Bathroom',
      'Private Entrance',
      'Fireplace',
      'Free WiFi',
    ],
  },
  {
    id: 114062920,
    slug: 'standard-triple-room',
    name: 'Standard Triple Room',
    description:
      'This triple room offers a fireplace. The spacious triple room provides air conditioning, a private entrance, a terrace with garden views as well as a private bathroom featuring a bath.',
    longDescription:
      'This triple room offers a fireplace. The spacious triple room provides air conditioning, a private entrance, a terrace with garden views as well as a private bathroom featuring a bath. The unit offers 2 beds. Perfect for small families or friends traveling together.',
    price: '100',
    guests: 3,
    size: '35',
    beds: '1 Single + 1 Extra-Large Double (Super-King)',
    baths: '1',
    image: ROOM_IMAGES[2],
    gallery: ROOM_GALLERIES.standardTriple,
    features: [
      'Garden View',
      'Air Conditioning',
      'Terrace',
      'Bath',
      'Private Bathroom',
      'Private Entrance',
      'Fireplace',
      'Free WiFi',
    ],
  },
  {
    id: 114062922,
    slug: 'standard-twin-room',
    name: 'Standard Twin Room with Garden View',
    description:
      'This twin room features a fireplace. The spacious twin room features air conditioning, a private entrance, a terrace with garden views as well as a private bathroom boasting a bath.',
    longDescription:
      'This twin room features a fireplace. The spacious twin room features air conditioning, a private entrance, a terrace with garden views as well as a private bathroom boasting a bath. The unit has 2 beds. Perfect for friends traveling together or solo travelers wanting extra space.',
    price: '75',
    guests: 2,
    size: '35',
    beds: '2 Single Beds',
    baths: '1',
    image: ROOM_IMAGES[3],
    gallery: ROOM_GALLERIES.standardTwin,
    features: [
      'Garden View',
      'Air Conditioning',
      'Terrace',
      'Bath',
      'Private Bathroom',
      'Private Entrance',
      'Fireplace',
      'Free WiFi',
    ],
  },
  {
    id: 114062925,
    slug: 'luxury-triple-room',
    name: 'Luxury Triple Room',
    description:
      'This triple room features a fireplace. The spacious triple room provides air conditioning, a private entrance, a terrace with garden views as well as a private bathroom featuring a bath.',
    longDescription:
      'This triple room features a fireplace. The spacious triple room provides air conditioning, a private entrance, a terrace with garden views as well as a private bathroom featuring a bath. The unit offers 3 beds. Perfect for families or groups seeking extra space and comfort.',
    price: '120',
    guests: 4,
    size: '35',
    beds: '2 Single + 1 Large Double (King)',
    baths: '1',
    image: ROOM_IMAGES[4],
    gallery: ROOM_GALLERIES.luxuryTriple,
    features: [
      'Garden View',
      'Air Conditioning',
      'Terrace',
      'Bath',
      'Private Bathroom',
      'Private Entrance',
      'Fireplace',
      'Free WiFi',
    ],
  },
  {
    id: 114062933,
    slug: 'one-bedroom-chalet',
    name: 'One-Bedroom Chalet',
    description:
      'Guests will have a special experience as this chalet provides a fireplace. Boasting a private entrance, this air-conditioned chalet includes 1 bedroom and 1 bathroom with a bath and a shower.',
    longDescription:
      'Guests will have a special experience as this chalet provides a fireplace. Boasting a private entrance, this air-conditioned chalet includes 1 bedroom and 1 bathroom with a bath and a shower. The chalet offers executive lounge access, a seating area, a dining area as well as a terrace with garden views. The unit has 1 bed. Perfect for solo travelers seeking privacy and tranquility.',
    price: '60',
    guests: 1,
    size: '30',
    beds: '1 Single Bed',
    baths: '1',
    image: ROOM_IMAGES[5],
    gallery: ROOM_GALLERIES.chalet,
    features: [
      'Private Entrance',
      'Garden View',
      'Air Conditioning',
      'Seating Area',
      'Dining Area',
      'Bath',
      'Shower',
      'Fireplace',
      'Executive Lounge Access',
      'Free WiFi',
    ],
  },
]
