'use client';

import { useDebounce } from '@uidotdev/usehooks';
import { Search as SearchIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { cn } from '@/libs/utils';

const Search: React.FC = () => {
  const [showSearch, setShowSearch] = React.useState('result');
  const [searchValue, setSearchValue] = React.useState('');

  const debouncedSearchValue = useDebounce(searchValue, 300);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  React.useEffect(() => {
    setShowSearch(debouncedSearchValue ? 'result' : '');
  }, [debouncedSearchValue]);

  return (
    <div className=" cursor-pointer ">
      <Dialog
        onOpenChange={(open) => {
          if (!open) setSearchValue('');
        }}
      >
        <DialogTrigger asChild>
          <SearchIcon size={16} color="#555b6d" />
        </DialogTrigger>
        <DialogContent
          isDialogSearch
          hideCloseIcon
          aria-description="Search dialog"
          className="max-w-md sm:max-w-xl rounded-lg sm:rounded-xl bg-none outline-none border-none p-0 gap-0"
        >
          <DialogTitle></DialogTitle>
          <Input
            placeholder="Tìm sự kiện"
            className="border-none py-6 px-3 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent shadow-card text-base "
            startAdornment={
              <div className="flex items-center justify-center">
                <SearchIcon size={18} className="stroke-secondary" />
              </div>
            }
            endAdornment={
              <div className="px-[4px] py-[1px] border border-gray-700 rounded-md mr-3 bg-gray-100">
                <p className="font-bold text-secondary text-xs">esc</p>
              </div>
            }
            onChange={handleSearch}
          />

          <Accordion type="single" collapsible value={showSearch}>
            <AccordionItem value="result" className={cn('border-b-0')}>
              <AccordionContent>
                <div className="shadow-header h-[3px] mb-4"></div>
                <div>
                  <p className="text-base font-medium text-secondary mb-3 pl-4">Kết quả tìm kiếm (2)</p>
                  <div className="flex flex-col gap-2 max-h-96 overflow-y-scroll px-4">
                    {Array.from({ length: 20 }).map((_, index) => (
                      <div className="flex gap-2" key={`search-result-${index}`}>
                        <div className=" w-[6px] h-[6px] rounded-full bg-secondary mt-[8px]"></div>
                        <p className="flex-1">
                          <Link href="#" className="text-secondary font-medium hover:text-primary">
                            Spin & Run Together - Challenge Your Limits Spin
                          </Link>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Search;
