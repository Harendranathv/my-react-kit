import Loadable from 'react-loadable'
import Loading from '../../components/Loading'
const HomeView = Loadable({
  loader: () => import(/* webpackChunkName: "page-home" */'./HomeView'),
  loading: Loading
})

export default {
  path: '/',
  component: HomeView,
  exact: true,
  auth: true
}
