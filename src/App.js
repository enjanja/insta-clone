import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactLoader from './components/loader'
import * as ROUTES from './constants/routes'
import UserContext from './context/user'
import useAuthListener from './hooks/use-auth-listener'

import ProtectedRoute from './helpers/protected-route'

const Login = lazy(() => import('./pages/login'))
const SignUp = lazy(() => import('./pages/sign-up'))
const UpdateProfile = lazy(() => import('./pages/update-profile'))
const Dashboard = lazy(() => import('./pages/dashboard'))
const Profile = lazy(() => import('./pages/profile'))
const NotFound = lazy(() => import('./pages/not-found'))
const SinglePost = lazy(() => import('./pages/single-post'))
const Search = lazy(() => import('./pages/search'))
const Following = lazy(() => import('./pages/following'))

export default function App() {
  const { user } = useAuthListener()

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<ReactLoader />}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.UPDATE_PROFILE} component={UpdateProfile} />
            <Route path={ROUTES.PROFILE} component={Profile} />
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.SINGLEPOST} exact>
              <SinglePost />
            </ProtectedRoute>
            {/* <ProtectedRoute user={user} path={ROUTES.FOLLOWING} exact>
              <Following />
            </ProtectedRoute> */}
            <Route path={ROUTES.SEARCH} component={Search} />
            <Route path={ROUTES.FOLLOWING} component={Following} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  )
}
