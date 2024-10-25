function getRandomSize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addShape(type) {
    const quantity = parseInt(document.getElementById('shape-quantity').value);
    if (quantity < 1 || quantity > 10) return;

    const createAndStyleShape = (size, left, top) => {
        const shape = document.createElement('div');
        shape.classList.add('shape', type);
        shape.style.left = left;
        shape.style.top = top;
        return shape;
    };

    for (let i = 0; i < quantity; i++) {
        let size, left, top;
        let shape;

        switch (type) {
            case 'square':
                size = getRandomSize(50, 200);
                left = Math.random() * (window.innerWidth - size) + 'px';
                top = Math.random() * (window.innerHeight - size) + 'px';
                shape = createAndStyleShape(size, left, top);
                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;
                break;

            case 'triangle':
                size = getRandomSize(50, 200);
                left = Math.random() * (window.innerWidth - 2 * size) + 'px';
                top = Math.random() * (window.innerHeight - size) + 'px';
                shape = createAndStyleShape(size, left, top);
                shape.style.borderLeft = `${size}px solid transparent`;
                shape.style.borderRight = `${size}px solid transparent`;
                shape.style.borderBottom = `${size}px solid blue`;
                break;

            case 'circle':
                size = getRandomSize(50, 200);
                left = Math.random() * (window.innerWidth - size) + 'px';
                top = Math.random() * (window.innerHeight - size) + 'px';
                shape = createAndStyleShape(size, left, top);
                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;
                shape.style.borderRadius = '50%';
                break;
        }

        shape.addEventListener('click', () => {
            if (type !== 'triangle') {
                shape.classList.toggle('selected');
            } else {
                shape.style.borderBottomColor = shape.style.borderBottomColor === 'blue' ? 'yellow' : 'blue';
            }
        });

        shape.addEventListener('dblclick', () => {
            shape.remove();
        });

        document.body.appendChild(shape);
    }
}
