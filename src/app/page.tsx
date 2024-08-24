import Link from "next/link";
import Image from "next/image";
const Homepage = () => {
  return (
    <div>
      <div className="">Homepage Links</div>
      <br />
      <div className="mt-4 text-sm">
        <div className="flex flex-col gap-2">
          <span className="hidden lg:block text-gray-400 font-light my-4 ml-2">
            Dashboard Pages
          </span>
          <Link
            href={"/admin"}
            className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-[#EDF9FD]"
          >
            <Image src="/profile.png" alt="" width={28} height={20} />
            <span className="hidden lg:block">Admin Dashboard</span>
          </Link>
          <Link
            href={"/parent"}
            className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-[#EDF9FD]"
          >
            <Image src="/profile.png" alt="" width={28} height={20} />
            <span className="hidden lg:block">Parent Dashboard</span>
          </Link>
          <Link
            href={"/student"}
            className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-[#EDF9FD]"
          >
            <Image src="/profile.png" alt="" width={28} height={20} />
            <span className="hidden lg:block">Student Dashboard</span>
          </Link>
          <Link
            href={"/teacher"}
            className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-[#EDF9FD]"
          >
            <Image src="/profile.png" alt="" width={28} height={20} />
            <span className="hidden lg:block">Teacher Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
