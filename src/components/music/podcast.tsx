import { Button } from '@arco-design/web-react';


export function PodcastEmptyPlaceholder() {
  return (
    <div className="flex h-[450px] w-[98%] items-center justify-center rounded-md">
      <div className="mx-auto flex max-w-[300px] flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-12 w-12 text-4xl "
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="11" r="1" />
          <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0" />
          <path d="M17 18.5a9 9 0 1 0-10 0" />
        </svg>

        <h3 className="mt-4 text-lg font-semibold">No episodes added</h3>
        <p className="mb-6 mt-4 text-base ">
          You have not added any podcasts. Add one below.
        </p>
        <div>
            <Button className="relative">
              Add Podcast
            </Button>
        </div>
      </div>
    </div>
  )
}