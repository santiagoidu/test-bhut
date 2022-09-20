const axios = require('axios').default;

axios
  .get('http://api-test.bhut.com.br:3000/api/cars')
  .then(response => {
    const text = response.data.map(character => {
      return `
          <div class="box">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>              
                    <strong>${character.title}</strong>
                    <br/>
                    Marca: ${character.brand}<br/>
                    Ano: ${character.age}<br/>
                    Preço: ${character.price}<br/>
                  </p>
                </div>
              </div>
            </article>
          </div>
      `;
    }).join('');

    document.getElementById('section').innerHTML = text;
  })
  .catch(err => {
    console.log(err);
  });
