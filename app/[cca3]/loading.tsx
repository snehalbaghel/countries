export default function CountryDetails() {
  return (
    <>
      <nav className="md:hidden sticky inset-0 w-full bg-white z-10">
        <div className="m-4">
          <div className="h-8 w-8 bg-gray-200 animate-pulse rounded-md" />
        </div>
      </nav>
      <article className="flex h-screen flex-col p-6 pt-2 pb-20 md:p-16 overflow-scroll">
        <div className="flex items-center gap-x-3">
          {/* Heading */}
          <div className="text-4xl bg-gray-200 h-10 w-32 animate-pulse rounded-md my-1" />
        </div>

        <div>
          {/* Official Name */}
          <div className="h-7 w-28 bg-gray-200 animate-pulse rounded-md" />
          <div className="relative w-72 h-48 md:w-96 md:h-64 my-2 animate-pulse bg-gray-200 rounded-md" />
          <div className="h-6 bg-gray-200 w-64 animate-pulse rounded-md" />
          {/* Definition List */}
          <div className="divide-y divide-gray-200">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="px:0 py-2 md:px-4 md:py-6 grid grid-cols-3 gap-4"
              >
                <dt className="h-6 w-16 bg-gray-200 animate-pulse rounded-md"></dt>
                <dd className="col-span-2 sm:mt-0 h-6 w-32 bg-gray-200 animate-pulse rounded-md"></dd>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
