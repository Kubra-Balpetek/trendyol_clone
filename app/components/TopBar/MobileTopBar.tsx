'use client';

export default function MobileTopBar() {
  return (
    <div className="md:hidden flex bg-white rounded-lg border border-gray-200 px-3 py-2 mb-3 gap-2 sticky top-14 z-30">
      <button className="flex-1 flex items-center justify-center gap-2 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-700">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0014 14v5a1 1 0 01-.553.894l-4 2A1 1 0 018 21v-7a1 1 0 01-.293-.707L1.293 6.707A1 1 0 011 6V4z"/>
        </svg>
        Filtrele
      </button>
      <button className="flex-1 flex items-center justify-center gap-2 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-700">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"/>
        </svg>
        Sırala
      </button>
    </div>
  );
}