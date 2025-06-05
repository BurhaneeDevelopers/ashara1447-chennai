import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="p-7">
        <div className="flex justify-between items-center h-16">
          <div className="">
            <Link href="/">
              <Image
                src="/ashara-tagline.png"
                alt="Ashara Logo"
                width={70}
                height={40}
                priority
              />
            </Link>
          </div>

          <div className="hidden sm:flex gap-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-xl font-medium">
              🏠 Home
            </Link>
            <Link href="/your-journey" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-xl font-medium">
              🛣️ Your Journey
            </Link>
            <Link href="/transport" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-xl font-medium">
              🚌 Transport
            </Link>
            <Link href="/zones" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-xl font-medium">
              📍 Zones
            </Link>
            <Link href="/general-guidelines" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-xl font-medium">
              📋 General Guidelines
            </Link>
            <Link href="/accommodation" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-xl font-medium">
              🏨 Accommodation
            </Link>
            <Link href="/relay-center" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-xl font-medium">
              🔄 Relay Centers
            </Link>
            <Link href="/explore" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-xl font-medium">
              🔍 Explore
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}