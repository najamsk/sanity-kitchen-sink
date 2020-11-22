export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fba3a3e596b76921fc8e563',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5ykwrw6u',
                  apiId: '8438b46b-a894-4193-9835-2c00c9d98389'
                },
                {
                  buildHookId: '5fba3a3f706b2267070b6ea1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-v74bqxhz',
                  apiId: 'a109845c-8a8b-4254-9a6a-55314d743cd7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/najamsk/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-v74bqxhz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
