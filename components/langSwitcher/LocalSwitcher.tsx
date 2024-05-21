"use client";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function SelectSmall() {
  const [isPending, startTransition] = useTransition();
  const [language, setLanguage] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const getPathWithoutLocale = (pathname: string, locale: string) => {
    const prefixRegex = new RegExp(`^/${locale}`);
    return pathname.replace(prefixRegex, "");
  };

  const handleChange = (event: SelectChangeEvent) => {
    const nextLocale = event.target.value as string;
    if (nextLocale !== language) {
      setLanguage(nextLocale);
      const pathnameWithoutLocale = getPathWithoutLocale(pathname, localActive);
      startTransition(() => {
        router.replace(`/${nextLocale}${pathnameWithoutLocale}`);
      });
    }
  };

  useEffect(() => {
    setLanguage(localActive);
  }, [localActive]);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="!my-4">
      <InputLabel className="dark:text-white" id="demo-select-small-label">
        Language
      </InputLabel>
      <Select
        className="dark:text-white"
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={language}
        disabled={isPending}
        label="Language"
        onChange={handleChange}
      >
        <MenuItem aria-checked value="en">
          English
        </MenuItem>
        <MenuItem value="ka">ქართული</MenuItem>
      </Select>
    </FormControl>
  );
}
