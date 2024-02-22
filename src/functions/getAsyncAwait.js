
export const getImage = async() => {

    try {
        const apiKey = '1l3U2WUHbijmxY7E9PYPcooLp1y4bcIC';
        const resp = await fetch('https://api.giphy.com/v1/gifs');

        const {data} = await resp.json();

        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        return 'No se encontro la imagen'
    }

}
