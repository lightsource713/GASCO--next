export const products = [
  {
    id: '1',
    title: 'Full Carbon Fiber Cylinder',
    description: 'A low alloy carbon steel with 3mm thickness.',
    featuredImage: {
      url: 'http://data.its.sa:3000/_next/image?url=%2Fimages%2Fmetal.png&w=1920&q=75',
      width: 300,
      height: 300,
      altText: 'I am picture 1'
    },
    tags: 'I am a test tag1',
    handle: 'handle1',
    availableForSale: true,
    descriptionHtml: 'Description HTML1',
    options: [
      {
        id: '1',
        name: 'color',
        values: ['yellow', 'blue']
      },
      {
        id: '2',
        name: 'size',
        values: ['small', 'medium', 'large']
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '150',
        currencyCode: 'SAR'
      },
      minVariantPrice: {
        amount: '100',
        currencyCode: 'SAR'
      }
    },
    seo: {
      title: 'seo title1',
      description: 'seo description1'
    },
    updatedAt: '2020-4-10',
    images: [
      {
        url: 'http://data.its.sa:3000/_next/image?url=%2Fimages%2Fmetal.png&w=1920&q=75',
        width: 300,
        height: 300,
        altText: 'I am picture 1'
      }
    ],
    variants: [
      {
        id: '1',
        title: 'Test Variant1',
        availableForSale: true,
        price: 200,
        selectedOptions: [
          {
            name: 'color',
            value: 'yellow'
          },
          {
            name: 'size',
            value: 'large'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Full Carbon Fiber Cylinder',
    description: 'A compact and lightweight design.',
    featuredImage: {
      url: 'http://data.its.sa:3000/_next/image?url=%2Fimages%2Fcarbon.png&w=1080&q=75',
      width: 300,
      height: 300,
      altText: 'I am picture 1'
    },
    tags: 'I am a test tag2',
    handle: 'handle2',
    availableForSale: true,
    descriptionHtml: 'Description HTML2',
    options: [
      {
        id: '1',
        name: 'color',
        values: ['yellow', 'blue', 'pink', 'red']
      },
      {
        id: '2',
        name: 'size',
        values: ['small', 'large']
      }
    ],
    variants: [
      {
        id: '1',
        title: 'Test Variant2',
        availableForSale: true,
        price: 180,
        selectedOptions: [
          {
            name: 'size',
            value: 'small'
          }
        ]
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '350',
        currencyCode: 'SAR'
      },
      minVariantPrice: {
        amount: '180',
        currencyCode: 'SAR'
      }
    },
    seo: {
      title: 'seo title2',
      description: 'seo description2'
    },
    updatedAt: '2020-6-13',
    images: [
      {
        url: 'http://data.its.sa:3000/_next/image?url=%2Fimages%2Fcarbon.png&w=1080&q=75',
        width: 300,
        height: 300,
        altText: 'I am picture 1'
      }
    ]
  },
  {
    id: '3',
    title: 'Full Carbon Fiber Cylinder',
    description: 'A compact and lightweight design.',
    featuredImage: {
      url: 'http://data.its.sa:3000/_next/image?url=%2Fimages%2Fmetal.png&w=1920&q=75',
      width: 300,
      height: 300,
      altText: 'I am picture 1'
    },
    tags: 'I am a test tag3',
    handle: 'handle3',
    availableForSale: false,
    descriptionHtml: 'Description HTML3',
    priceRange: {
      maxVariantPrice: {
        amount: '180',
        currencyCode: 'SAR'
      },
      minVariantPrice: {
        amount: '140',
        currencyCode: 'SAR'
      }
    },
    seo: {
      title: 'seo title3',
      description: 'seo description2'
    },
    options: [
      {
        id: '1',
        name: 'color',
        values: ['yellow', 'blue', 'pink', 'red']
      },
      {
        id: '2',
        name: 'size',
        values: ['small', 'large']
      }
    ],
    variants: [
      {
        id: '1',
        title: 'Test Variant2',
        availableForSale: true,
        price: 180,
        selectedOptions: [
          {
            name: 'color',
            value: 'blue'
          }
        ]
      }
    ],
    updatedAt: '2020-4-10',
    images: [
      {
        url: 'http://data.its.sa:3000/_next/image?url=%2Fimages%2Fcarbon.png&w=1080&q=75',
        width: 300,
        height: 300,
        altText: 'I am picture 1'
      }
    ]
  }
];
