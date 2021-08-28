const {createStore} = require('redux')
const {root} = require('../reducers/index.js')
const {middleware} = require('../middlewares/index.js')

const store = createStore(root, middleware);

export default store
