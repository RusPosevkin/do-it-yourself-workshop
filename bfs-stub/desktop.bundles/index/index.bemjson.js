({
    block: 'page',
    mix: { block: 'sssr', js: true },
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    content: [
            {
                block: 'header',
                content: [
                    {
                        block: 'logo',
                        mix: { block: 'header', elem: 'logo' },
                        content: 'Social Services Search Robot'
                    },
                    {
                        block: 'form',
                        mix: { block: 'header', elem: 'form' },
                        content: [
                            {
                                elem: 'search',
                                content: [
                                {
                                    block: 'input',
                                    mods: { theme: 'normal', size: 'm', 'has-clear' : true },
                                    name: 'query',
                                    placeholder: 'try me, baby!'
                                },
                                {
                                    block : 'button',
                                    mods: { theme: 'normal', size: 'm' },
                                    type: 'submit',
                                    text: 'Найти'
                                },
                                {
                                  block: 'spin',
                                  mods: { theme: 'normal', size: 's' }
                                }

                                ]
                            }
                        ]
                    }
                ]
            },
            {
                block: 'content',
                      content: [
                          {
                              block: 'island',
                              content: [
                                  {
                                      elem: 'header',
                                      content: {
                                          block: 'user',
                                          content: [
                                              {
                                                  elem: 'post-time',
                                                  content: 'time'
                                              },
                                              {
                                                  block: 'image',
                                                  mix: { block: 'user', elem: 'icon' },
                                                  url: 'https://pbs.twimg.com/profile_images/1384848690/image_400x400.jpg',
                                                  alt: 'user.name'
                                              }
                                          ]
                                      }
                                  },
                                  {
                                      elem: 'text',
                                      content: 'Twitter message text'
                                  },
                                  {
                                      elem: 'footer',
                                      content: [
                                          {
                                              block: 'service',
                                              mods: { type: 'twitter' }
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]

            }
        ]

})
