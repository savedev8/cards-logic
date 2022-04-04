export const APPS_CONFIG = {
    '/': {
        id: 1,
      next: 'subscribe',
      prev: '',
      step: '1/3',
      progress: 33,
    },
    'subscribe': {
        id: 2,
        next: 'payment',
        prev: '',
        step: '2/3',
        progress: 66,
    },
    'payment': {
        id: 3,
        next: 'finished',
        prev: 'subscribe',
        step: '2/3',
        progress: 66,
    },
};