import { Link } from '@arco-design/web-react';
import { IconPlayCircle, IconApps, IconSound, IconMusic, IconList } from '@arco-design/web-react/icon';



const Sidebar = () => {
  return (
    <div className='bg-black my-6 pr-2'>
      <div className='flex flex-col justify-start gap-1'>
        <p className='text-2xl pl-5 text-gray-200'>Discover</p>
        <div  className="flex flex-col ml-6 gap-2">
          <Link href='#' style={{ color: "gray" }} ><IconPlayCircle className='mr-4'/>Listen Now</Link>
          <Link href='#' style={{ color: "gray" }} ><IconApps className='mr-4'/>Browse</Link>
          <Link href='#' style={{ color: "gray" }} ><IconSound className='mr-4'/>Radio</Link>
        </div>
      </div>
      <div className='flex flex-col my-3 justify-start gap-1'>
        <p className='text-2xl pl-5 text-gray-200'>Library</p>
        <div className="flex flex-col ml-6 gap-2">
          <Link href='#' style={{ color: "gray" }} ><IconMusic className='mr-4'/>Playlists</Link>
          <Link href='#' style={{ color: "gray" }} ><IconMusic className='mr-4'/>Song</Link>
          <Link href='#' style={{ color: "gray" }} ><IconMusic className='mr-4'/>Made for You</Link>
          <Link href='#' style={{ color: "gray" }} ><IconMusic className='mr-4'/>Artisrs</Link>
          <Link href='#' style={{ color: "gray" }} ><IconMusic className='mr-4'/>Albums</Link>
        </div>
      </div>
      <div className='flex flex-col my-4 justify-start gap-1'>
        <p className='text-2xl pl-4 text-gray-200'>Playlists</p>
        <div className="flex flex-col ml-6 gap-2">
          <Link href='#' style={{ color: "gray" }} ><IconList className='mr-4'/>Log Discography</Link>
          <Link href='#' style={{ color: "gray" }} ><IconList className='mr-4'/>Bedtime Beats</Link>
          <Link href='#' style={{ color: "gray" }} ><IconList className='mr-4'/>Feeling Happy</Link>
          <Link href='#' style={{ color: "gray" }} ><IconList className='mr-4'/>I miss Y2K Pop</Link>
          <Link href='#' style={{ color: "gray" }} ><IconList className='mr-4'/>Runtober</Link>
          <Link href='#' style={{ color: "gray" }} ><IconList className='mr-4'/>Mellow Days</Link>
          <Link href='#' style={{ color: "gray" }} ><IconList className='mr-4'/>Eminem Essential</Link>
          <Link href='#' style={{ color: "gray" }} ><IconList className='mr-4'/>I miss Y2K Pop</Link>
          <Link href='#' style={{ color: "gray" }} ><IconList className='mr-4'/>Runtober</Link>
          <Link href='#' style={{ color: "gray" }} ><IconList className='mr-4'/>Mellow Days</Link>
          <Link href='#' style={{ color: "gray" }} ><IconList className='mr-4'/>Eminem Essential</Link>
        </div>
      </div>       
    </div>
  )
}

export default Sidebar