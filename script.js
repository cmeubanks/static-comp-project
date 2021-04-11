pans = [
  { image: './assets/green-pans.jpg',
    like: 05,
    name: 'Green Pan Fam',
    date: Date.now(),
    website: "https://www.target.com/c/pots-pans-cookware-kitchen-dining/sale/-/N-yqpatZ5tdv0",
    handle: '@pan-damonium',
    photo: 15,
  },

  { image: './assets/white-pan.jpg',
    like: 11,
    name: 'White Pan',
    date: Date.now(),
    website: "https://www.williams-sonoma.com/shop/cookware/",
    handle: '@fl-pan-handle',
    photo: 22,
  },

  { image: './assets/blue-pan.jpg',
    like: 13,
    name: 'Blue Pan',
    date: Date.now(),
    website: "https://www.amazon.com/cookware/b?ie=UTF8&node=289814",
    handle: '@i_am_pan',
    photo: 18,
  },

  { image: './assets/yellow-pans.jpg',
    like: 33,
    name: 'Yellow Pan Fam',
    date: Date.now(),
    website: "https://www.lecreuset.com/",
    handle: '@fancy-pans',
    photo: 16,
  },

  { image: './assets/purple-pan.jpg',
    like: 09,
    name: 'Purple Pan',
    date: Date.now(),
    website: "https://www.lecreuset.com/explore-colors.html",
    handle: '@pan-doras_box',
    photo: 31,
  },

  { image: './assets/pink-pans.jpg',
    like: 41,
    name: 'Pink Pan Fam',
    date: Date.now(),
    website: "https://www.macys.com/shop/kitchen/cookware/Color_normal/Pink?id=7552",
    handle: '@omg-pans',
    photo: 23,
  },

  { image: './assets/blue-pans.jpg',
    like: 02,
    name: 'Blue Pan',
    date: Date.now(),
    website: "https://www.etsy.com/market/blue_enamel_cookware",
    handle: '@pannnn',
    photo: 01,
  },

  { image: './assets/black-pans.jpg',
    like: 27,
    name: 'Black Pans',
    date: Date.now(),
    website: "https://www.surlatable.com/bk-black-steel-skillets/PRO-5283494.html",
    handle: '@classic_pan',
    photo: 14,
  },
];

const container = document.querySelector('.article-container');

window.addEventListener('load', loadArticles);

function loadArticles() {
pans.forEach(pan => {
container.innerHTML += `
  <article>
    <section class="article-top" style="background-image: url(${pan.image})">
      <button type="button" name="button">
        <img class="like-heart" src="assets/heart-outline.png" alt="notepad">
      </button>
      <div class="group-styler">
        <p class="txt-2">Likes</p>
        <p class="num">${pan.like}</p>
      </div>
    </section>
    <section class="article-bottom">
      <div class="group-styler">
        <h3 class="txt-1">${pan.name}</h3>
        <p>${pan.date}</p>
      </div>
      <a class="website" href="${pan.website}">Check Out The ${pan.name}'s Personal Page</a>
      <div class="group-styler">
        <p class="txt-2">subscribe:</p>
        <a class="txt-1">${pan.handle}</a>
      </div>
      <div class="group-styler">
        <p class="txt-2">Photos</p>
        <p class="num">${pan.photo}</p>
      </div>
    </section>
  </article>
  `
  })
};
