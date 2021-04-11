pans = [
  { image: './assets/green-pans.jpg',
    like: 05,
    name: 'Green Pan',
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

  { image: './assets/green-pans.jpg',
    like: 05,
    name: 'Green Pan',
    date: Date.now(),
    website: "https://www.target.com/c/pots-pans-cookware-kitchen-dining/sale/-/N-yqpatZ5tdv0",
    handle: 'one-green-pan',
    photo: 15,
  },
]









const container = document.querySelector('.article-container');


window.addEventListener('load', loadArticles)





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
}
