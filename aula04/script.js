const searchInput = document.querySelector('#search-input')
const resultArtist = document.querySelector('#result-artist')
const resultPlaylist = document.querySelector('#result-playlists')

const requestApi = (searchTerm) => {
	const url = `http://localhost:3000/artists?name_like=${searchTerm}`
	fetch(url)
		.then((response) => response.json())
		.then((result) => displayResults(result))
}

const displayResults = (result) => {
	resultPlaylist.classList.add('hidden')
	const artistName = document.querySelector('#artist-name')
	const artistImage = document.querySelector('#artist-img')

	result.forEach((element) => {
		artistName.innerText = element.name
		artistImage.src = element.urlImg
	})

	resultArtist.classList.remove('hidden')
}

document.addEventListener('input', () => {
	const searchTerm = searchInput.value.toLowerCase()
	if (searchTerm === '') {
		resultArtist.classList.add('hidden')
		resultPlaylist.classList.remove('hidden')
		return
	}

	requestApi(searchTerm)
})
