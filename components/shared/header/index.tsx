import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';

const Header = () => {
    return <header className='w-full border-b'>
        <div className='wrapper flex-between'></div>
        <div className='flex-start'>
            <Link href='/' className='flex-start'>
                <Image src='/images/logo.svg' alt={`${APP_NAME} logo`} height={48} width={48} priority={true}/>
                <span className="hidden font-bold lg:block text-2xl ml-3">
                    {APP_NAME}
                </span>
            </Link>
        </div>
        <div className='space-x-2'>
            <Button asChild variant='ghost'>
                <Link href='/cart'>
                    <ShoppingCart>Cart</ShoppingCart>
                </Link>
            </Button>
            <Button asChild variant='ghost'>
                <Link href='/cart'>
                    <UserIcon>Sign In</UserIcon>
                </Link>
            </Button>
        </div>
    </header>
}

export default Header;