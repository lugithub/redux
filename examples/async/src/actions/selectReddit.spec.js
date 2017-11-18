import { selectReddit, SELECT_REDDIT } from '.';

describe('selectReddit', () => {
  it('should return the action', () => {
    const action = selectReddit('video');
    expect(action).toEqual({
      type: SELECT_REDDIT,
      reddit: 'video'
    })
  });
})
