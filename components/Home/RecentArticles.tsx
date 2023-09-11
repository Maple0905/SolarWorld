import Image from 'next/image';
import ArticleImg1 from '../../public/img/recent_article_1.png';
import ArticleImg2 from '../../public/img/recent_article_2.png';
import ArticleImg3 from '../../public/img/recent_article_3.png';

export default function RecentArticle() {
  return (
    <div className="w-full flex flex-col items-center py-24 bg-[#FEF6EB]">
      <div className="max-w-6xl flex flex-col items-center">
        <div className="inline-block flex flex-col items-center">
          <hr className="mb-3 border-orange-300" style={{ width: '40%' }}></hr>
          <h6 className="text-md text-slate-600 mb-5">OUR BLOGS</h6>
        </div>
        <div className="flex text-4xl font-extrabold pb-10">
          <h1 className="">Recent</h1>
          <h1 className="text-orange-400">&nbsp;Articles</h1>
        </div>
        <div className="md:grid md:grid-cols-12 gap-12">
          <div className="col-span-4 drop-shadow-xl p-10 md:p-0">
            <div className="w-full p-7 bg-white">
              <a href="#">
                <Image className="cover w-full h-full pb-5" src={ArticleImg1.src} alt="My Image" width={500} height={500} />
                <h1 className="text-xl font-bold">Expanding The Solar Supply Chain Finance</h1>
              </a>
              <div className="py-3 flex items-center">
                <div className="flex items-center">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 13.626C14 13.7354 13.9385 13.8356 13.8154 13.9268C13.6924 14.0179 13.5033 14.0931 13.248 14.1523C12.9928 14.2116 12.7308 14.2663 12.4619 14.3164C12.193 14.3665 11.849 14.4053 11.4297 14.4326C11.0104 14.46 10.6458 14.4805 10.3359 14.4941C10.026 14.5078 9.62728 14.5192 9.13965 14.5283C8.65202 14.5374 8.28288 14.542 8.03223 14.542H5.96777L4.86035 14.5283L3.66406 14.4941L2.57031 14.4326L1.53809 14.3164L0.751953 14.1523L0.18457 13.9268L0 13.626C0.0182292 12.8239 0.519531 12.1152 1.50391 11.5C2.48828 10.8848 3.73698 10.4769 5.25 10.2764V9.8252C4.77604 9.61556 4.36589 9.31934 4.01953 8.93652C3.67318 8.55371 3.39974 8.10482 3.19922 7.58984C2.9987 7.07487 2.85286 6.52344 2.76172 5.93555C2.67057 5.34766 2.625 4.71191 2.625 4.02832C2.625 3.44499 2.73893 2.92546 2.9668 2.46973C3.19466 2.014 3.50911 1.64714 3.91016 1.36914C4.3112 1.09115 4.77148 0.88151 5.29102 0.740234C5.81055 0.598958 6.38021 0.52832 7 0.52832C7.61979 0.52832 8.18945 0.598958 8.70898 0.740234C9.22852 0.88151 9.6888 1.09115 10.0898 1.36914C10.4909 1.64714 10.8053 2.014 11.0332 2.46973C11.2611 2.92546 11.375 3.44499 11.375 4.02832C11.375 7.21842 10.5 9.15983 8.75 9.85254V10.2764C10.263 10.4769 11.5117 10.8848 12.4961 11.5C13.4805 12.1152 13.9818 12.8239 14 13.626Z" fill="#F6A235"/>
                  </svg>
                  <p className="text-orange-400 pl-2">By Admin</p>
                </div>
                <div className="flex items-center pl-5">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99935 1.70166C3.78285 1.70166 1.16602 4.31849 1.16602 7.53499C1.16602 10.7515 3.78285 13.3683 6.99935 13.3683C10.2158 13.3683 12.8327 10.7515 12.8327 7.53499C12.8327 4.31849 10.2158 1.70166 6.99935 1.70166ZM8.92027 10.2807L6.41602 7.77649V4.03499H7.58268V7.29349L9.7451 9.45591L8.92027 10.2807Z" fill="#F6A235"/>
                </svg>
                <p className="text-orange-400 pl-2">July 2, 2021</p>
                </div>
              </div>
              <h6 className="text-md pb-3">The great thing about solar panels is that they do not require a lot of maintenance.</h6>
              <a href="#" className="text-orange-400 text-md font-bold">Read More</a>
            </div>
          </div>
          <div className="col-span-4 drop-shadow-xl p-10 md:p-0">
            <div className="w-full p-7 bg-white">
              <a href="#">
                <Image className="cover w-full h-full pb-5" src={ArticleImg2.src} alt="My Image" width={500} height={500} />
                <h1 className="text-xl font-bold">Addressing Wind Energy Innovation Challenges</h1>
              </a>
              <div className="py-3 flex items-center">
                <div className="flex items-center">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 13.626C14 13.7354 13.9385 13.8356 13.8154 13.9268C13.6924 14.0179 13.5033 14.0931 13.248 14.1523C12.9928 14.2116 12.7308 14.2663 12.4619 14.3164C12.193 14.3665 11.849 14.4053 11.4297 14.4326C11.0104 14.46 10.6458 14.4805 10.3359 14.4941C10.026 14.5078 9.62728 14.5192 9.13965 14.5283C8.65202 14.5374 8.28288 14.542 8.03223 14.542H5.96777L4.86035 14.5283L3.66406 14.4941L2.57031 14.4326L1.53809 14.3164L0.751953 14.1523L0.18457 13.9268L0 13.626C0.0182292 12.8239 0.519531 12.1152 1.50391 11.5C2.48828 10.8848 3.73698 10.4769 5.25 10.2764V9.8252C4.77604 9.61556 4.36589 9.31934 4.01953 8.93652C3.67318 8.55371 3.39974 8.10482 3.19922 7.58984C2.9987 7.07487 2.85286 6.52344 2.76172 5.93555C2.67057 5.34766 2.625 4.71191 2.625 4.02832C2.625 3.44499 2.73893 2.92546 2.9668 2.46973C3.19466 2.014 3.50911 1.64714 3.91016 1.36914C4.3112 1.09115 4.77148 0.88151 5.29102 0.740234C5.81055 0.598958 6.38021 0.52832 7 0.52832C7.61979 0.52832 8.18945 0.598958 8.70898 0.740234C9.22852 0.88151 9.6888 1.09115 10.0898 1.36914C10.4909 1.64714 10.8053 2.014 11.0332 2.46973C11.2611 2.92546 11.375 3.44499 11.375 4.02832C11.375 7.21842 10.5 9.15983 8.75 9.85254V10.2764C10.263 10.4769 11.5117 10.8848 12.4961 11.5C13.4805 12.1152 13.9818 12.8239 14 13.626Z" fill="#F6A235"/>
                  </svg>
                  <p className="text-orange-400 pl-2">By Admin</p>
                </div>
                <div className="flex items-center pl-5">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99935 1.70166C3.78285 1.70166 1.16602 4.31849 1.16602 7.53499C1.16602 10.7515 3.78285 13.3683 6.99935 13.3683C10.2158 13.3683 12.8327 10.7515 12.8327 7.53499C12.8327 4.31849 10.2158 1.70166 6.99935 1.70166ZM8.92027 10.2807L6.41602 7.77649V4.03499H7.58268V7.29349L9.7451 9.45591L8.92027 10.2807Z" fill="#F6A235"/>
                </svg>
                <p className="text-orange-400 pl-2">July 2, 2021</p>
                </div>
              </div>
              <h6 className="text-md pb-3">The great thing about solar panels is that they do not require a lot of maintenance.</h6>
              <a href="#" className="text-orange-400 text-md font-bold py-2">Read More</a>
            </div>
          </div>
          <div className="col-span-4 drop-shadow-xl p-10 md:p-0">
            <div className="w-full p-7 bg-white">
              <a href="#">
                <Image className="cover w-full h-full pb-5" src={ArticleImg3.src} alt="My Image" width={500} height={500} />
                <h1 className="text-xl font-bold">Smarter Ways To Manage EV Charging Infrastructures</h1>
              </a>
              <div className="py-3 flex items-center">
                <div className="flex items-center">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 13.626C14 13.7354 13.9385 13.8356 13.8154 13.9268C13.6924 14.0179 13.5033 14.0931 13.248 14.1523C12.9928 14.2116 12.7308 14.2663 12.4619 14.3164C12.193 14.3665 11.849 14.4053 11.4297 14.4326C11.0104 14.46 10.6458 14.4805 10.3359 14.4941C10.026 14.5078 9.62728 14.5192 9.13965 14.5283C8.65202 14.5374 8.28288 14.542 8.03223 14.542H5.96777L4.86035 14.5283L3.66406 14.4941L2.57031 14.4326L1.53809 14.3164L0.751953 14.1523L0.18457 13.9268L0 13.626C0.0182292 12.8239 0.519531 12.1152 1.50391 11.5C2.48828 10.8848 3.73698 10.4769 5.25 10.2764V9.8252C4.77604 9.61556 4.36589 9.31934 4.01953 8.93652C3.67318 8.55371 3.39974 8.10482 3.19922 7.58984C2.9987 7.07487 2.85286 6.52344 2.76172 5.93555C2.67057 5.34766 2.625 4.71191 2.625 4.02832C2.625 3.44499 2.73893 2.92546 2.9668 2.46973C3.19466 2.014 3.50911 1.64714 3.91016 1.36914C4.3112 1.09115 4.77148 0.88151 5.29102 0.740234C5.81055 0.598958 6.38021 0.52832 7 0.52832C7.61979 0.52832 8.18945 0.598958 8.70898 0.740234C9.22852 0.88151 9.6888 1.09115 10.0898 1.36914C10.4909 1.64714 10.8053 2.014 11.0332 2.46973C11.2611 2.92546 11.375 3.44499 11.375 4.02832C11.375 7.21842 10.5 9.15983 8.75 9.85254V10.2764C10.263 10.4769 11.5117 10.8848 12.4961 11.5C13.4805 12.1152 13.9818 12.8239 14 13.626Z" fill="#F6A235"/>
                  </svg>
                  <p className="text-orange-400 pl-2">By Admin</p>
                </div>
                <div className="flex items-center pl-5">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99935 1.70166C3.78285 1.70166 1.16602 4.31849 1.16602 7.53499C1.16602 10.7515 3.78285 13.3683 6.99935 13.3683C10.2158 13.3683 12.8327 10.7515 12.8327 7.53499C12.8327 4.31849 10.2158 1.70166 6.99935 1.70166ZM8.92027 10.2807L6.41602 7.77649V4.03499H7.58268V7.29349L9.7451 9.45591L8.92027 10.2807Z" fill="#F6A235"/>
                </svg>
                <p className="text-orange-400 pl-2">July 2, 2021</p>
                </div>
              </div>
              <h6 className="text-md pb-3">The great thing about solar panels is that they do not require a lot of maintenance.</h6>
              <a href="#" className="text-orange-400 text-md font-bold py-2">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
