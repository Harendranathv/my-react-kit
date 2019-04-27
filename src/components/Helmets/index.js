import Loadable from 'react-loadable'
import Loading from '../Loading'
import { timeout } from '../../constants/data'

export default Loadable({
  loader: () => import(/* webpackChunkName: "helmets" */'./HelmetsView'),
  loading: Loading,
  timeout
})
