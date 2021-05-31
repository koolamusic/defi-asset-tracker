import { NextPageContext } from 'next'
import axios from 'axios'
import * as Auth from '../utils/user'

export default function Logout() {
  return <section>Keep Calm while we log you out</section>
}

// export async function getServerSideProps(ctx: NextPageContext) {
Logout.getInitialProps = async (ctx: NextPageContext) => {
  const logoutOnServer = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/logout`
  )
  console.log(logoutOnServer.data)

  if (logoutOnServer.data.success == true) {
    await Auth.logoutUser(ctx, '/login')
  }

  return {}
}
