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
        type: 'FETCH_DATA',
        filter: filter
    }
}