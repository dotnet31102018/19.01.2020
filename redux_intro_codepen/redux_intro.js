// add this to settings:
// babel
// https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.5/redux.js + babel

const {createStore} = Redux;
console.log('hello')

const initState = {
  todos : ['take dog for a walk'],
  posts : ['hello world']
}

function myReducer(state = initState, action) {
  console.log('my reducer')
  console.log(state)
  console.log(action)
  if (action.type == 'ADD_TODO') {
    console.log('new todo...')
    return {
      ...state,
      todos : [...state.todos, action.todo]
    }
  }
    if (action.type == 'ADD_POST') {
    console.log('new post...')
    return {
      ...state,
      posts : [...state.posts, action.post]
    }
  }

}

const store = createStore(myReducer)

const todoAction = {
  type: 'ADD_TODO',
  todo: 'buy laptop'
}

const postAction = {
  type: 'ADD_POST',
  post: 'cool article'
}

store.subscribe(() => {
  console.log('state updated...')
  console.log(store.getState())
})

store.dispatch(todoAction)
store.dispatch(postAction)

