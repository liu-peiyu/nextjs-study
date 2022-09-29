import { signOut } from 'next-auth/react'

import { Button } from 'antd'

export default function User(){
    return <div className='flex flex-col'>
        <p>用户中心</p>
        <Button onClick={() => signOut()}>退出</Button>
    </div>
}