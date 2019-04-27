import HomeView from './HomeView'
import { HOME_PATH } from '../../constants/url'

export default {
  path: HOME_PATH,
  component: HomeView,
  exact: true,
  auth: true
}
