'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { BiWorld } from 'react-icons/bi';

export default function LanguageSwitch() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className="flex items-center gap-2">
      <BiWorld className="text-lg" />
      <select
        className="bg-transparent border-none cursor-pointer"
        defaultValue={localeActive}
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="pt" className="text-black">
          PT
        </option>
        <option value="en" className="text-black">
          EN
        </option>
      </select>
    </div>
  );
}
