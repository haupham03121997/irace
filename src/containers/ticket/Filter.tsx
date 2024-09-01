'use client';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
  subLabel?: string;
}
const Filter = () => {
  const distances: SelectOption[] = [
    {
      value: 'all',
      label: '- Tất cả cự ly - ',
      subLabel: '',
    },
    {
      value: '5',
      label: 'Full Run',
      subLabel: '(5km)',
    },
    {
      value: '10',
      label: 'Full Run',
      subLabel: '(10km)',
    },
    {
      value: '21',
      label: 'Half Marathon',
      subLabel: '(21km)',
    },
    {
      value: '42',
      label: 'Full Marathon',
      subLabel: '(42.195km)',
    },
    {
      value: '42.195',
      label: 'Ultra Marathon',
      subLabel: '(>42.195km)',
    },
    {
      value: '100',
      label: 'Supper Marathon',
      subLabel: '(>100km)',
    },
  ];

  const places: SelectOption[] = [
    {
      value: 'all',
      label: '- Tất cả địa điểm - ',
      subLabel: '',
    },
    {
      value: 'hanoi',
      label: 'Hà Nội',
      subLabel: '(1)',
    },
    {
      value: 'hochiminh',
      label: 'Hồ Chí Minh',
      subLabel: '(1)',
    },
    {
      value: 'danang',
      label: 'Đà Nẵng',
      subLabel: '(1)',
    },
    {
      value: 'nhatrang',
      label: 'Nha Trang',
      subLabel: '(1)',
    },
    {
      value: 'dalat',
      label: 'Đà Lạt',
      subLabel: '(1)',
    },
    {
      value: 'vungtau',
      label: 'Vũng Tàu',
      subLabel: '(1)',
    },
    {
      value: 'phuquoc',
      label: 'Phú Quốc',
      subLabel: '(1)',
    },
    {
      value: 'quangbinh',
      label: 'Quảng Bình',
      subLabel: '(1)',
    },
    {
      value: 'quangtri',
      label: 'Quảng Trị',
      subLabel: '(1)',
    },
    {
      value: 'quangngai',
      label: 'Quảng Ngãi',
      subLabel: '(1)',
    },
    {
      value: 'quangninh',
      label: 'Quảng Ninh',
      subLabel: '(1)',
    },
    {
      value: 'quangnam',
      label: 'Quảng Nam',
      subLabel: '(1)',
    },
  ];

  const times: SelectOption[] = [
    {
      value: 'all',
      label: '- Tất cả thời gian -',
      subLabel: '',
    },
    {
      value: '03/2023',
      label: 'Tháng 3/2023',
      subLabel: '(1)',
    },
    {
      value: '04/2023',
      label: 'Tháng 4/2023',
      subLabel: '(1)',
    },
    {
      value: '05/2023',
      label: 'Tháng 5/2023',
      subLabel: '(1)',
    },
    {
      value: '06/2023',
      label: 'Tháng 6/2023',
      subLabel: '(1)',
    },
    {
      value: '07/2023',
      label: 'Tháng 7/2023',
      subLabel: '(1)',
    },
    {
      value: '08/2023',
      label: 'Tháng 8/2023',
      subLabel: '(1)',
    },
    {
      value: '09/2023',
      label: 'Tháng 9/2023',
      subLabel: '(1)',
    },
    {
      value: '10/2023',
      label: 'Tháng 10/2023',
      subLabel: '(1)',
    },
    {
      value: '11/2023',
      label: 'Tháng 11/2023',
      subLabel: '(1)',
    },
    {
      value: '12/2023',
      label: 'Tháng 12/2023',
      subLabel: '(1)',
    },
    {
      value: '01/2024',
      label: 'Tháng 1/2024',
      subLabel: '(1)',
    },
    {
      value: '02/2024',
      label: 'Tháng 2/2024',
      subLabel: '(1)',
    },
    {
      value: '03/2024',
      label: 'Tháng 3/2024',
      subLabel: '(1)',
    },
    {
      value: '04/2024',
      label: 'Tháng 4/2024',
      subLabel: '(1)',
    },
    {
      value: '05/2024',
      label: 'Tháng 5/2024',
      subLabel: '(1)',
    },
    {
      value: '06/2024',
      label: 'Tháng 6/2024',
      subLabel: '(1)',
    },
  ];

  return (
    <div className="border border-card border-solid shadow-card bg-white rounded-md overflow-hidden p-5 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div>
        <Input
          startAdornment={<Search size={16} />}
          className="py-5 focus:outline-none focus-visible:ring-0 text-base"
          placeholder="Nhập tên sự kiện"
        />
      </div>
      <div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full py-5 focus:outline-none focus-visible:ring-0 text-base">
            <SelectValue placeholder="Chọn cự ly" />
          </SelectTrigger>
          <SelectContent>
            {distances.map((distance) => (
              <SelectItem className="cursor-pointer" key={distance.value} value={distance.value}>
                {distance.label} <span className="text-muted-foreground">{distance.subLabel}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full py-5 focus:outline-none focus-visible:ring-0 text-base">
            <SelectValue placeholder="Chọn địa điểm" />
          </SelectTrigger>
          <SelectContent>
            {places.map((place) => (
              <SelectItem className="cursor-pointer" key={place.value} value={place.value}>
                {place.label} <span className="text-muted-foreground">{place.subLabel}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full py-5 focus:outline-none focus-visible:ring-0 text-base">
            <SelectValue placeholder="Chọn thời gian" />
          </SelectTrigger>
          <SelectContent>
            {times.map((time) => (
              <SelectItem className="cursor-pointer" key={time.value} value={time.value}>
                {time.label} <span className="text-muted-foreground">{time.subLabel}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filter;
