import Loadable from 'react-loadable'
import Loading from '../../components/Loading'
const NotFoundPage = Loadable({
  loader: () => import(/* webpackChunkName: "not-found" */'./NotFoundPage'),
  loading: Loading
})

export default {
  path: '**',
  component: NotFoundPage
}
