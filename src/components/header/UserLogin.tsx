'use client';
import { BookCheck, CalendarCheck2, ChevronDown, LogOut, Medal, Ticket, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import NoAvatar from '@/assets/images/ic_noavt.png';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuthStore } from '@/stores/useAuthStore';

const listItem = [
  {
    label: 'Cá nhân',
    icon: <User size={14} />,
    key: 'profile',
    path: '/me',
  },
  {
    label: 'Huy chương của tôi',
    icon: <Medal size={14} />,
    key: 'medal',
  },
  {
    label: 'Sự kiện đã tham gia',
    icon: <CalendarCheck2 size={14} />,
    key: 'event',
  },
  {
    label: 'Đơn hàng',
    icon: <BookCheck size={14} />,
    key: 'order',
  },
  {
    label: 'Vé sự kiện',
    icon: <Ticket size={14} />,
    key: 'ticket',
    divider: true,
  },
  {
    label: 'Đăng xuất',
    icon: <LogOut size={14} />,
    key: 'logout',
  },
];

const UserLogin: React.FC = () => {
  const { user, logout } = useAuthStore((state) => state);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = (key: string) => {
    setIsOpen(false);
    if (key === 'logout') {
      logout();
    }
  };

  return (
    <div>
      {user ? (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger>
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-[36px] h-[36px] rounded-full border border-gray-200 flex items-center justify-center">
                <div className="w-[30px] h-[30px] relative">
                  <Image src={NoAvatar} alt="avatar" fill sizes="auto" className="object-cover" priority />
                </div>
              </div>
              <ChevronDown size={14} className="group-hover:stroke-primary bg-white" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-5 shadow-dropdown" onCloseAutoFocus={(e) => e.preventDefault()}>
            {listItem.map((item, index) => {
              const lastItem = listItem.length - 1;
              return (
                <>
                  <DropdownMenuItem key={`drop-user-header-${index}-${item.key}`}>
                    <Link
                      href={item.path || '#'}
                      className="text-gray-500 font-medium hover:text-primary duration-300 py-2 px-4"
                    >
                      <div className="flex items-center gap-2" onClick={() => handleLinkClick(item.key)}>
                        {item.icon}
                        <p>{item.label}</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  {item.divider && index !== lastItem && <hr className="block border-gray-200 w-full" />}
                </>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button className="md:py-[8.5px]">
          <Link href={'/login'}>Đăng nhập</Link>
        </Button>
      )}
    </div>
  );
};

export default UserLogin;
