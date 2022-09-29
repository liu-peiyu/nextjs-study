import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signIn} from 'next-auth/react'

import { getCsrfToken } from "next-auth/react"

import Head from 'next/head'
import {Form, Input, Button} from 'antd'

function Signin(props){
    // console.log(props)
    const router = useRouter()
    const msg = router?.query?.msg//解析的错误信息  参数

    const [form] = Form.useForm()

    const  onFinish = (values) => {
        // /api/auth/callback/credentials
        // console.log('Success:', values);
        // const res = await request({method: 'POST', url:'/api/auth/signin/credentials', data:values})
        // console.log(res)
        signIn('credentials', values)
      };

    useEffect(()=>{
        // form.setFieldsValue({userName:'admin', csrfToken: props.csrfToken})
    }, [])
    


    return (
        <div>
            <Head>
                <title>登录</title>
                <meta name="description" content="管理登录"/>
                {/*<link rel="icon" href="/favicon.ico"/>*/}
            </Head>
            <main >
                <p className='title'>登录</p>
                <Form form={form} 
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{userName:'admin', csrfToken: props.csrfToken}}
                        onFinish={onFinish}
                        autoComplete="off">
                    <Form.Item label='token' name="csrfToken">
                        <Input />
                    </Form.Item>
                    
                    <Form.Item label='用户名' name="userName">
                        <Input />
                    </Form.Item>
                    
                    <Form.Item style={{marginTop: '40px'}}>
                        <Button htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>
            </main>
            <style global jsx>{`
                //设置背景
                body {
                    background-size:100% 100%;
                    background-attachment: fixed;
                }
            `}</style>
        </div>
    )
}

export async function getServerSideProps(context){
    return {
        props: {
            csrfToken: await getCsrfToken(context)
        }
    }
}

export default Signin