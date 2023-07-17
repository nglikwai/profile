"use client"
import { PageWrapper } from '@/components/global/PageWrapper'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

type Props = {}

const Custom404Page: FC<Props> = () => {
    const router = useRouter()
    router.push('/')
    return (
        <PageWrapper>
            <div className='h-screen'>
                Not Found. Redirecting...
            </div>
        </PageWrapper>
    )
}

export default Custom404Page
