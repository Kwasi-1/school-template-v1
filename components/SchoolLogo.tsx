"use client";
import Image from "next/image";

function SchoolLogo() {
  return (
    <div>
      <Image
        src="/school_logo.svg"
        alt="School Logo"
        width={150}
        height={200}
      />
    </div>
  );
}

export default SchoolLogo;
