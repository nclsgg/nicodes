'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={24}
        height={24}
        sizes="24x24"
        alt="Loading Light/Dark theme switcher"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (resolvedTheme === 'dark') {
    return (
      <FiSun
        className="text-3xl hover:cursor-pointer hover:text-yellow-300"
        onClick={() => setTheme('light')}
      />
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <FiMoon
        className="text-3xl hover:cursor-pointer hover:text-gray-400"
        onClick={() => setTheme('dark')}
      />
    );
  }
}
