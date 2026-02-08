"use client";
import Image from "next/image";
import Link from "next/link";

function SchoolLogo() {
  return (
    <Link href="/">
      <Image
        src="/school_logo.svg"
        alt="School Logo"
        width={150}
        height={200}
      />
    </Link>
  );
}

export default SchoolLogo;
