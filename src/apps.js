export const path = [{
    name: '/',
    next: 'subscribe',
    prev: '',
    step: '1/3',
    progress: 33,
},
{
    name: '/subscribe',
    next: 'payment',
    prev: '',
    step: '2/3',
    progress: 66,
},
{
    name: '/payment',
    next: 'finished',
    prev: 'subscribe',
    step: '2/3',
    progress: 66,
}
];