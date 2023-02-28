function append(data,container){
    data.forEach(el => {
        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = el.image;
        img.style.width = '100px';

        div.append(img)
        container.append(div);
    });
}

export default append;