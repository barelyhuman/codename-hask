export const loginStack = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'Login',
          },
        },
      ],
    },
  },
};

export const mainStack = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Chats',
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Settings',
                },
              },
            ],
          },
        },
      ],
    },
  },
};
