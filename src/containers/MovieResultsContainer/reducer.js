import search from './actions'
import { TOGGLE_FILTER_PANEL } from '../../constants/filterPanelToggle'
import { track } from '../../util/segment'
import { PRODUCT_LIST_FILTERED } from '../../constants/analytics'

export const initialState = {
  searchQueryString: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH: {
      const { selectedIds, selectedIdCount } = state
      const { queryString } = action
      const workingSet = selectedIds[topLevelConcept] || new Set([])
      const newSet = { [topLevelConcept]: (workingSet.delete(concept) ? workingSet : new Set([...workingSet, concept])) }
      const selectedDiff = newSet[topLevelConcept].size > workingSet.size ? selectedIdCount + 1 : selectedIdCount - 1

      return { ...state, selectedIds: { ...selectedIds, ...newSet }, selectedIdCount: selectedDiff }
    }
    default:
      return state
  }
}

export default reducer
