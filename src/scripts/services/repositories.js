import { baseUrl, repositoriesQuantity } from "/src/scripts/variables.js"

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    const resposeJson = await response.json()
    console.log(resposeJson)
    return await resposeJson
    // return await response.json()
}

export {getRepositories}