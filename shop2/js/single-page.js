
const goods = [
    { image: 'img/single-page/1.jpg', title: 'Shirt', price: 150 },
    { image: 'img/single-page/2.jpg', title: 'Socks', price: 50  },
    { image: 'img/single-page/3.jpg', title: 'Jacket',price: 350},
    { image: 'img/single-page/4.jpg', title: 'Shoes', price: 450 }
];

const renderGoodsItem = (image, title, price) => {
    return `<a href="#" class="also-flex-unit">
    <div>
        <div style="background-image: url(${image});" class="also-flex-img"></div>
        <div class="also-unit-name">${title}</div>
        <div class="also-flex-price">$${price.toFixed(2)}</div>
        <div class="also-flex-rating">
            <i class="fas fa-star rat"></i>
            <i class="fas fa-star rat"></i>
            <i class="fas fa-star rat"></i>
            <i class="fas fa-star rat"></i>
            <i class="fas fa-star rat"></i>
        </div>
    </div>
</a>`;
};



const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem( item.image, item.title, item.price ));
    document.querySelector('.also-flex').innerHTML = goodsList;
};

renderGoodsList(goods);


