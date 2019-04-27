import path from 'path'

const publicPath = '/public'
const assetsPath = publicPath + '/assets'

export const publicAssets = {
  manifest: path.join(publicPath, '/manifest.json'),
  favicon: path.join(publicPath, '/favicon.ico'),
  placeholder: {
    home: path.join(assetsPath, 'img/placeholder-home.jpg'),
    big: path.join(assetsPath, 'img/placeholder-big.jpg'),
    small: path.join(assetsPath, 'img/placeholder-small.png'),
    avatar: path.join(assetsPath, 'img/placeholder-avatar.jpg'),
    sorry: path.join(assetsPath, 'img/placeholder-sorry.webp'),
    marker: path.join(assetsPath, 'img/placeholder-marker.png'),
    location: path.join(assetsPath, 'img/placeholder-location.png'),
    lahan: [1, 2, 3, 4, 5, 6].map(lahan => path.join(assetsPath, 'img/lahan-' + lahan)),
    map: path.join(assetsPath, 'img/placeholder-map.png'),
    wishlistActive: path.join(assetsPath, 'img/placeholder-wishlist-active.png'),
    wishlistInActive: path.join(assetsPath, 'img/placeholder-wishlist-inactive.png'),
    close: path.join(assetsPath, 'img/placeholder-close.png')
  }
}

export const cdn = {
  // slick: {
  //   style: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
  //   theme: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  // },
  google: {
    fonts: {
      nunitoSans: "https://fonts.googleapis.com/css?family=Nunito+Sans:700"
    },
    icons: {
      materialUI: 'https://fonts.googleapis.com/icon?family=Material+Icons'
    }
  }
}
// API
// export const baseAPI = 'http://localhost:3000/api/v1'

// routing
export const HOME_PATH = '/'
