import { SessionProvider } from 'next-auth/react'
import { ConfigProvider } from 'antd'

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zh_CN from 'antd/lib/locale/zh_CN'

import 'antd/dist/antd.less'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <ConfigProvider autoInsertSpaceInButton={false} locale={zh_CN}>
          <SessionProvider session={pageProps.session}>          
              <Component {...pageProps} />          
          </SessionProvider>
        </ConfigProvider>
}

export default MyApp
