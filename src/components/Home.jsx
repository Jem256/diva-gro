import React from 'react'


function Home() {
  return (
    <div>
      <section className="container tw_hero_block_bg_img_horizontal_block py-4 mx-auto  bg-no-repeat">
        <div className="grid grid-cols-2 gap-4 py-5 mx-auto p-5 tw_hero_block_bg_img_horizontal_block_wrap max-w-4xl">
          <div className="flex align-center justify-center flex-col">
                <h1 className="text-left justify-left text-3xl tracking-tight text-gray-900  font-extrabold leading-sm pb-3">The Better Way to Save</h1>
                <p className="text-left justify-left text-md  text-gray-900 max-w-3xl leading-tight">
                Divagro helps customers achieve their financial goals by helping them save with ease through personal targets.
                </p>
                <a href="/" className="hidden md:block relative float-left px-4 py-2 mt-3 text-center inline-flex items-left justify-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md select-none transition-colors duration-700 whitespace-nowrap text-base font-medium w-32">
                Explore
              </a>
          </div>
          <div className="">
            <img src="https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/blockui/Mf849b06c8910b2432490a4d0922322861645764565209/assets/Mabc973d50dd2c3681fa37b9a455dd3361646032391249/14.png" alt="screenshots"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home