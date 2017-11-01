import visibilityFilter from './visibilityFilter'

describe('visibilityFilter reducer', () => {
  it('should handle initial state', () => {
    expect(
      visibilityFilter(undefined, {})
    ).toEqual('SHOW_ALL')
  })

  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(
      visibilityFilter('SHOW_ALL', {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ACTIVE',
      })
    ).toEqual('SHOW_ACTIVE')
  })
})
