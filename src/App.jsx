import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from 'react-router-dom'

import { createAction } from './pages/Create'
import { tasksLoader } from './pages/Dashboard'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Profile from './pages/Profile'
import Pie from './pages/Pie'
import Old from './pages/old'
import ResponsiveTable from './pages/Table'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={tasksLoader}/>
      <Route path="create" element={<Create />} action={createAction} />
      <Route path="profile" element={<Profile />} />
      <Route path="pie" element={<Pie />} />
      <Route path="old" element={<Old />} />
      
    </Route>
    <Route path="/table" element={<ResponsiveTable />} />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App