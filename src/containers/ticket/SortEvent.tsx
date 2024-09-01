import React from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SORT_EVENT_OPTIONS } from '@/constants/options';

const SortEvent: React.FC = () => {
  const sortOptions = [
    {
      value: SORT_EVENT_OPTIONS.NEWEST,
      label: 'Mới nhất',
    },
    {
      value: SORT_EVENT_OPTIONS.POPULAR,
      label: 'Phổ biến',
    },
    {
      value: SORT_EVENT_OPTIONS.ENDING,
      label: 'Đã kết thúc',
    },
  ];
  return (
    <Select defaultValue="newest">
      <SelectTrigger className="w-[210px] py-5">
        <span>Sắp xếp theo:</span> <SelectValue placeholder="Sắp xếp theo" />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((sortOption) => (
          <SelectItem className="cursor-pointer" key={sortOption.value} value={sortOption.value}>
            {sortOption.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortEvent;
