const API_KEY = process.env.API_KEY;

const apiauth = [
  (daum = {
    source: '/daum',
    destination: `https://daum.net`,
    permanent: false,
  }),
  (naver = {
    source: '/naver',
    destination: `https://naver.com`,
    permanent: false,
  }),
];

module.exports = apiauth;
