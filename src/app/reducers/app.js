import InitialState from '../states/initial';
import UniqueProjects from "../states/uniqueProjects";
import Table from '../states/table';
import Rating from '../states/rating'
import FilteredTable from '../states/filteredTable';
import Content from '../states/content';

export default function (state = InitialState(), action) {
    console.log(action.type);
    switch (action.type) {
        case 'LIST_UNIQUE_PROJECTS': return UniqueProjects(state);
        case 'FETCH_TABLE': return Table(state);
        case 'METHOD_RATE': return Rating(state);
        case 'FILTER_CHANGED': return FilteredTable(state, action.filter);
        case 'SHOW_CONTENT': return Content(state, action.content);
        default: return state;
    }
}