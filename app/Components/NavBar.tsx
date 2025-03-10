'use client';

import React from 'react';
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import ThemeDropdown from './ThemeDropdown/ThemeDropdown';
import SearchDialog from './SearchDialog/SearchDialog';

function NavBar() {
   const router = useRouter();
  return (
    <div className='w-full py-4 flex items-center justify-between'>
        <div className="left"></div>
        <div className='search-container flex shrink-0 w-full gap-2 sm:w-fit'>
          <SearchDialog/>
          <div className='btn-group flex items-center gap-2'>
          <ThemeDropdown/>
            <Button className='source-code flex items-center gap-2'
             onClick={() => {
                router.push("https://ui.shadcn.com/docs/dark-mode/next");
             }}
            >Source code</Button>
            </div>
        </div>
    </div>
  )
}

export default NavBar;