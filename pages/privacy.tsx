import React, { useEffect } from 'react'
import jQuery from 'jquery'
import Layout from 'components/Layout'
import { MDXRemote } from "next-mdx-remote";
import { parseMDX } from "components/parseMdx";

const TextArea = () => {
    const registerKeyPresses = (e) => {
      let consonants = [
        "b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z",
      ];
      let grapheme = e.key;
        for (let i = 0; i < consonants.length; i++) {
          if (grapheme === consonants[i]) {
            console.log("consonant");
          }
        }
    };
  
    return (
      <form className="textinputframe">
        <div className="textinputframe">
          <textarea
            className="textinput"
            onKeyDown={registerKeyPresses}
          />
        </div>
      </form>
    );
  };
  
export default function Privacy({ mdxSource }){

    useEffect(() => {
        jQuery(function($){
            $.fn.SnakeParallax=function(a){this.ready(function(){$('[snake-parallax="hero"]').css({"background-repeat":"no-repeat","background-size":"cover",overflow:"hidden",width:"100%",height:"100vh",position:"relative"}),$("head").append($("<style>body,html{width:100%;height:100%;}</style>"));var e=$.extend({backgroundPosition:"center top",backgroundImage:""},a);return $('[snake-parallax="hero"]').css({backgroundPosition:e.backgroundPosition,backgroundImage:e.backgroundImage})}),this.scroll(function(){var a=$(document).scrollTop().valueOf()/2;$('[snake-parallax="hero"]').css({height:"calc(100vh - "+Math.round(a)+"px)"})})};
            $(document, window).SnakeParallax({
                backgroundPosition:"center top",
                backgroundImage:"url(/assets/images/education.jpg)"
            });
        })
    })

    return (
        <Layout env='privacy'>
            <div className='content-header relative privacy px-5 py-10 md:px-10 h-128 flex flex-col justify-start align-center grid content-end'>
                <div className='text-white relative'>
                    <h1 className='text-5xl relative bf-bottom font-extrabold sm:text-6xl'>Privacy</h1>
                </div>
            </div>
            <TextArea/>
            <div className='mx-auto'>
                {/* <li className='align-center text-center list-none'><a href="" title="" style={{backgroundImage: `url("data:image/svg+xml,${file}")`}}><span className="text">8888</span></a></li> */}
            </div>
            <div className='mx-auto max-w-4xl bg-gray-100 rounded-md p-5 mt-10'>
                <MDXRemote {...mdxSource} />
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const privacyData = await parseMDX('privacy', "pages");
	return {
		props: {
			...privacyData,
		},
	};
}