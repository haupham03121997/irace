import { Button } from '@/components/ui/button';
import Image from 'next/image';

import NotFound from '@/assets/images/404.png';
import Link from 'next/link';

export default function PageNotFound() {
  return (
    <div className="bg-[#F3F3F3] w-screen h-screen">
      <div className="container flex items-center justify-center h-full">
        <div className="grid grid-cols-1 w-[500px]">
          <div className=" flex-col gap-4 text-center flex items-center justify-center">
            <Image src={NotFound} alt="404" />
            <h1 className="text-5xl font-bold text-black mt-4">Oh No! Error 404</h1>
            <p className="text-2xl text-gray-500 font-medium">
              Oops! That page seems to have taken a detour. Let us guide you back to your destination.
            </p>
            <Button size="lg" className="w-fit">
              <Link href="/">Go back</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
