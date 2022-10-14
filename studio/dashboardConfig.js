export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '63493bb17e3b2f212820f2a1',
                  title: 'Sanity Studio',
                  name: 'ecard-portfolio-studio',
                  apiId: '01432701-4711-4473-b4c9-6ead9a5e7fd6'
                },
                {
                  buildHookId: '63493bb1c33d2626dc9a1b9d',
                  title: 'Portfolio Website',
                  name: 'ecard-portfolio',
                  apiId: '6a72dead-c701-4600-b69f-2af5b0424ef4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jackyso2000/ecard-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://ecard-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
