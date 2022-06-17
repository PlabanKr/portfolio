export type Project = {
    title: string,
    description: string,
    repo: string,
    live: Live
}

export type Live = {
    status: boolean,
    url: string
}