// App Container Duc

import Duck from 'extensible-duck';

export default new Duck({
    namespace: 'app-duc',
    store: 'App',
    types: ['LOAD'],
    initialState: {},
    reducer: (state, action, duck) => {
        switch (action.type) {
            default: return state;
        }
    },
    selectors: {
        root: state => state
    },
    creators: (duck) => ({
        loadPage: () => ({
            type: duck.types.LOAD
        })
    })

})