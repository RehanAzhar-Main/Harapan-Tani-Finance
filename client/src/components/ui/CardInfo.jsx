// 'use client';

import { Card } from 'flowbite-react';

export default function StockCard({cardTitle,values, denomination}) {

  return (
    <Card className='w-64'>
      <div className=" flex items-center justify-between ">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {cardTitle}
        </h5>
        <a
          className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          href="#"
        >
          <p>
            View all
          </p>
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-2xl font-medium text-gray-900 dark:text-white">
                  {values} <span className='text-xl'>{denomination}</span>
                </p>
                {/* <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  email@windster.com
                </p> */}
              </div>
              {/* <div className="inline-flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
              {values}
              </div> */}
            </div>
          </li>
        </ul>
      </div>
    </Card>
  )
}


