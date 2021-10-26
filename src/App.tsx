import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from 'src/components/pages/Home'
import News from 'src/components/pages/News'
import Community from 'src/components/pages/Community'
import CancelPayment from 'src/components/pages/CancelPayment'
import ForgotPassword from 'src/components/pages/ForgotPassword'
import UserPage from 'src/components/pages/UserPage'
import BrowseGames from 'src/components/pages/BrowseGames'
import Library from 'src/components/pages/Library'
import GamePage from 'src/components/pages/GamePage'
import Checkout from 'src/components/pages/Checkout'
import Signup from 'src/components/pages/Signup'
import Signin from 'src/components/pages/Signin'
import Wishlist from 'src/components/pages/Wishlist'
import NotFound from 'src/components/pages/NotFound'

import { useAppDispatch, useAppSelector } from 'src/store'
import { useAlgoliaSearchGames } from 'src/store/browseGames'
import { useUserGameIdsListener } from 'src/store/userGames'
import { useGetHomeGames, useUserGamesListener } from 'src/store/games'
import { selectUser, signin, useUserListener } from 'src/store/user'
import { ROUTES } from 'src/types/static'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(signin({ email: 'test@test.com', password: 'testTest' }))
  }, [])

  useUserListener()
  useUserGameIdsListener()
  useUserGamesListener()
  useGetHomeGames()
  useAlgoliaSearchGames()

  return (
    <Router>
      <main className="container mx-auto">
        <div className="grid grid-cols-4 gap-1 mb-4">
          <div className="col-span-4 my-2">Routes</div>
          {Object.values(ROUTES).map((ROUTE) => (
            <Link
              className="px-2 py-1 border rounded-sm"
              to={ROUTE}
              key={ROUTE}
            >
              {ROUTE}
            </Link>
          ))}
        </div>
        <Switch>
          <Route exact path={ROUTES.home}>
            <Home />
          </Route>

          <Route path={ROUTES.wishlist}>
            <Wishlist />
          </Route>
          <Route path={ROUTES.news}>
            <News />
          </Route>
          <Route path={ROUTES.cancel}>
            <CancelPayment />
          </Route>
          <Route path={ROUTES.community}>
            <Community />
          </Route>
          <Route path={ROUTES.cart}>
            <Checkout />
          </Route>
          <Route path={ROUTES.user}>
            <UserPage />
          </Route>
          <Route path={ROUTES.library}>
            <Library />
          </Route>
          <Route path={ROUTES.forgotpassword}>
            <ForgotPassword />
          </Route>
          <Route path={ROUTES.signin}>
            <Signin />
          </Route>
          <Route path={ROUTES.signup}>
            <Signup />
          </Route>
          <Route path={ROUTES.browse}>
            <BrowseGames />
          </Route>
          <Route path={ROUTES.game}>
            <GamePage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App
