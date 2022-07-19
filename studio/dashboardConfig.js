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
                  buildHookId: '62d72ee7d7886330dd285f01',
                  title: 'Sanity Studio',
                  name: 'react-all-studio',
                  apiId: '508bdbd9-51a6-401c-b1a1-a46b6543bc5f'
                },
                {
                  buildHookId: '62d72ee763025a3018460bf0',
                  title: 'Blog Website',
                  name: 'react-all-web',
                  apiId: 'aeb937eb-49db-42b6-be08-ef6594e5014b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rmasonh18/react-all',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://react-all-web.netlify.app', category: 'apps'}
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
