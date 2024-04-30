"use client";
// import { useLocale } from "next-intl";
// import { useRouter } from "next/navigation";
// import { useState, useTransition } from "react";
// import { usePathname } from "next/navigation";
// import { FiChevronDown, FiChevronUp, FiGlobe } from "react-icons/fi";

// export default function LocalSwitcher() {
//   const [isPending, startTransition] = useTransition();
//   const [isBoxOpen, setIsBoxOpen] = useState(true);
//   const router = useRouter();
//   const pathname = usePathname();
//   const localActive = useLocale();

//   const getPathWithoutLocale = (pathname: string, locale: string) => {
//     const prefixRegex = new RegExp(`^/${locale}`);
//     return pathname.replace(prefixRegex, "");
//   };

//   const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const nextLocale = e.target.value;
//     const pathnameWithoutLocale = getPathWithoutLocale(pathname, localActive);
//     startTransition(() => {
//       router.replace(`/${nextLocale}${pathnameWithoutLocale}`);
//     });
//   };

//   return (
//     <>
//       <label className=" mx-4 border-l border-r pl-4 flex items-center ">
//         <button className="">
//           <FiGlobe />
//         </button>
//         <select
//           onClick={() => setIsBoxOpen(!isBoxOpen)}
//           defaultValue={localActive}
//           className="py-1 px-2 w-full rounded text-black bg-transparent outline-none  cursor-pointer"
//           onChange={onSelectChange}
//           disabled={isPending}
//         >
//           <option value="en">English</option>
//           <option value="ka">ქართული</option>
//         </select>
//         <div className="pr-2">
//           {isBoxOpen ? <FiChevronDown /> : <FiChevronUp />}
//         </div>
//       </label>
//     </>
//   );
// }

// import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";

// export default function SelectSmall() {
//   const [isPending, startTransition] = useTransition();
//   const [isBoxOpen, setIsBoxOpen] = useState(true);
//   const [language, setLanguage] = React.useState("");

//   const router = useRouter();

//   const handleChange = (event: SelectChangeEvent) => {
//     setLanguage(event.target.value);
//   };

//   const getPathWithoutLocale = (pathname: string, locale: string) => {
//     const prefixRegex = new RegExp(`^/${locale}`);
//     return pathname.replace(prefixRegex, "");
//   };

//   const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const nextLocale = e.target.value;
//     const pathnameWithoutLocale = getPathWithoutLocale(pathname, localActive);
//     startTransition(() => {
//       router.replace(`/${nextLocale}${pathnameWithoutLocale}`);
//     });
//   };

//   return (
//     <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//       <InputLabel id="demo-select-small-label">Language</InputLabel>
//       <Select
//         labelId="demo-select-small-label"
//         id="demo-select-small"
//         value={language}
//         label="Language"
//         onChange={handleChange}
//       >
//         {/* <MenuItem value=""></MenuItem> */}
//         <MenuItem value={10}>English</MenuItem>
//         <MenuItem value={20}>ქართული</MenuItem>
//       </Select>
//     </FormControl>
//   );
// }

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
    setLanguage(nextLocale);
    const pathnameWithoutLocale = getPathWithoutLocale(pathname, localActive);
    startTransition(() => {
      router.replace(`/${nextLocale}${pathnameWithoutLocale}`);
    });
  };

  useEffect(() => {
    setLanguage(localActive);
  }, [localActive]);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
