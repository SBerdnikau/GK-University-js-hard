const goods = [
    { image: 'img/catalog-img/1.jpg', title: 'Shirt', price: 150 },
    { image: 'img/catalog-img/2.jpg', title: 'Socks', price: 50  },
    { image: 'img/catalog-img/3.jpg', title: 'Jacket',price: 350},
    { image: 'img/catalog-img/4.jpg', title: 'Shoes', price: 450 },
    { image: 'img/catalog-img/5.jpg', title: 'Dress', price: 550 },
    { image: 'img/catalog-img/6.jpg', title: 'Suit',  price: 650 },
    { image: 'img/catalog-img/7.jpg', title: 'Vest',  price: 750 },
    { image: 'img/catalog-img/8.jpg', title: 'Shoes', price: 850 },
    { image: 'img/catalog-img/9.jpg', title: 'Suit',  price: 150 }
];

const renderGoodsItem = (image, title, price) => {
    return `<article class="product-flex">
                    <a href="single-page.html" class="product">
                        <div class="catalogunit" style="background-image: url(${image});"></div>
                        <h4 class="unit-name">${title}</h4>
                        <div class="unit-price">$${price.toFixed(2)}</div>
                        <div class="unit-price-rating">
                            <i class="fas fa-star rat"></i>
                            <i class="fas fa-star rat"></i>
                            <i class="fas fa-star rat"></i>
                            <i class="fas fa-star rat"></i>
                            <i class="fas fa-star rat"></i>
                        </div>
                    </a>
                    <a href="shopping-card.html" class="add">Add to&nbsp;Cart</a>
                </article>`;
};



const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem( item.image, item.title, item.price ));
    document.querySelector('.product-catalog').innerHTML = goodsList;
};

renderGoodsList(goods);