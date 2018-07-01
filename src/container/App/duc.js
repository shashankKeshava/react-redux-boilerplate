// App Container Duc

import Duck from 'extensible-duck';

export const AppDuc = new Duck({
    namespace: 'app-duc',
    store: 'app',
    types: ['LOAD'],
    initialState: {
        container: 'App Container',
    },
    reducer: (state, action, duck) => {
        switch (action.type) {
            default:
                return state;
        }
    },
    selectors: {
        root: state => state,
    },
    creators: duck => ({
        loadPage: () => ({
            type: duck.types.LOAD,
        }),
    }),
});
