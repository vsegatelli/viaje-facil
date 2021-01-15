const destinos = [
  {
    id: 0,
    cidade: 'Rio de Janeiro',
    uf: 'RJ',
    promo: true,
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/01/d9/48/5c/rio-de-janeiro.jpg'
  },
  {
    id: 1,
    cidade: 'São Paulo',
    uf: 'SP',
    promo: true,
    img: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2016/08/o-que-fazer-em-sao-paulo-capa2019-01.jpg'
  },
  {
    id: 2,
    cidade: 'Brasília',
    uf: 'DF',
    promo: false,
    img: 'https://imagens.ebc.com.br/EwCiH2YScNwBKpcyN_YVn60diV0=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/brasilia_60_anos_esplanada_aerea_0420202404_2.jpg?itok=70GH__lG'
  },
  {
    id: 3,
    cidade: 'Goiânia',
    uf: 'GO',
    promo: false,
    img: 'https://s2.glbimg.com/9VLKAbjpzPRQ3Vs95ztyHS2Hlro=/0x0:4496x3000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/f/W/TvIW5wSIiNHVZ8vjsrSw/dsc-0260.jpg'
  }
]

const controller = {
  index: (req, res) => {
    res.json(destinos)
  },
  show: (req, res) => {
    res.json(destinos[req.params.id])
  },
  promos: (req, res) => {
    res.json(destinos)
  }
}

module.exports = controller
