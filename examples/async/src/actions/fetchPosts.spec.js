import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import lolex from 'lolex'
import { fetchPosts, REQUEST_POSTS, RECEIVE_POSTS } from '.';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('fetchPosts', () => {
  let clock
  beforeEach(() => {clock = lolex.install()})
  afterEach(() => {clock = clock.uninstall()})

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    fetchMock
    .getOnce('https://www.reddit.com/r/video.json', {
      body: { data: { children: [] } },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [{"reddit": "video", "type": "REQUEST_POSTS"},
      {"posts": [], "receivedAt": 500, "reddit": "video", "type": "RECEIVE_POSTS"}
    ];

    const store = mockStore({ todos: [] })
    clock.tick(500)
    return store.dispatch(fetchPosts('video')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  })
})
