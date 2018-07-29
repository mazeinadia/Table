export function uniqueProjects() {
    return {
        type: 'LIST_UNIQUE_PROJECTS'
    }
}

export function methodRating () {
    return {
        type: 'METHOD_RATE'
    }
}

export function fetch () {
    return {
        type: 'FETCH_TABLE'
    }
}

export function filterTable (filter) {
    return {
        type: 'FILTER_CHANGED',
        filter: filter
    }
}

export function showContent (content) {
    return {
        type: 'SHOW_CONTENT',
        content: content
    }
}