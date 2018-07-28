import InitialState from '../states/initial';
import UniqueProjects from "../states/uniqueProjects";
import Table from '../states/table';
import Rating from '../states/rating'
import FilteredTable from '../states/filteredTable';

export default function (state = InitialState, action) {
    switch (action.type) {
        case 'LIST_UNIQUE_PROJECTS': return UniqueProjects(state);
        case 'FETCH_TABLE': return Table(state);
        case 'METHOD_RATE': return Rating(state);
        case 'FILTER_CHANGE': return FilteredTable(state, action.filter);
        default: return state;
    }
}