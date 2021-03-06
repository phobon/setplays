const sourceData = [
  {
    key: '01',
    source: 'https://dribbble.com/shots/5549488-Dxpe-Chef',
    tags: ['grid']
  },
  {
    key: '02',
    source: 'https://dribbble.com/shots/5527887-Pyramid-Brewing',
    tags: ['grid']
  },
  {
    key: '03',
    source: 'https://www.instagram.com/p/BqUC2VzBDJZ/',
    tags: ['grid']
  },
  {
    key: '04',
    source: 'https://dribbble.com/shots/5577247--Chanel',
    tags: ['grid']
  },
  {
    key: '05',
    source: 'https://dribbble.com/shots/6264487-Indigo-DS-Schedule',
    tags: ['mobile']
  },
  {
    key: '06', 
    source: 'https://dribbble.com/shots/6659481-Mobile-app-Social-media-network',
    tags: ['mobile']
  },
  {
    key: '07',
    source: 'https://dribbble.com/shots/6660965-Schedule-Page-for-SaaS-platform',
    tags: ['mobile']
  },
  {
    key: '08',
    source: 'https://dribbble.com/shots/6676866-Photographer-Portfolio',
    tags: ['grid']
  }
]

export default function handle(req, res) {
  res.json(sourceData);
};