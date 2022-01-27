import {useCookie, useRuntimeConfig, useState} from "#app";

export const useGitHubCookie = () => useCookie("gh_token")

export const gitHubFetch = (url: string, fetchOptions: any = {}) => {
    return $fetch(url, {
        baseURL: "https://api.github.com",
        ...fetchOptions,
        headers: {
            Authorization: `token ${useGitHubCookie().value}`,
            ...fetchOptions.headers
        }
    })
}

export const useGitHubUser = async () => {
    const cookie = useGitHubCookie()
    const user = useState("gh_user")

    if (cookie.value && !user.value) {
        user.value = await gitHubFetch("/user")
    }

    return user
}

export const gitHubLogin = () => {
    if (process.client) {
        const {GITHUB_CLIENT_ID} = useRuntimeConfig()
        window.location.replace(
            `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=public_repo`
        )
    }
}

export const gitHubLogout = () => {
    useGitHubCookie().value = null
    useState("gh_user").value = null
}