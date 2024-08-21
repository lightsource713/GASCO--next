export const products = [
  {
    id: '1',
    title: 'Full Carbon Fiber Cylinder',
    description: 'A compact and lightweight design.',
    featuredImage: {
      url: '/assets/images/carbon.png',
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
        values: ['blue']
      },
      {
        id: '2',
        name: 'size',
        values: ['small', 'medium']
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '400',
        currencyCode: 'SAR'
      },
      minVariantPrice: {
        amount: '300',
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
        url: '/assets/images/carbon.png',
        width: 300,
        height: 300,
        altText: 'I am picture 1'
      }
    ],
    variants: [
      {
        id: '1',
        title: 'Product1 Variant1',
        availableForSale: true,
        price: 400,
        selectedOptions: [
          {
            name: 'color',
            value: 'blue'
          },
          {
            name: 'size',
            value: 'medium'
          }
        ]
      },
      {
        id: '2',
        title: 'Product1 Variant2',
        availableForSale: true,
        price: 120,
        selectedOptions: [
          {
            name: 'color',
            value: 'blue'
          },
          {
            name: 'size',
            value: 'medium'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Replace Carbon Fiber Cylinder',
    description: 'A compact and lightweight design.',
    featuredImage: {
      url: '/assets/images/carbon.png',
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
        values: ['blue']
      },
      {
        id: '2',
        name: 'size',
        values: ['small', 'medium']
      }
    ],
    variants: [
      {
        id: '1',
        title: 'Product2 Variant1',
        availableForSale: true,
        price: 23,
        selectedOptions: [
          {
            name: 'color',
            value: 'blue'
          },
          {
            name: 'size',
            value: 'medium'
          }
        ]
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '23',
        currencyCode: 'SAR'
      },
      minVariantPrice: {
        amount: '10',
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
        url: '/assets/images/carbon.png',
        width: 300,
        height: 300,
        altText: 'I am picture 1'
      }
    ]
  },
  {
    id: '3',
    title: 'Full Steel Metal Cylinder',
    description: 'A low alloy carbon steel with 3mm thickness.',
    featuredImage: {
      url: '/assets/images/metal.png',
      width: 300,
      height: 300,
      altText: 'I am picture 1'
    },
    tags: 'I am a test tag3',
    handle: 'handle3',
    availableForSale: true,
    descriptionHtml: 'Description HTML3',
    priceRange: {
      maxVariantPrice: {
        amount: '180',
        currencyCode: 'SAR'
      },
      minVariantPrice: {
        amount: '100',
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
        values: ['orange']
      },
      {
        id: '2',
        name: 'size',
        values: ['small', 'medium']
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
            value: 'orange'
          },
          {
            name: 'size',
            value: 'medium'
          }
        ]
      }
    ],
    updatedAt: '2020-4-10',
    images: [
      {
        url: '/assets/images/carbon.png',
        width: 300,
        height: 300,
        altText: 'I am picture 1'
      }
    ]
  },
  {
    id: '4',
    title: 'Replace Steel Metal Cylinder',
    description: 'A low alloy carbon with 3mm thickness.',
    featuredImage: {
      url: '/assets/images/metal.png',
      width: 300,
      height: 300,
      altText: 'I am picture 1'
    },
    tags: 'I am a test tag3',
    handle: 'handle4',
    availableForSale: true,
    descriptionHtml: 'Description HTML3',
    priceRange: {
      maxVariantPrice: {
        amount: '23',
        currencyCode: 'SAR'
      },
      minVariantPrice: {
        amount: '10',
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
        values: ['orange']
      },
      {
        id: '2',
        name: 'size',
        values: ['small', 'medium']
      }
    ],
    variants: [
      {
        id: '1',
        title: 'Test Variant2',
        availableForSale: true,
        price: 23,
        selectedOptions: [
          {
            name: 'color',
            value: 'orange'
          },
          {
            name: 'size',
            value: 'medium'
          }
        ]
      }
    ],
    updatedAt: '2020-4-10',
    images: [
      {
        url: '/assets/images/metal.png',
        width: 300,
        height: 300,
        altText: 'I am picture 1'
      }
    ]
  }
  // {
  //   id: '5',
  //   title: 'Full Carbon Fiber Cylinder',
  //   description: 'A low alloy carbon steel with 3mm thickness.',
  //   featuredImage: {
  //     url: '/assets/images/carbon.png',
  //     width: 300,
  //     height: 300,
  //     altText: 'I am picture 5'
  //   },
  //   tags: 'I am a test tag5',
  //   handle: 'handle5',
  //   availableForSale: true,
  //   descriptionHtml: 'Description HTML5',
  //   options: [
  //     {
  //       id: '1',
  //       name: 'color',
  //       values: ['yellow', 'blue']
  //     },
  //     {
  //       id: '2',
  //       name: 'size',
  //       values: ['small', 'medium', 'large']
  //     }
  //   ],
  //   priceRange: {
  //     maxVariantPrice: {
  //       amount: '150',
  //       currencyCode: 'SAR'
  //     },
  //     minVariantPrice: {
  //       amount: '100',
  //       currencyCode: 'SAR'
  //     }
  //   },
  //   seo: {
  //     title: 'seo title5',
  //     description: 'seo description1'
  //   },
  //   updatedAt: '2020-4-10',
  //   images: [
  //     {
  //       url: '/assets/images/carbon.png',
  //       width: 300,
  //       height: 300,
  //       altText: 'I am picture 5'
  //     },

  //   ],
  //   variants: [
  //     {
  //       id: '1',
  //       title: 'Product1 Variant5',
  //       availableForSale: true,
  //       price: 140,
  //       selectedOptions: [
  //         {
  //           name: 'color',
  //           value: 'yellow'
  //         },
  //         {
  //           name: 'size',
  //           value: 'large'
  //         }
  //       ]
  //     },
  //     {
  //       id: '2',
  //       title: 'Product1 Variant2',
  //       availableForSale: true,
  //       price: 120,
  //       selectedOptions: [
  //         {
  //           name: 'color',
  //           value: 'blue'
  //         },
  //         {
  //           name: 'size',
  //           value: 'medium'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: '6',
  //   title: 'Full Carbon Fiber Cylinder',
  //   description: 'A compact and lightweight design.',
  //   featuredImage: {
  //     url: '/assets/images/metal.png',
  //     width: 300,
  //     height: 300,
  //     altText: 'I am picture 6'
  //   },
  //   tags: 'I am a test tag6',
  //   handle: 'handle6',
  //   availableForSale: true,
  //   descriptionHtml: 'Description HTML2',
  //   options: [
  //     {
  //       id: '1',
  //       name: 'color',
  //       values: ['yellow', 'blue', 'pink', 'red']
  //     },
  //     {
  //       id: '2',
  //       name: 'size',
  //       values: ['small', 'large']
  //     }
  //   ],
  //   variants: [
  //     {
  //       id: '1',
  //       title: 'Product2 Variant1',
  //       availableForSale: true,
  //       price: 180,
  //       selectedOptions: [
  //         {
  //           name: 'size',
  //           value: 'small'
  //         },
  //         {
  //           name: 'color',
  //           value: 'red'
  //         }
  //       ]
  //     },
  //     {
  //       id: '2',
  //       title: 'Product2 Variant2',
  //       availableForSale: true,
  //       price: 250,
  //       selectedOptions: [
  //         {
  //           name: 'size',
  //           value: 'medium'
  //         },
  //         {
  //           name: 'color',
  //           value: 'blue'
  //         }
  //       ]
  //     },
  //     {
  //       id: '3',
  //       title: 'Product2 Variant3',
  //       availableForSale: true,
  //       price: 350,
  //       selectedOptions: [
  //         {
  //           name: 'size',
  //           value: 'large'
  //         },
  //         {
  //           name: 'color',
  //           value: 'pink'
  //         }
  //       ]
  //     }
  //   ],
  //   priceRange: {
  //     maxVariantPrice: {
  //       amount: '350',
  //       currencyCode: 'SAR'
  //     },
  //     minVariantPrice: {
  //       amount: '180',
  //       currencyCode: 'SAR'
  //     }
  //   },
  //   seo: {
  //     title: 'seo title2',
  //     description: 'seo description2'
  //   },
  //   updatedAt: '2020-6-13',
  //   images: [
  //     {
  //       url: '/assets/images/metal.png',
  //       width: 300,
  //       height: 300,
  //       altText: 'I am picture 1'
  //     }
  //   ]
  // },
];
