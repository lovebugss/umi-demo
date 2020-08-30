export default {
  // 'GET /api/post/:id': (req, res) => {
  //   res.status(404).send({
  //     status: 'ok',
  //     currentAuthority: 'user',
  //   });
  // },
  'GET /api/post/:id': {
    code: 1,
    message: 'success',
    data: {
      postId: 1111111,
      orgCode: 'CGTN',
      postType: 'DEFAULT',
      postScore: 80.12,
      content:
        "Live: Picturesque scenery of colorful salt pans in Shandong\\nSalt pans are usually white, but some can be brightly colored due to the presence of micro-organisms that react with the salts. Algae can also give them striking hues of green, red and pink. Take a look at an aerial view of colorful salt pans in Rongcheng, a city in east China's Shandong Province. #Roadtoxiaokangsociety",
      scoreDetails: [
        {
          id: 34123,
          order: 1,
          dimension: '观看',
          neutral: 10000,
          weightValue: 0.3,
          score: 9.0,
        },
        {
          id: 4534,
          order: 2,
          dimension: '评论',
          celebrityPositive: 1,
          celebrityNegative: 1200,
          neutral: 100,
          positive: 1000,
          negative: 123,
          weightValue: 0.3,
          score: 25.63,
        },
        {
          id: 12134,
          order: 3,
          dimension: '点赞',
          celebrityPositive: 4,
          celebrityNegative: 1,
          celebrityNeutral: 2,
          positive: 3,
          neutral: 1,
          negative: 111,
          weightValue: 0.4,
          score: 60.4,
        },
      ],
    },
  },
};
