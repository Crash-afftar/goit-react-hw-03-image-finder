export function fetchImages (query, page=1) {

    const KEY = '34416358-69880e91706e8211d2d3c97df';
    return fetch(`https://pixabay.com/api/?key=${KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`).then(response => response.json());
}