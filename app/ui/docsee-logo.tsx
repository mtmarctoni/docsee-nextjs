import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
//import { lusitana, montserrat } from '@/app/ui/fonts';

export default function DocseeLogo() {
  return (
    <div className={`flex flex-row items-center leading-none text-white`}>
      <PaperAirplaneIcon className="h-12 w-12 rotate-[-45deg]" />
      <p className={`text-[44px]`}>Docs EE</p>
    </div>
  );
}
